<!-- 
## To follow the steps you provided, please follow the instructions below:

- Create a branch from the main branch with the name of the project you are working on, followed by your name. For example, if the project is called "MyProject" and your name is John, the branch name would be "MyProject-John".

- **Important**: Avoid pushing your code directly to the main branch. If you do so, your code will be removed, and you will need to push it again to your branch. Instead, always work on your own branch.

- Before starting the development process, make sure to thoroughly understand the project's API documentation. You can access it by clicking here, [Dowell API Services](https://github.com/orgs/DoWellUXLab/).

By following these steps, you will ensure that you work on your dedicated branch, understand the API documentation, and collaborate effectively on the project.

If you encounter any issues, have questions, or need assistance with the API, please contact our support team. -->


# DOWELL LICENCE COMPATIBILITY DOCUMENTATION

The Legalzard API provides access to a wide range of legal information and resources. It allows developers to retrieve information about software licenses, legal documents, legal entities, check license compatibility, and more. The API aims to facilitate the integration of legal information into applications, websites, or other software systems.


# INSTALLATION

Download or clone the project from github to the root of your project. Another aalternative is to downlaod either the dowell-legalzard-0.1.0.tar.gz or the dowell_legalzard-0.1.0-py3-none-any.whl files. Use the pip command to install either of the two files into your system.
    pip install dowell_legalzard-0.1.0-py3-none-any.whl or pip install dowell-legalzard-0.1.0.tar.gz
After installation is successful run python in your terminal to open python interpreter, the run
   import legalzard
if it runs without an error, you have successfully installed the legalzard package in your computer abd ready for use.



# How to use the package.
First you have to import the Legalzard class from the legalzard module
```python
from legalzard import Legalzard
``````

After importing the package, now its time to start utilizing the package.


# Usage

The legalzard packege offers 8 methods:
get_all, check_compatibility, create, delete, get_compatibility_history, retrieve, search, update.


# 1. get_all

The **get_all()** method gets all the licenses in the database. The method does not accept any argument.
```python
from legalzard import Legalzard
retrive_all_license = Legalzard.get_all()
``````


# 2. retrive()
The **retrieve()** methods gets a single linces by its eventId. The method accepts one argument, a string of a single license eventId.

```python
from legalzard import Legalzard
retrive_single_license = Legalzard.retrive('FB1010000000168941164557459078')
``````

# 3. delete()
The **delete()** methods is used to delete a license from the database. It accepts one argument which is the ID of the license to be deleted, in this case, the ID is the eventId in **str** method.

```python
from legalzard import Legalzard
retrive_single_license = Legalzard.delete('FB1010000000168941164557459078')
``````

# 4. search()
The **search()** method is used to querysearch a license from the database. The method accepts a string of a phase.

```python
from legalzard import Legalzard
retrive_single_license = Legalzard.search('We recommend you not to use')
``````


The method returns a dictionary of isSuccess of true, a count of the licenses found by the query search and the data.


# 5. check_compatibility()

Compatibility of licenses refers to how the terms and conditions of those licenses interact with each other. It determines whether the licenses can be combined or used together in a project or whether there are any conflicts or restrictions when using code or assets governed by those licenses.
The **check_compatibility()** method is used to check this condition. 
The method accepts one argument in form of a dictionary data type of the comparison_data.


```python
from legalzard import Legalzard
comparison_data = {
    "license_event_id_one": "FB1010000000167238702450728865",
    "license_event_id_two": "FB1010000000167247184554419413",
    "user_id": 609,
    "organization_id": "63cf89a0dcc2a171957b290b"
}
retrive_compatibility = Legalzard.check_compatibility(comparison_data)
``````

# 6. get_compatibility_history()

This module is used to get the comparison by a user and accepts two arguments arguments, **organization_id** and **user_id**.The response object contains a list of comparison history.

```python
from legalzard import Legalzard
data = {
    "user_id": 609,
    "organization_id": "63cf89a0dcc2a171957b290b"
}
retrive_compatibility = Legalzard.get_compatibility_history(comparison_data)
``````


# 7. update()

This module  used to change some details of an existing license in the database(update an already existing license). The method accepts two arguments, a string of the **eventId** and a dictionary of the updated license.

```python
from legalzard import Legalzard
data = {
    "eventId": 609,
    "organization_id": "63cf89a0dcc2a171957b290b"
}
retrive_compatibility = Legalzard.get_compatibility_history(comparison_data)
``````


# 8. create()

The **create()** module is used to create a new license and accepts an argument of a disctionary of this format

```python
     data = {
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

``````

and creating a license like this

```python
from legalzard import Legalzard

}
retrive_compatibility = Legalzard.create(data)
``````