
# DoWell Opensource-License-Compatibility

### Version 1.0.0

### Description
- The Opensource License Compatibility Check package establish how two licenses are compatible with each other. This is a percentage estimate of how likely it is to recommend use of two softwares under the two licenses in one project.

### Installation
```javascript
    npm install opensource-license-compatibility
```

### Usage
- The check how two license are compatible with each other, you are require to provide the first license Id and the second license id in the respective input fields. select action type from the dropdown input field and enter your user Id (optional), enter organization Id and submit.

### Example
```javascript

data {
    "action_type": "check-compatibility",
    "license_event_id_one": "FB1010000000016839611235973491",
    "license_event_id_two": "FB1010000000016844191805602953",
    "user_id": 609,
    "organization_id": "63cf89a0dcc2a171957b290b"
}

```
The result is basically a percentage estimate. Percentage higher than 50% to 70% is Recommended while above 70% is Highly Recommend. 