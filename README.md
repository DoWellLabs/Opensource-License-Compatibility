## DOWELL LICENCE COMPATIBILITY CHECK PACKAGE

This package consumes the Open Source License Compatibility check API, which provides access to a wide range of legal information and resources. It allows developers to retrieve information about software licenses, legal documents, legal entities, check license compatibility, and more. The API aims to facilitate the integration of legal information into applications, websites, or other software systems.


## Example Usage
 ### creating a licence

`from compatibility import Compatibility`

`Compatibility.create_licence(data)`


### Methods

#### `create_licence(data)`

Create a new licence

- `data`: The json data with format as shown:
            ```json
            {
            "license_name": "Test & Sample Update",
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
            "is_active": true,
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

- Returns: Response returns the created licence in json format, with a status message set to True if succesful.

#### `retrieve_licence(id=None)`

Retrieve a Licence by ID(optional).

- `id(optional)`: The licence id for the particular licence being retrieved.
- Returns: If ID is not specified, it retrieves all licenses. Otherwise it retrieves the Licence with teh specified ID

#### `update_licence(id, data)`

Update a Licence by ID.

- `id`: The id of the licence to be updated.
- `data`: The json data with format as shown in `json_sample.json`
- Returns: Response returns a json of the updated licence.

#### `delete_licence(id)`

Delete a licence by ID.

- `id`: The id of the licence to be deleted.
- Returns: Response an event_id of the deleted licence and a status of success if deleted.

#### `search_licence(term)`

Search for a type of licence

- `term`: The is the type of licence to be searched, e.g mit.
- Returns: Response returns a json containing a list of the type of licence searched

#### `check_licence_compatibility(license_event_id_one,license_event_id_two, user_id, organization_id)`

Checks how compatible two licences are

- `license_event_id_one`: The id of the first licence's event_id
- `license_event_id_two`: The id of the second licence's event_id
- `user_id`: The user's ID
- `organization_id`: the organization's ID
- Returns: Response returns a json that contains percentage_of_compatibility, along with other related comparison information of the two licences

#### `comparison_history(organization_id, user_id)`

Retrieves the comparison history

- `organization_id`: the organization's ID
- `user_id`: The user's ID
- Returns: Response returns a json that contains a history of the comparisons done by the organization and the user