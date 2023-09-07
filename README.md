# DoWell Opensource-License-Compatibility

## Version 1.0.0

### Description

- The Opensource License Compatibility Check package establish how two licenses are compatible with each other. This is a percentage estimate of how likely it is to recommend use of two softwares under the two licenses in one project.

- To check how two license are compatible with each other, you are require to provide the first license name and the second license  in the respective input fields and  submit.

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

The license compatibility liberary require user ```apiKey```, followed by ```first license name``` and  ```second license name``` for compatibility check. 

### Example using function component

```javascript

import { useState} from "react";
import { OpensourceLicenseCompatibility } from "dowell-licensecompatibility";

function App() {

//handle form input field state
  const [inputState, setInputState] = useState({
    first_license_name: "",
    second_license_name: "",
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
      first_license_name: inputState.first_license_name,
      second_license_name: inputState.second_license_name,
     
    }).then(response=>{
      console.log(response)
      
    //The result is a JSON object returned with percentage_of_compatibility and other properties which gives a brief description of the licenses compared 
    });

    
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
    first_license_name,
    second_license_name,)

are used to initiates comparison between two licenses.

1. -`apiKey`: Your API key for accessing the process module service.

### License

This project is licensed under the Apache License 2.0.
