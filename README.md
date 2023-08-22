# Legalzard Bot

This is a Python Flask application that acts as a bot to check for incompatible licenses in a GitHub repository's dependencies and create an issue if any are found. The bot uses the `Github` and `requests` libraries to access the repository and its dependencies. It also uses the `doWellOpensourceLicenseCompatibility` library to check for license compatibility.

## Installation

1. Clone the repository to your local machine
2. Install the required libraries using `pip install -r requirements.txt`
3. Replace `<github-app-id>` with your GitHub App ID and `<local-githug-privatekey>` with the path to your GitHub App private key file.
4. Replace `<api-key>` with your doWell API key.
5. Deploy the application to a server or cloud platform (eg. Ngrok or render.com).


## Usage

1. Install the GitHub App on the repositories you want to monitor.
2. Whenever a new pull request is created, the bot checks for incompatible licenses in the repository's dependencies.
This is done with the following steps:
- Gets the licence ID from the REPO
- Runs the github authorization
- Gets the repo's dependencies
- Separates each license and adds them to a set
- Gets all the available licenses from spdx.org as a json file
- Using the `doWellOpensourceLicenseCompatibility`'s search function, gets the first icence in the list
- Runs the `doWellOpensourceLicenseCompatibility`'s `check_compatibility` function against each successive licence (if the first occurance is not compatible), but using the eventID obtained after using the licence name from the search function.

3. If any incompatible licenses are found, the bot creates an issue titled "Incompatible Licenses" and lists all incompatible licenses in the issue body.

## Limitations

This application only checks for incompatible licenses in the repository's direct dependencies and does not check for transitive dependencies. It also requires a valid Dowell API key to function properly.