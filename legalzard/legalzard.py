import json

LEGALZARD_API = 'https://100080.pythonanywhere.com/api/licenses/'
import requests


class Legalzard:
    def get_all(self):
        """
        Get all licenses submitted
        :return: An Object with retrieval status and an list of all licenses

        The response body

        :param: isSuccess: A boolean showing retrieval status
        :param data: A list of licenses.

        """
        return requests.get(url=LEGALZARD_API).json()

    def create(self, license: dict):
        """
        Create a license by adding all the fields required
        :param license: An object with the following properties.
        :return: Retrieval Object with a single license information that was created
        The response body

        :param: isSuccess: A boolean showing retrieval status
        :param data: A list with a single license.
        """
        return requests.post(url=LEGALZARD_API, data=json.dumps(license)).json()

    def retrieve(self, event_id: str):
        """
        Retrieve license information using an ID
        :param event_id: A string ID of the license
        :return: Retrieval Object with a single license information that was created
        The response body

        :param: isSuccess: A boolean showing retrieval status
        :param data: A list with a single license.
        """
        return requests.get(url='{}{}/'.format(LEGALZARD_API, event_id)).json()

    def update(self, event_id: str, license: dict):
        return requests.put(url='{}{}/'.format(LEGALZARD_API, event_id), data=json.dumps(license)).json()

    def delete(self, event_id: str):
        return requests.delete(url='{}{}/'.format(LEGALZARD_API, event_id)).json()

    def search(self, search_term: str):
        return requests.get(url=LEGALZARD_API, params={'action_type': 'search', 'search_term': search_term}).json()

    def check_compatibility(self, comparison_data: dict):
        comparison_data['action_type'] = 'check-compatibility'
        return requests.post(url=LEGALZARD_API, data=json.dumps(comparison_data)).json()

    def get_compatibility(self, organization_id: str, user_id: str):
        return requests.get(url=LEGALZARD_API, params={'collection_type': 'license-compatibility-history',
                                                       'organization_id': organization_id, 'user_id': user_id})