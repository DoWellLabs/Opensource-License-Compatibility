# DoWell Opensource-License-Compatibility

## Version 1.0.0

### Description

- The Opensource License Compatibility Check package establish how two licenses are compatible with each other. This is a percentage estimate of how likely it is to recommend use of two softwares under the two licenses in one project.

- To check how two license are compatible with each other, you are require to provide the first license Id and the second license id in the respective input fields. select action type from the dropdown input field and enter your user Id (optional), enter organization Id and submit.

### Installation

With npm:

```javascript
    npm install dowell-license-compatibility
```
With yarn:

```javascript
    yarn add dowell-license-compatibility
```


## Usage

The license compatibility liberary require user ```apiKey``` and user ```organization id``` followed by ```first license id``` and  ```second license id``` for compatibility check. 

### Example using function component

```javascript

import { useState} from "react";
import { OpensourceLicenseCompatibility } from "dowell-licensecompatibility";

function App() {

//handle form input field state
  const [inputState, setInputState] = useState({
    actionType: "",
    firstLicenseID: "",
    secondLicenseID: "",
  });

  const checkState = (e) => {
    setChecked((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkLicenseCompatibility = () => {
    const result = new OpensourceLicenseCompatibility().compareLicenses({
      apiKey: process.env.API_KEY,
      license_event_id_one: inputState.firstLicenseID,
      license_event_id_two: inputState.secondLicenseID,
     
    });

    //The result is a JSON object returned with percentage_of_compatibility and other properties which gives a brief description of the licenses compared 
    
    console.log(result)
  };
  return (
    <div className="App">
      <h1>Check License Compatibility</h1>
      <button onClick={checkLicenseCompatibility}>Click</button>
    </div>
  );
}

export default App;

```

### API(conpareLicense)

compareLicenses( 
    apiKey,
    license_event_id_one,
    license_event_id_two,)

are used to initiates comparison between two licenses.

1. -`apiKey`: Your API key for accessing the process module service.
2. -`license_event_id_one`: First license ID.
3. -`license_event_id_two`: Second License ID.

### Note: 
The ` license_event_id_one` and `license_event_id_two` are unique identifiers for the licenses to be compared


### License

This project is licensed under the Apache License 2.0.
