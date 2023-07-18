from legalzard import Legalzard


license = Legalzard()

# list_of_licenses = license.get_all()
# x = list_of_licenses['data']

# for p in x:
#     print(p)
    
    
    
# single = license.search('We recommend you not to use')
# print(single)
comparison_data = {"license_event_id_one": "FB1010000000168941164557459078",
 "license_event_id_two": "FB1010000000168855905157422614",
 "user_id": 609,
 "organization_id": "63cf89a0dcc2a171957b290b"}
retrive_single_license = license.check_compatibility(comparison_data)
print(retrive_single_license)
    
# comparisonData = {
#     "license_event_id_one": "FB1010000000167238702450728865",
#     "license_event_id_two": "FB1010000000167247184554419413",
#     "user_id": 609,
#     "organization_id": "63cf89a0dcc2a171957b290b"
# }
# compactibility = license.check_compatibility(comparisonData)
# print(compactibility)


# Creating a license

# licenceDetails = {
#             "license_name": "Test & Sample",
#             "license_tags": ['#muril'],
#             "version": "No Version",
#             "type_of_license": "PERMISSIVE",
#             "short_description": "You can copy,modify and distribute this license as long as you fulfill license requirements.",
#             "description": "The SFL (Standard Function Library) from iMatix is a portable function library for C/C++ programs.The SFL is written in ANSI C and has been ported to MS-DOS, Windows, OS/2, Linux and other UNIX systems and Digital OpenVMS. It comes with complete sources and documentation in HTML. The SFL is free software that you may use and distribute for private or commercial purposes according to license agreement.",
#             "disclaimer": "Copyright © 1991-2000 iMatix Corporation.",
#             "risk_for_choosing_license": "This license places a lot of conditions on use and distribution of it.",
#             "limitation_of_liability": "In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.",
#             "license_url": "https://spdx.org/licenses/iMatix.html",
#             "logo_detail": {
#                 "filename": "img_02c8ccb5-3ffb-4737-83db-effb3da529ed.png",
#                 "actual_filename": "Logo.png",
#                 "file_extension": "png",
#                 "url": "https://100080.pythonanywhere.com/media/img/img_02c8ccb5-3ffb-4737-83db-effb3da529ed.png"
#             },
#             "recommendation": "lknk knkn",
#             "is_active": False,
#             "permissions": [
#                 {
#                     "action": "Patent Use",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Patent Grant",
#                     "permission": "No",
#                     "has_other_condition": False
#                 }
#             ],
#             "conditions": [
#                 {
#                     "action": "Disclose Source Code",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Network Use is for Distribution",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Release Under Same License",
#                     "permission": "Yes",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "State Changes",
#                     "permission": "Yes",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Code can be used in closed source project",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Copied",
#                     "permission": "Yes",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Distributed",
#                     "permission": "Yes",
#                     "has_other_condition": True
#                 },
#                 {
#                     "action": "Reproduced",
#                     "permission": "Yes",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Modified",
#                     "permission": "Yes",
#                     "has_other_condition": True
#                 },
#                 {
#                     "action": "Commercial Used",
#                     "permission": "Yes",
#                     "has_other_condition": False
#                 }
#             ],
#             "limitations": [
#                 {
#                     "action": "Liability",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Warranty",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Trademark use",
#                     "permission": "No",
#                     "has_other_condition": False
#                 },
#                 {
#                     "action": "Redistribution",
#                     "permission": "Yes",
#                     "has_other_condition": True
#                 }
#             ],
#             "references": ["kkkk"],
#             "laws": "Not Fixed",
#             "sources": [
#                 {
#                     "action": "FSF Approved",
#                     "permission": "Yes"
#                 },
#                 {
#                     "action": "OSI Approved",
#                     "permission": "No"
#                 }
#             ],
#             "must_includes": [
#                 {
#                     "action": "License",
#                     "permission": "Yes"
#                 },
#                 {
#                     "action": "Copyright Notice",
#                     "permission": "Yes"
#                 }
#             ]
#         }

# # creatingLicense = license.create(licenceDetails)
# # print(f"License creating returns {creatingLicense}")



# # checking the compactibility
# comparison_data = {
#     "license_event_id_one": "FB1010000000168941168451423905",
#     "license_event_id_two": "FB1010000000167247184554419413",
#     "user_id": '64b26069fefb9b68aef9da7e',
#     "organization_id": "63cf89a0dcc2a171957b290b"
#  }


# compactibility_status = license.check_compatibility(comparison_data)
# print(f"This is the compactibility status {compactibility_status}")


# # checking the comparison history


# # checking_comparison_history = license.get_compatibility_history()




