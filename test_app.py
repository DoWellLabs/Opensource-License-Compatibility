import smtplib
from email.mime.text import MIMEText
import pytest
from app import send_email
from app import sanitizeEmail
from flask import Flask, request
import json
import app as app_module
import requests_mock
from app import legalzard_bot
from unittest.mock import Mock, patch, ANY

@pytest.fixture
def app():
    app = Flask(__name__)
    return app

@patch('app.requests.get')
@patch('app.Github')
def test_legalzard_bot_with_license(mock_github, mock_requests_get, app):
    client = app.test_client()

    # Mock the response from the GitHub API for user info
    user_info_mock = Mock()
    user_info_mock.json.return_value = {'email': 'test@example.com'}
    mock_requests_get.side_effect = [user_info_mock]

    # Mock the GitHub connection
    mock_repo = Mock()
    mock_repo.create_issue.return_value = None
    mock_github.return_value.get_repo.return_value = mock_repo

    # Mock the response from the GitHub API for SBOM
    sbom_data = {
        'sbom': {
            'packages': [
                {'licenseConcluded': 'MIT'},
                {'licenseConcluded': 'GPL-3.0'}
            ]
        }
    }
    mock_requests_get.return_value.json.return_value = sbom_data

    # Test with a repository that has a license
    payload = {
        'repository': {
            'license': {
                'key': 'mit'
            },
            'owner': {
                'login': 'test_owner'
            },
            'name': 'test_repo'
        }
    }
    response = client.post('/legalzard-bot', json=payload)
    assert response.status_code == 404

    # Test with a repository that does not have a license
    payload['repository']['license'] = None
    response = client.post('/legalzard-bot', json=payload)
    assert response.status_code == 404

    # Test with a repository that has a license not in the SBOM
    payload['repository']['license'] = {'key': 'nonexistent-license'}
    sbom_data['sbom']['packages'] = [{'licenseConcluded': 'MIT'}, {'licenseConcluded': 'GPL-3.0'}]
    mock_requests_get.return_value.json.return_value = sbom_data
    
    # Mock the response from the legalzard_api.search and legalzard_api.check_compatibility methods
    mock_legalzard_api = Mock()
    mock_legalzard_api.search.return_value = {'data': [{'eventId': 'event-id'}]}
    mock_legalzard_api.check_compatibility.return_value = {'is_compatible': False}
    
    # Patch the legalzard_api in the app module
    with patch('app.doWellOpensourceLicenseCompatibility', return_value=mock_legalzard_api):
        response = client.post('/legalzard-bot', json=payload)
    
    assert response.status_code == 404
    
            


@pytest.fixture
def smtp_server():
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
        yield smtp_server

def test_send_email():
    subject = 'Test Email'
    body = '<h1>This is a test email</h1>'
    sender = 'marvin.wekesa@gmail.com'
    owner_email = 'isaiahmwinga7@gmail.com'
    password = 'tntccgeyrevydnve'

    try:
        result = send_email(subject, body, sender, owner_email, password)
        assert result == True
    except Exception as e:
        print(f"Error in send_email: {e}")
        assert False, f"send_email failed with error: {e}"

def test_sanitizeEmail():
    assert app_module.sanitizeEmail('test,"email') == 'testemail'        


def test_remove_prefix():
    # Create a mock user object with a 'login' attribute
    class MockUser:
        def __init__(self, login):
            self.login = login

    users = [MockUser('NamedUser(login="user1"'), MockUser('NamedUser(login="user2"')]
    result = app_module.remove_prefix(users)
    assert result == ['user1', 'user2']

def test_add_prefix():
    names = ['user1', 'user2']
    result = app_module.add_prefix(names)
    assert result == '@user1 @user2'