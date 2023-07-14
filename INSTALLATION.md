# Installing the package from GitHub using pip
To install the package from GitHub, you can use the following steps:

## Open a terminal window and navigate to the directory where you want to install the package.
- You may create a virtual environment and activate it using the following commands in terminal:
    ```python
    #create the virtual environment called myenv
    python -m venv myenv
    #activate the virtual environment
    myenv/Scripts/activate
    ```
- Use the pip install command to install the package. The syntax for the command is:
`pip install git+https://github.com/DoWellLabs/Opensource-License-Compatibility.git@<branch-name>`

    **Replace the < branch-name> with either _compatibility-Marvin_ or _legalzard-Dennis_**

# Installing the package from pypi
To install the package from pypi, you can use the following steps:

## Open a terminal window and navigate to the directory where you want to install the package.
- You may create a virtual environment and activate it using the following commands in terminal:
    ```python
    #create the virtual environment called myenv
    python -m venv myenv
    #activate the virtual environment
    myenv/Scripts/activate
    ```
- Use the pip install command to install the package. The syntax for the command is:
`pip install <package-name>`


# Usage:

Once the package is installed, you can import it into your Python code. For example:

## for `legalzard-Dennis` package

> import the package

`from legalzard import Legalzard`

> create an instance of the class

`license = Legalzard()`

## for `compatibility-Marvin` package

> import the package

`from compatibility import Compatibility`

> create an instance of the class

`compatibility = Compatibility()`

More information on the methods available and each method's usage can be found in the following documentations: 
> [Compatibility Documentation](https://github.com/DoWellLabs/Opensource-License-Compatibility/blob/compatibility-Marvin/README.md)

> [Legalzard Documentation](https://github.com/DoWellLabs/Opensource-License-Compatibility/blob/legalzard-Dennis/README.md)


