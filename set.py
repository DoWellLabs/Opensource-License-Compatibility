from legalzard import Legalzard


license = Legalzard()

list_of_licenses = license.get_all()
print(list_of_licenses)
