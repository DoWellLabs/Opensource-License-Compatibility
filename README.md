# Dowell Opensource License Compatibility Library

Powered by [Legalzard API](https://documenter.getpostman.com/view/22392526/2s93mBvyQx)

The Legalzard API provides access to a wide range of legal information and resources. It allows developers to retrieve
information about software licenses, legal documents, legal entities, check license compatibility, and more. The API
aims to facilitate the integration of legal information into applications, websites, or other software systems.

## Installation and Usage

Import the package

```python
from legalzard import Legalzard
```

Create an instance of the API. You use this instance to access all the package-API methods

```python
license = Legalzard()
```

## Features

This library offers all the features through the Legalzard API

1. Creating Licenses
   Use the method ```get_all```
   Get all licenses submitted.
   The method returns a response body with two parameters, ```isSucsess```, a boolean showing retrieval status
   and ```data```, a list of licenses.

2. Retrieving all licenses
   Create a license by adding all the fields required by using the ```create``` method which accepts one argument in the
   form of a dictionary. This argument contains all the license information to be created.
   An example
    ```json
    {
                "license_name": "Test & Sample",
                "license_tags": [],
                "version": "No Version",
                "type_of_license": "PERMISSIVE",
                "short_description": "You can copy,modify and distribute this license as long as you fulfill license requirements.",
                "description": "The SFL (Standard Function Library) from iMatix is a portable function library for C/C++ programs.The SFL is written in ANSI C and has been ported to MS-DOS, Windows, OS/2, Linux and other UNIX systems and Digital OpenVMS. It comes with complete sources and documentation in HTML. The SFL is free software that you may use and distribute for private or commercial purposes according to license agreement.",
                "disclaimer": "Copyright © 1991-2000 iMatix Corporation.",
                "risk_for_choosing_license": "This license places a lot of conditions on use and distribution of it.",
                "limitation_of_liability": "In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.",
                "license_url": "https://spdx.org/licenses/iMatix.html",
                "logo_detail": {
                    "filename": "img_02c8ccb5-3ffb-4737-83db-effb3da529ed.png",
                    "actual_filename": "Logo.png",
                    "file_extension": "png",
                    "url": "https://100080.pythonanywhere.com/media/img/img_02c8ccb5-3ffb-4737-83db-effb3da529ed.png"
                },
                "recommendation": "",
                "is_active": false,
                "permissions": [
                    {
                        "action": "Patent Use",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Patent Grant",
                        "permission": "No",
                        "has_other_condition": false
                    }
                ],
                "conditions": [
                    {
                        "action": "Disclose Source Code",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Network Use is for Distribution",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Release Under Same License",
                        "permission": "Yes",
                        "has_other_condition": false
                    },
                    {
                        "action": "State Changes",
                        "permission": "Yes",
                        "has_other_condition": false
                    },
                    {
                        "action": "Code can be used in closed source project",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Copied",
                        "permission": "Yes",
                        "has_other_condition": false
                    },
                    {
                        "action": "Distributed",
                        "permission": "Yes",
                        "has_other_condition": true
                    },
                    {
                        "action": "Reproduced",
                        "permission": "Yes",
                        "has_other_condition": false
                    },
                    {
                        "action": "Modified",
                        "permission": "Yes",
                        "has_other_condition": true
                    },
                    {
                        "action": "Commercial Used",
                        "permission": "Yes",
                        "has_other_condition": false
                    }
                ],
                "limitations": [
                    {
                        "action": "Liability",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Warranty",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Trademark use",
                        "permission": "No",
                        "has_other_condition": false
                    },
                    {
                        "action": "Redistribution",
                        "permission": "Yes",
                        "has_other_condition": true
                    }
                ],
                "references": [],
                "laws": "Not Fixed",
                "sources": [
                    {
                        "action": "FSF Approved",
                        "permission": "Yes"
                    },
                    {
                        "action": "OSI Approved",
                        "permission": "No"
                    }
                ],
                "must_includes": [
                    {
                        "action": "License",
                        "permission": "Yes"
                    },
                    {
                        "action": "Copyright Notice",
                        "permission": "Yes"
                    }
                ]
            }

    ```
3. Retrieving a single license
   Retrieve license information using an ID by using the method ```retrieve``` and passing an Id. The response is
   similar to the ```get_all``` method but the list of of licenses only contains a single license.
4. Updating a license
   Use the ```update``` method. This method updates the license information stored on the database. It accepts two
   arguments, ```id``` and ```license``` object as a dictionary similar to what the ```create``` method accepts.
5. Deleting a license
   Using the ```delete``` method pass an ```id``` and to remove license.
6. Searching for a license
   The API the feature of search for licenses containing a specific phrase. The method accepts a ```search_term```
   argument and returns a response object similar to the ```get_all``` method with list of matching licenses.
7. Retrieving license compatibility.
   Use the ```check_compatibility``` method to check the level of compatibility of two licenses.
   The method accepts a ```comparison_data``` dictionary as
   ```json
    {
    "license_event_id_one": "FB1010000000167238702450728865",
    "license_event_id_two": "FB1010000000167247184554419413",
    "user_id": 609,
    "organization_id": "63cf89a0dcc2a171957b290b"
    }
    ```

8. Check Comparison History
   Get the comparison history by user using the ```get_compatibility_history``` method that accepts two
   arguments, ```organization_id``` and ```user_id```. The response object contains a list of comparison history
   objects.

   ```json
   {
     "isSuccess": true,
     "data": [
       {
         "_id": "645370f22dfb6007eb36da3b",
         "eventId": "FB1010000000168318999751857498",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": false,
             "percentage_of_compatibility": 0,
             "license_1_event_id": "FB1010000000167758621053642664",
             "license_2_event_id": "FB1010000000167975095050858889",
             "identifier": "FB1010000000167758621053642664-FB1010000000167975095050858889",
             "license_1": {
               "license_name": "Creative Commons Attribution Share Alike 3.0 Austria (v 3.0 Austria)",
               "license_tags": [],
               "version": "3.0 Austria",
               "type_of_license": "COPYLEFT",
               "short_description": "you can others work but you have to give due credit to the original creator, also provide a link to the license, and indicate if changes were made and If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original. A new version of the license is available and we recommend you to use the latest version because this version is designed specifically for use in Austria and includes specific legal references to Austrian law. But the latest version is designed to be used worldwide and is more flexible in terms of language and legal requirements.",
               "description": "This license lets others remix, adapt, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.\nIn 3.0, the international (unported) license suite does not mention sui generis rights. However, ported 3.0 licenses for jurisdictions where those rights exist address them according to CC's 3.0 database rights policy. Under this policy, version 3.0 EU jurisdiction ports must license sui generis rights subject to the terms and conditions of the license just like copyright and neighboring rights, but also must waive license restrictions and conditions (attribution, ShareAlike, etc) for uses triggering database rights—so that if the use of a database published under a CC license implicated only database rights but not copyright, the CC license requirements and prohibitions would not apply to that use. The license conditions and restrictions, however, continue to apply to all uses triggering copyright. Other ports and the 3.0 international license are silent on sui generis database rights: databases and data are licensed (i.e., subject to restrictions detailed in the license) to the extent copyrightable, and if data in the database or the database itself are not copyrightable the license restrictions do not apply to those parts (though they still apply to the remainder). Thus, regardless of the CC 3.0 license at play (unported, an EU port, another port), uses that implicate only database rights will not trigger the license conditions, while uses that implicate copyright will.\nIn the 1.0, 2.0, 2.5, and 3.0 licenses, attribution may be reasonable to the medium or means, and applied to all elements other than certain notices where the requirement is firm.In the 1.0 and 2.0 licenses, CC licenses contemplated crediting the author only.\nIn 2.0, 2.5, and 3.0, credit must be removed from adaptations and collections, to the extent practicable, at the creator’s request.\nThis license is based on Austrian law.",
               "disclaimer": "You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.\nNo warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.",
               "risk_for_choosing_license": "You cannot use someone else's work without giving credit to the original creator. You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. This version is based on Austrian law.",
               "limitation_of_liability": "EXCEPT FOR THE WARRANTY SET FORTH IN SECTION 5, LICENSOR SHALL BE LIABLE TO YOU FOR ANY DAMAGES OF ANY KIND RESULTING FROM GROSS NEGLIGENCE OR WILLFUL INTENT, AND WILL HAVE NO OTHER VOLUNTARY LIABILITY FOR CONSEQUENTIAL OR OTHER DAMAGES, EVEN IF NOTIFIED OF THE POSSIBILITY OF THEY OCCUR.",
               "license_url": "https://spdx.org/licenses/CC-BY-SA-3.0-AT.html",
               "logo_detail": {
                 "filename": "img_9aedeed1-c646-4cfd-bbc1-b0adc3814dd0.png",
                 "actual_filename": "CC.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_9aedeed1-c646-4cfd-bbc1-b0adc3814dd0.png"
               },
               "recommendation": "",
               "is_active": true,
               "license_attributes": {
                 "heading": "Definitions, Restrictions on Exploitation Rights, Licensing, Conditions, Warranty, Limitation of Liability, Expiration, Miscellaneous Provisions",
                 "attributes": [
                   "Definitions",
                   "Limitation of Liability ",
                   "Warranty"
                 ]
               },
               "license_compatible_with_lookup": [
                 "None"
               ],
               "license_not_compatible_with_lookup": [
                 "None"
               ]
             },
             "license_2": {
               "license_name": "Open Data Commons Public Domain Dedication & License v1.0 (v1.0)",
               "license_tags": [],
               "version": "v1.0",
               "type_of_license": "PUBLIC DOMAIN",
               "short_description": "The ODC Public Domain Dedication and Licence is a document intended to allow you to freely share, modify, and use this work for any purpose and without any restrictions. This licence is intended for use on databases or their contents (“data”), either together or individually. The goal is to eliminate restrictions held by the original creator of the data and database on the use of it by others. Rightsholders will not be able to “dual license” their work by releasing the same work under different licences. This is because they have allowed anyone to use the work in whatever way they choose. Rightsholders therefore can’t re-license it under copyright or database rights on different terms because they have nothing left to license. The Open Data Commons (ODC) Public Domain Dedication and Licence (PDDL) is a big serving of legalese which is used to put datasets into the public domain. It is not a software license, and cannot be used for the purpose of putting software into the public domain. It is Free.",
               "description": "The Open Data Commons - Public Domain Dedication & Licence is a document intended to allow you to freely share, modify, and use this work for any purpose and without any restrictions. This licence is intended for use on databases or their contents (data), either together or individually.\nMany databases are covered by copyright. Some jurisdictions, mainly in Europe, have specific special rights that cover databases called the sui generis database right. Both of these sets of rights, as well as other legal rights used to protect databases and data, can create uncertainty or practical difficulty for those wishing to share databases and their underlying data but retain a limited amount of rights under a some rights reserved approach to licensing as outlined in the Science Commons Protocol for Implementing Open Access Data. As a result, this waiver and licence tries to the fullest extent possible to eliminate or fully license any rights that cover this database and data. Any Community Norms or similar statements of use of the database or data do not form a part of this document, and do not act as a contract for access or other terms of use for the database or data.",
               "disclaimer": "Copyright © [year] [copyright owner name]. All rights reserved.",
               "risk_for_choosing_license": "The Open Data Commons (ODC) Public Domain Dedication and Licence (PDDL) is a big serving of legalese which is used to put datasets into the public domain.It is not a software license, and cannot be used for the purpose of putting software into the public domain. It is Free.",
               "limitation_of_liability": "Subject to any liability that may not be excluded or limited by law, the Rightsholder is not liable for, and expressly excludes, all liability for loss or damage however and whenever caused to anyone by any use under this Document, whether by You or by anyone else, and whether caused by any fault on the part of the Rightsholder or not. This exclusion of liability includes, but is not limited to, any special, incidental, consequential, punitive, or exemplary damages. This exclusion applies even if the Rightsholder has been advised of the possibility of such damages.\nIf liability may not be excluded by law, it is limited to actual and direct financial loss to the extent it is caused by proved negligence on the part of the Rightsholder.",
               "license_url": "https://spdx.org/licenses/PDDL-1.0.html",
               "logo_detail": {
                 "filename": "img_80c9607c-180f-4100-a87b-a73085c47cdc.png",
                 "actual_filename": "download.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_80c9607c-180f-4100-a87b-a73085c47cdc.png"
               },
               "recommendation": "",
               "is_active": true,
               "license_attributes": {
                 "heading": "Definitions of Capitalised Words. What this document covers. Dedication, waiver, and licence of Copyright and Database Rights. Relationship to other rights. Warranties, disclaimer, and limitation of liability. General.",
                 "attributes": [
                   "Definition",
                   "Disclaimer",
                   "Limitation of Liability",
                   "Warranty"
                 ]
               },
               "license_compatible_with_lookup": [
                 "GNU Lesser General Public License v2.1 only",
                 "Apache License v2.0",
                 "GNU General Public License v3.0 only",
                 "MIT License (No version)",
                 "Mozilla Public License v1.1",
                 "X11 License (No Version)",
                 "GNU  General Public License v2.0 only",
                 "BSD 3-Clause Clear License (v3-Clause Clear License)",
                 "Affero General Public License v3.0-or-later",
                 "GNU Affero General Public License v3.0 only",
                 "GNU General Public License v2.0 or later",
                 "GNU General Public License v3.0 or later"
               ],
               "license_not_compatible_with_lookup": [
                 "None"
               ],
               "permissions": [
                 "0",
                 "Distribution",
                 "Modification"
               ],
               "conditions": [
                 "0",
                 "License and Copyright notice",
                 "Include Copyright"
               ],
               "limitations": [
                 "Liability",
                 "Warranty"
               ],
               "references": []
             }
           }
         }
       },
       {
         "_id": "645371b02dfb6007eb36da5c",
         "eventId": "FB1010000000168319018658772674",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": false,
             "percentage_of_compatibility": 0,
             "license_1_event_id": "FB1010000000167523818050800166",
             "license_2_event_id": "FB1010000000167975095050858889",
             "identifier": "FB1010000000167523818050800166-FB1010000000167975095050858889",
             "license_1": {
               "license_name": "Affero General Public License v3.0-or-later",
               "license_tags": [],
               "version": "3.0 or later",
               "type_of_license": "STRONG COPYLEFT",
               "short_description": "network protective: external use of modified(!) code requires its availability – network use is a distribution of the software, modified source code must be available. AGPL due to its radical open source licensing is currently only used in less than 1% of open source projects.\nProprietary – typically restrict user rights and protect commercial interests of copyright owners'. Removes the choice for teams to make software proprietary in the future. AGPLv3 includes clauses that together achieve a form of mutual compatibility for the two licenses. AGPL is excessive as any module in any dependent package that uses AGPL makes all other software subject to similar restrictions. It forces other code to become GPLed software. In case of commercial usage it makes it difficult to use as it has lots of restrictions.",
               "description": "Data",
               "disclaimer": "Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\n\nEveryone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.",
               "risk_for_choosing_license": "Currently, less than 1% of all open source projects use it. It is not a popular open source software license. The other GNU license remains the key part of the open source software ecosystem, making AGPL disappear anytime soon.",
               "limitation_of_liability": "IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://www.gnu.org/licenses/agpl.txt",
               "logo_detail": {
                 "filename": "img_c6160639-aba8-49bc-a656-0ffa00b43c25.png",
                 "actual_filename": "AGPL.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_c6160639-aba8-49bc-a656-0ffa00b43c25.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             },
             "license_2": {
               "license_name": "Open Data Commons Public Domain Dedication & License v1.0 (v1.0)",
               "license_tags": [],
               "version": "v1.0",
               "type_of_license": "PUBLIC DOMAIN",
               "short_description": "The ODC Public Domain Dedication and Licence is a document intended to allow you to freely share, modify, and use this work for any purpose and without any restrictions. This licence is intended for use on databases or their contents (“data”), either together or individually. The goal is to eliminate restrictions held by the original creator of the data and database on the use of it by others. Rightsholders will not be able to “dual license” their work by releasing the same work under different licences. This is because they have allowed anyone to use the work in whatever way they choose. Rightsholders therefore can’t re-license it under copyright or database rights on different terms because they have nothing left to license. The Open Data Commons (ODC) Public Domain Dedication and Licence (PDDL) is a big serving of legalese which is used to put datasets into the public domain. It is not a software license, and cannot be used for the purpose of putting software into the public domain. It is Free.",
               "description": "The Open Data Commons - Public Domain Dedication & Licence is a document intended to allow you to freely share, modify, and use this work for any purpose and without any restrictions. This licence is intended for use on databases or their contents (data), either together or individually.\nMany databases are covered by copyright. Some jurisdictions, mainly in Europe, have specific special rights that cover databases called the sui generis database right. Both of these sets of rights, as well as other legal rights used to protect databases and data, can create uncertainty or practical difficulty for those wishing to share databases and their underlying data but retain a limited amount of rights under a some rights reserved approach to licensing as outlined in the Science Commons Protocol for Implementing Open Access Data. As a result, this waiver and licence tries to the fullest extent possible to eliminate or fully license any rights that cover this database and data. Any Community Norms or similar statements of use of the database or data do not form a part of this document, and do not act as a contract for access or other terms of use for the database or data.",
               "disclaimer": "Copyright © [year] [copyright owner name]. All rights reserved.",
               "risk_for_choosing_license": "The Open Data Commons (ODC) Public Domain Dedication and Licence (PDDL) is a big serving of legalese which is used to put datasets into the public domain.It is not a software license, and cannot be used for the purpose of putting software into the public domain. It is Free.",
               "limitation_of_liability": "Subject to any liability that may not be excluded or limited by law, the Rightsholder is not liable for, and expressly excludes, all liability for loss or damage however and whenever caused to anyone by any use under this Document, whether by You or by anyone else, and whether caused by any fault on the part of the Rightsholder or not. This exclusion of liability includes, but is not limited to, any special, incidental, consequential, punitive, or exemplary damages. This exclusion applies even if the Rightsholder has been advised of the possibility of such damages.\nIf liability may not be excluded by law, it is limited to actual and direct financial loss to the extent it is caused by proved negligence on the part of the Rightsholder.",
               "license_url": "https://spdx.org/licenses/PDDL-1.0.html",
               "logo_detail": {
                 "filename": "img_80c9607c-180f-4100-a87b-a73085c47cdc.png",
                 "actual_filename": "download.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_80c9607c-180f-4100-a87b-a73085c47cdc.png"
               },
               "recommendation": "",
               "is_active": true,
               "license_attributes": {
                 "heading": "Definitions of Capitalised Words. What this document covers. Dedication, waiver, and licence of Copyright and Database Rights. Relationship to other rights. Warranties, disclaimer, and limitation of liability. General.",
                 "attributes": [
                   "Definition",
                   "Disclaimer",
                   "Limitation of Liability",
                   "Warranty"
                 ]
               },
               "license_compatible_with_lookup": [
                 "GNU Lesser General Public License v2.1 only",
                 "Apache License v2.0",
                 "GNU General Public License v3.0 only",
                 "MIT License (No version)",
                 "Mozilla Public License v1.1",
                 "X11 License (No Version)",
                 "GNU  General Public License v2.0 only",
                 "BSD 3-Clause Clear License (v3-Clause Clear License)",
                 "Affero General Public License v3.0-or-later",
                 "GNU Affero General Public License v3.0 only",
                 "GNU General Public License v2.0 or later",
                 "GNU General Public License v3.0 or later"
               ],
               "license_not_compatible_with_lookup": [
                 "None"
               ],
               "permissions": [
                 "0",
                 "Distribution",
                 "Modification"
               ],
               "conditions": [
                 "0",
                 "License and Copyright notice",
                 "Include Copyright"
               ],
               "limitations": [
                 "Liability",
                 "Warranty"
               ],
               "references": []
             }
           }
         }
       },
       {
         "_id": "645372232dfb6007eb36da86",
         "eventId": "FB1010000000016831903015542753",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": false,
             "percentage_of_compatibility": 0,
             "license_1_event_id": "FB1010000000167523818050800166",
             "license_2_event_id": "FB1010000000167516838953252225",
             "identifier": "FB1010000000167523818050800166-FB1010000000167516838953252225",
             "license_1": {
               "license_name": "Affero General Public License v3.0-or-later",
               "license_tags": [],
               "version": "3.0 or later",
               "type_of_license": "STRONG COPYLEFT",
               "short_description": "network protective: external use of modified(!) code requires its availability – network use is a distribution of the software, modified source code must be available. AGPL due to its radical open source licensing is currently only used in less than 1% of open source projects.\nProprietary – typically restrict user rights and protect commercial interests of copyright owners'. Removes the choice for teams to make software proprietary in the future. AGPLv3 includes clauses that together achieve a form of mutual compatibility for the two licenses. AGPL is excessive as any module in any dependent package that uses AGPL makes all other software subject to similar restrictions. It forces other code to become GPLed software. In case of commercial usage it makes it difficult to use as it has lots of restrictions.",
               "description": "Data",
               "disclaimer": "Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\n\nEveryone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.",
               "risk_for_choosing_license": "Currently, less than 1% of all open source projects use it. It is not a popular open source software license. The other GNU license remains the key part of the open source software ecosystem, making AGPL disappear anytime soon.",
               "limitation_of_liability": "IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://www.gnu.org/licenses/agpl.txt",
               "logo_detail": {
                 "filename": "img_c6160639-aba8-49bc-a656-0ffa00b43c25.png",
                 "actual_filename": "AGPL.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_c6160639-aba8-49bc-a656-0ffa00b43c25.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             },
             "license_2": {
               "license_name": "Libpng License (No Version)",
               "license_tags": [],
               "version": "No Version",
               "type_of_license": "PERMISSIVE",
               "short_description": "We recommend using this license as it is frequently used in both free and proprietary software.",
               "description": "The libpng library is released under the libpng license, which is a free, open-source license that allows for the use of the library in both open-source and commercial projects. The license requires that the copyright notice and disclaimer be included with any distribution of the library, and that any modifications to the library be clearly marked.\nThe libpng license is permissive, meaning that it allows derivative works to be created and distributed under any license, even proprietary ones.",
               "disclaimer": "Copyright (c) 1995-2022 The PNG Reference Library Authors.\nCopyright (c) 2018-2022 Cosmin Truta.\nCopyright (c) 2000-2002, 2004, 2006-2018 Glenn Randers-Pehrson.\nCopyright (c) 1996-1997 Andreas Dilger.\nCopyright (c) 1995-1996 Guy Eric Schalnat, Group 42, Inc",
               "risk_for_choosing_license": "There is no risk as such in using this license but you have to make sure that the Copyright notice may not be removed or altered from any source or altered source distribution.",
               "limitation_of_liability": "In no event shall the Copyright owners, or anyone distributing the software, be liable for any damages or other liability, whether in contract, tort or otherwise, arising from, out of, or in connection with the software, or the use or other dealings in the software, even if advised of the possibility of such damage.",
               "license_url": "http://www.libpng.org/pub/png/src/libpng-LICENSE.txt",
               "logo_detail": {
                 "filename": "img_5cc44889-83f2-49e8-b033-54926c8fe0a4.png",
                 "actual_filename": "logo.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_5cc44889-83f2-49e8-b033-54926c8fe0a4.png"
               },
               "recommendation": "",
               "is_active": true,
               "license_attributes": {
                 "heading": "TERMS AND CONDITIONS",
                 "attributes": [
                   "None",
                   "Disclaimer of Warranty ",
                   "Limitation of Liability ",
                   "Right to Use, copy, distribute",
                   "Right to modify"
                 ]
               },
               "license_compatible_with_lookup": [],
               "license_not_compatible_with_lookup": [
                 "None",
                 "GNU Lesser General Public License v3.0 only"
               ]
             }
           }
         }
       },
       {
         "_id": "6458b5f7872f46db5b4e08d7",
         "eventId": "FB1010000000016835353455916063",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": true,
             "percentage_of_compatibility": 84,
             "license_1_event_id": "FB1010000000166184145150015366",
             "license_2_event_id": "FB1010000000016618418385506453",
             "identifier": "FB1010000000166184145150015366-FB1010000000016618418385506453",
             "license_1": {
               "license_name": "GNU General Public License v1.0 only",
               "license_tags": [],
               "version": "v1.0 only",
               "type_of_license": "COPYLEFT",
               "short_description": "We recommend you to use this as the initial GPL was based on a combination of similar free software licenses used by early versions of GNU Emacs, the GNU Debugger and the GNU C Compiler. When these licenses were first published, they were similar to existing GPL licenses, but they were tailored to each program, rendering them noncompliant. The goal of the GNU GPL was to develop one license that could be used for any project, allowing numerous projects to contribute code.",
               "description": "The GNU General Public License is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software. The license was the first copyleft for general use and was originally written by the founder of the Free Software Foundation (FSF), Richard Stallman, for the GNU Project. The license grants the recipients of a computer program the rights of the Free Software Definition.These GPL series are all copyleft licenses, which means that any derivative work must be distributed under the same or equivalent license terms. It is more restrictive than the Lesser General Public License and even further distinct from the more widely used permissive software licenses BSD, MIT, and Apache.\n\nThe GPL license family has been one of the most popular software licenses in the free and open-source software domain. Prominent free software programs licensed under the GPL include the Linux kernel and the GNU Compiler Collection (GCC). David A. Wheeler argues that the copyleft provided by the GPL was crucial to the success of Linux-based systems, giving the programmers who contributed to the kernel the assurance that their work would benefit the whole world and remain free, rather than being exploited by software companies that would not have to give anything back to the community",
               "disclaimer": "Copyright (C) 1989 Free Software Foundation, Inc. 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.\n\n Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.",
               "risk_for_choosing_license": "Under GNU GPL any code which is built upon it also has to be released under one of the GPL licenses. The company building their source on top of it, if they want to release software themselves, must do so using a GPL compatible license. Since it’s mandatory to use the exact copy of the license for the former and the latter codes, you can’t mix your proprietary software and GPL-licensed software.",
               "limitation_of_liability": "THE PROGRAM IS LICENSED FREE OF CHARGE SO, THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.",
               "license_url": "https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html",
               "logo_detail": {
                 "filename": "img_615c5d6e-769d-4ab0-aaa6-a8a5af7cba4b.png",
                 "actual_filename": "images (1).png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_615c5d6e-769d-4ab0-aaa6-a8a5af7cba4b.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "No"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "No"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             },
             "license_2": {
               "license_name": "Mozilla Public License v2.0",
               "license_tags": [],
               "version": "v2.0",
               "type_of_license": "COPYLEFT",
               "short_description": "The Mozilla Public License 2.0 provides a number of benefits for users of the licensed code. Like, the express grant of patent rights protects users against certain patent lawsuits from contributors. An additional benefit is the ability to combine MPL’d code with proprietary works. The license encourages companies to be part of and give back to the OSS community without completely sacrificing the competitive advantages that come with closed-source software.",
               "description": "The Mozilla Public License 2.0 allows OSS authors to both protect their contributions to a piece of OSS and have the opportunity for their work to be incorporated into well-known and successful pieces of proprietary software. \n\nUsers of MPL 2.0-licensed code may: \n\n-Use the code in commercial applications-  MPL’d code can be included in software that’s sold commercially. \n\n-Change the code - Authors can alter or modify the licensed code.\n\n- Distribute the code - An individual or company can make their reworked version(s) of the code available to others.\n \n-Use patent claims - Contributors to the licensed code provide an explicit grant of patent rights to users. \n\n-Place warranty -  The license terms permit users of the open source code to place a warranty on the licensed software.\n\n- Sublicense binaries -  A developer may place binaries under a different license in the context of an aggregate work.",
               "disclaimer": "This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/. If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice. You may add additional accurate notices of copyright ownership.",
               "risk_for_choosing_license": "This license does not provide a warranty nor allow contributors to be held liable for any legal issues that may arise from software incorporating the code.",
               "limitation_of_liability": "Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.",
               "license_url": "https://www.mozilla.org/en-US/MPL/2.0/",
               "logo_detail": {
                 "filename": "img_503d90b2-86e9-4f4d-aa82-2c09606ac1ca.wine",
                 "actual_filename": "Mozilla_Public_License-Logo.wine.png",
                 "file_extension": "wine",
                 "url": "https://100080.pythonanywhere.com/media/img/img_503d90b2-86e9-4f4d-aa82-2c09606ac1ca.wine"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": true
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             }
           }
         }
       },
       {
         "_id": "6458b776872f46db5b4e0944",
         "eventId": "FB1010000000016835357285519304",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": true,
             "percentage_of_compatibility": 94,
             "license_1_event_id": "FB1010000000167238702450728865",
             "license_2_event_id": "FB1010000000167247184554419413",
             "identifier": "FB1010000000167238702450728865-FB1010000000167247184554419413",
             "license_1": {
               "license_name": "Eclipse Public License v2.0",
               "license_tags": [],
               "version": "2.0",
               "type_of_license": "WEAKLY COPYLEFT",
               "short_description": "gnu.org recommends that if an initial contributor releases a specific piece of code and designates GNU GPL version 2 or later as a secondary license, that provides explicit compatibility with those GPL versions for that code. (Doing so is roughly equivalent, for users, to releasing that piece of code under a dual license, EPL | GPL.) However, the EPL2 without this designation remains incompatible with the GPL.",
               "description": "The Eclipse Public License (EPL) is a weak copyleft open-source license maintained by the Eclipse Foundation. EPL-2.0 was published in 2017. \nThe key requirements of the EPL are as follows. You must: \n-Include a copy of the full license text and the original copyright notice \n-Make available your source code when you distribute a derivative work based on the licensed code\n -License any derivative works of the library under the same or later version of the EPL \n-If you commercially distribute a product that includes an EPL-licensed program, you are required to defend that program’s contributors from any lawsuits/legal damages that may arise involving your product",
               "disclaimer": "Form of Secondary Licenses Notice “This Source Code may also be made available under the following Secondary Licenses when the conditions for such availability set forth in the Eclipse Public License, v. 2.0 are satisfied: name license(s), version(s), and exceptions or additional permissions here.” Simply including a copy of this Agreement, including this Exhibit A is not sufficient to license the Source Code under Secondary Licenses. If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice. You may add additional accurate notices of copyright ownership.",
               "risk_for_choosing_license": "The EPL does not allow contributors to be held liable for legal issues or damages, nor does it permit using contributors' names, trademarks, or logos.",
               "limitation_of_liability": "EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://www.eclipse.org/legal/epl-2.0/",
               "logo_detail": {
                 "filename": "img_419534b2-8c15-45bd-ad11-584b1ba798e7.png",
                 "actual_filename": "ECLIPSE.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_419534b2-8c15-45bd-ad11-584b1ba798e7.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": true
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": true
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             },
             "license_2": {
               "license_name": "Eclipse Public License v1.0",
               "license_tags": [],
               "version": "1.0",
               "type_of_license": "WEAKLY COPYLEFT",
               "short_description": "We recommend you not use this license, as it is deprecated.\nBut if  you want to commercially distribute the product that includes an EPL-licensed program, then you must  defend that program’s contributors from any lawsuits/legal damages that may arise involving your product.",
               "description": "Data",
               "disclaimer": "",
               "risk_for_choosing_license": "This license is deprecated.",
               "limitation_of_liability": "EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://opensource.org/licenses/EPL-1.0",
               "logo_detail": {
                 "filename": "img_3518fab2-735a-4c4b-b0b8-41f239c2ce1c.png",
                 "actual_filename": "ECLIPSE.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_3518fab2-735a-4c4b-b0b8-41f239c2ce1c.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": true
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             }
           }
         }
       },
       {
         "_id": "6458b792872f46db5b4e094b",
         "eventId": "FB1010000000016835356835556923",
         "license_compatibility_history": {
           "organization_id": "63cf89a0dcc2a171957b290b",
           "user_id": 609,
           "comparison_detail": {
             "is_compatible": true,
             "percentage_of_compatibility": 94,
             "license_1_event_id": "FB1010000000167238702450728865",
             "license_2_event_id": "FB1010000000167247184554419413",
             "identifier": "FB1010000000167238702450728865-FB1010000000167247184554419413",
             "license_1": {
               "license_name": "Eclipse Public License v2.0",
               "license_tags": [],
               "version": "2.0",
               "type_of_license": "WEAKLY COPYLEFT",
               "short_description": "gnu.org recommends that if an initial contributor releases a specific piece of code and designates GNU GPL version 2 or later as a secondary license, that provides explicit compatibility with those GPL versions for that code. (Doing so is roughly equivalent, for users, to releasing that piece of code under a dual license, EPL | GPL.) However, the EPL2 without this designation remains incompatible with the GPL.",
               "description": "The Eclipse Public License (EPL) is a weak copyleft open-source license maintained by the Eclipse Foundation. EPL-2.0 was published in 2017. \nThe key requirements of the EPL are as follows. You must: \n-Include a copy of the full license text and the original copyright notice \n-Make available your source code when you distribute a derivative work based on the licensed code\n -License any derivative works of the library under the same or later version of the EPL \n-If you commercially distribute a product that includes an EPL-licensed program, you are required to defend that program’s contributors from any lawsuits/legal damages that may arise involving your product",
               "disclaimer": "Form of Secondary Licenses Notice “This Source Code may also be made available under the following Secondary Licenses when the conditions for such availability set forth in the Eclipse Public License, v. 2.0 are satisfied: name license(s), version(s), and exceptions or additional permissions here.” Simply including a copy of this Agreement, including this Exhibit A is not sufficient to license the Source Code under Secondary Licenses. If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice. You may add additional accurate notices of copyright ownership.",
               "risk_for_choosing_license": "The EPL does not allow contributors to be held liable for legal issues or damages, nor does it permit using contributors' names, trademarks, or logos.",
               "limitation_of_liability": "EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://www.eclipse.org/legal/epl-2.0/",
               "logo_detail": {
                 "filename": "img_419534b2-8c15-45bd-ad11-584b1ba798e7.png",
                 "actual_filename": "ECLIPSE.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_419534b2-8c15-45bd-ad11-584b1ba798e7.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": true
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": true
                 }
               ],
               "references": [],
               "laws": "Not Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             },
             "license_2": {
               "license_name": "Eclipse Public License v1.0",
               "license_tags": [],
               "version": "1.0",
               "type_of_license": "WEAKLY COPYLEFT",
               "short_description": "We recommend you not use this license, as it is deprecated.\nBut if  you want to commercially distribute the product that includes an EPL-licensed program, then you must  defend that program’s contributors from any lawsuits/legal damages that may arise involving your product.",
               "description": "Data",
               "disclaimer": "",
               "risk_for_choosing_license": "This license is deprecated.",
               "limitation_of_liability": "EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
               "license_url": "https://opensource.org/licenses/EPL-1.0",
               "logo_detail": {
                 "filename": "img_3518fab2-735a-4c4b-b0b8-41f239c2ce1c.png",
                 "actual_filename": "ECLIPSE.png",
                 "file_extension": "png",
                 "url": "https://100080.pythonanywhere.com/media/img/img_3518fab2-735a-4c4b-b0b8-41f239c2ce1c.png"
               },
               "recommendation": "",
               "is_active": true,
               "permissions": [
                 {
                   "action": "Patent Use",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Patent Grant",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "conditions": [
                 {
                   "action": "Disclose Source Code",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Network Use is for Distribution",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Release Under Same License",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "State Changes",
                   "permission": "Yes",
                   "has_other_condition": true
                 },
                 {
                   "action": "Code can be used in closed source project",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Copied",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Distributed",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Reproduced",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Modified",
                   "permission": "Yes",
                   "has_other_condition": false
                 },
                 {
                   "action": "Commercial Used",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "limitations": [
                 {
                   "action": "Liability",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Warranty",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Trademark use",
                   "permission": "No",
                   "has_other_condition": false
                 },
                 {
                   "action": "Redistribution",
                   "permission": "Yes",
                   "has_other_condition": false
                 }
               ],
               "references": [],
               "laws": "Fixed",
               "sources": [
                 {
                   "action": "FSF Approved",
                   "permission": "Yes"
                 },
                 {
                   "action": "OSI Approved",
                   "permission": "Yes"
                 }
               ],
               "must_includes": [
                 {
                   "action": "License",
                   "permission": "Yes"
                 },
                 {
                   "action": "Copyright Notice",
                   "permission": "Yes"
                 }
               ]
             }
           }
         }
       }
     ]
   }
   ```