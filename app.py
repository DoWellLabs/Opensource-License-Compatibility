
import os
import re
from dotenv import load_dotenv
import requests
from flask import Flask, request, has_request_context
import logging
from flask.logging import default_handler
from logging.handlers import RotatingFileHandler
from github import Github, GithubIntegration
from doWellOpensourceLicenseCompatibility import doWellOpensourceLicenseCompatibility
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load variables from .env file
load_dotenv()

#setup logging
logger = logging.getLogger()

class RequestFormatter(logging.Formatter):
    def format(self, record):
        if has_request_context():
            record.url = request.url
            record.remote_addr = request.remote_addr
        else:
            record.url = None
            record.remote_addr = None

        return super().format(record)

formatter = RequestFormatter('[%(asctime)s] %(remote_addr)s requested %(url)s : %(levelname)s in %(module)s: %(message)s')
default_handler.setFormatter(formatter)

#console handler for log
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(formatter)
logger.addHandler(consoleHandler)

#file handler for log
fileHandler = RotatingFileHandler("logs.log", backupCount=200, maxBytes=2048)
fileHandler.setFormatter(formatter)
logger.addHandler(fileHandler)


app = Flask(__name__)
# MAKE SURE TO CHANGE TO YOUR APP NUMBER!!!!!
app_id = '676400'
# Read the bot certificate
path = "/home/brandon/Downloads/izzoh-app.2023-12-06.private-key.pem"
with open(
        os.path.normpath(os.path.expanduser(path)),
        'r'
) as cert_file:
    app_key = cert_file.read()
# Create an GitHub integration instance
git_integration = GithubIntegration(
    app_id,
    app_key,
)


@app.route("/", methods=['POST'])
def legalzard_bot():
    collaborators = []
    # Get the event payload
    payload = request.json
    # get license information
    repo_license_id = payload.get('repository').get('license')
    if not repo_license_id:
        return "ok"
    owner = payload['repository']['owner']['login']
    repo_name = payload['repository']['name']


    #get the email from the github users endpoint, using the repo owner's name
    user_info = requests.get(f'https://api.github.com/users/{owner}')

    #email_string = user_info.json()['email']

    #owner_email = sanitizeEmail(email_string)
    owner_email = user_info.json()['email']


   # Get a git connection as our bot
    # Here is where we are getting the permission to talk as our bot and not
    # as a Python webservice
    github_auth = git_integration.get_access_token(git_integration.get_installation(owner, repo_name).id).token
    git_connection = Github(login_or_token=github_auth)
    repo = git_connection.get_repo(f"{owner}/{repo_name}")
   
   #getting a list of all the repo collaborators and then formatting by adding `@` before each name
   #to simulate mentions. This will ensure each member gets notified via email
    members = repo.get_collaborators()
    for c in members:
        collaborators.append(c)

    collaborators = add_prefix(remove_prefix(collaborators))
     

    # get repo dependencies
    sbom_request = requests.get(f'https://api.github.com/repos/{owner}/{repo_name}/dependency-graph/sbom',
                                headers={'Authorization':f'Bearer {github_auth}','X-GitHub-Api-Version': '2022-11-28'})
    
    if sbom_request.status_code != 200:
        return "ok"

    sbom = sbom_request.json()
    packages = sbom.get('sbom').get('packages', [])
    package_license_ids = set()

    for p in packages:
        p_license = p.get('licenseConcluded', None)
        if p_license is None:
            continue
        # separate combined licenses
        for l in re.sub(r'\([^()]*\)', '', p_license).split(" "):
            if l not in ["AND", "OR"]:
                package_license_ids.add(l)

    # Empty set guard clause
    if len(package_license_ids) == 0:
        return "ok"
    # Get spdx license data
    spdx_request = requests.get("https://spdx.org/licenses/licenses.json")
    if spdx_request.status_code != 200:
        return "ok"

    licenses = spdx_request.json().get('licenses')
    #use the compatibility library
    legalzard_api = doWellOpensourceLicenseCompatibility(api_key= os.getenv('API_KEY'))
    repo_license = legalzard_api.search(repo_license_id['key']).get("data")[0]
    repo_license_event_id = repo_license.get("eventId")

    #initialize issues
    incompatible_licenses = "" #[]
    truth = False
    #run comparison with package licenses
    for l_id in package_license_ids:
        try:
            # get license
            l_name = next(lnc for lnc in licenses if lnc["licenseId"] == l_id)["name"]
            # prpepare comparison data
            _pkg_license = legalzard_api.search(l_name).get("data")[0]
            _pkg_license_event_id = _pkg_license.get("eventId")
            compatibility = legalzard_api.check_compatibility({
                "license_event_id_one": repo_license_event_id,
                "license_event_id_two": _pkg_license_event_id,
            })["is_compatible"]
            # skip compatible licenses
            if compatibility:
                continue
            # log incompatible licenses
            incompatible_licenses += f"{l_name}\n" #.append(l_name) #

        except Exception as e:
            pass
    
    #check if any incompatible licenses were found
    if len(incompatible_licenses) > 0:
         #format the table
        table_rows = [f"<tr><td>Licence Detail</td><td>{i}</td></tr>" for i in incompatible_licenses]
        table_html = "<table>" + "".join(table_rows) + "</table>"
        truth = True
    
    # prepare and write issue


    #
    
    issue= f"{collaborators} Legalzard found licenses in your dependencies that are incompatible with your repository license\n\n {incompatible_licenses}" if truth == True else f"{collaborators} Legalzard found no license compatibility issues in your dependencies"
    repo.create_issue(title="Incompatible Licenses", body=issue)
    html_p = f"<p>Legalzard found no licence in your repo</p>"

    #set email payload
    subject = "Incompatible Licenses - Legalzard Bot"
    body = table_html if truth == True else html_p
    sender = "marvin.wekesa@gmail.com"
    password = os.getenv('GOOGLE_APP_PASSWORD')

    #some of the emails are not shared, in this case the repo owner will 
    # have to explicitly enable email notifications on all their repos
    if owner_email == None:
        pass
    send_email(subject, body, sender, owner_email, password)
      

    return "ok"

def send_email(subject, body, sender, owner_email, password):
    try:
        msg = MIMEMultipart()
        msg['From'] = sender
        msg['To'] = owner_email
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'html'))

        # Configure the SMTP server settings
        smtp_server = 'smtp.gmail.com'
        smtp_port = 465  # For SSL connection
        server = smtplib.SMTP_SSL(smtp_server, smtp_port)
        server.login(sender, password)
        server.sendmail(sender, owner_email, msg.as_string())
        server.quit()

        return True  # Return True when the email is sent successfully
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def sanitizeEmail(string):
        return string.replace(',','').replace('"','')


def remove_prefix(users):
    cleaned_users = []
    for user in users:
        login = user.login.replace('NamedUser(login="', '').replace('"', '')
        cleaned_users.append(login)
    return cleaned_users

def add_prefix(names):
    prefixed_names = []
    for name in names:
        prefixed_names.append('@' + name)
    return ' '.join(prefixed_names)

if __name__ == '__main__': 
    # run server
    app.run(debug=True, port=os.getenv('PORT'))