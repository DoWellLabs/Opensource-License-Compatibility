# DoWell Opensource-License-Compatibility

## Version 1.0.0

### Description

- The Opensource License Compatibility Check package establish how two licenses are compatible with each other. This is a percentage estimate of how likely it is to recommend use of two softwares under the two licenses in one project.

- To check how two license are compatible with each other, you are require to provide the first license name and the second license in the respective input fields and submit.

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

The license compatibility liberary require user `apiKey`, followed by `first license name` and `second license name` for compatibility check.

### Example using function component

```javascript
import { useState } from "react";
import { OpensourceLicenseCompatibility } from "@dowell/licensecompatibility";

function App() {
  const [inputState, setInputState] = useState({
    first_license_name: "",
    second_license_name: "",
  });

  const [compatibilityResult, setCompatibilityResult] = useState("");

  const handleChangeState = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = () => {
    setCompatibilityResult("");
  };

  const checkLicenseCompatibility = async (e) => {
    e.preventDefault();

    const result = new OpensourceLicenseCompatibility()
      .compareLicenses({
        apiKey: process.env.REACT_APP_API_KEY,
        first_license_name: inputState.first_license_name,
        second_license_name: inputState.second_license_name,
      })
      .then((response) => {
        try {
          if (response) {
            const compatibilityStatus = response;
            setCompatibilityResult(compatibilityStatus);
          } else {
            setCompatibilityResult("Result not found");
          }
        } catch (error) {
          console.log(error);
        }
      });
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          {compatibilityResult !== "" ? (
            <div className="show-recommendation">
              <h2>{compatibilityResult}</h2>
              <button type="button" className="btn-submit" onClick={reset}>
                Ok
              </button>
            </div>
          ) : (
            <form onSubmit={checkLicenseCompatibility}>
              <div className="mb-3">
                <label htmlFor="firstLicense" className="form-label">
                  First License Name
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="firstLicense"
                  name="first_license_name"
                  value={inputState.first_license_name}
                  onChange={handleChangeState}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="secondLicense">Second License Name</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="secondLicense"
                  name="second_license_name"
                  value={inputState.second_license_name}
                  onChange={handleChangeState}
                />
              </div>
              <div className="btn-wrapper">
                <button
                  type="submit"
                  className="btn-submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
```

### API(conpareLicense)

compareLicenses({apiKey, first_license_name, second_license_name}) function used to initiates comparison between two licenses.

1. -`apiKey`: Your API key for accessing the process module service.
2. -`first_license_name` and `second_license_name` are use for comparison in order check how compatible both licenses are to each other. The comparion result usually returns `Recommended`, `Highly Recommended` or `Not Recommended`

### License

This project is licensed under the Apache License 2.0.
