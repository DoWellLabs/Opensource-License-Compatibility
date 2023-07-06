# To use a consistent encoding
from codecs import open
from os import path

from setuptools import setup

# The directory containing this file
HERE = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(HERE, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name="dowell-legalzard",
    version="0.1.0",
    description="Dowell Opensource License Compatibility Libray",
    long_description=long_description,
    long_description_content_type="text/markdown",
    author='Dennis RK.',
    license="MIT",
    packages=["legalzard"],
    include_package_data=True,
    install_requires=["requests"]
)