import { useState } from "react";
import { formStyle } from "./styles";

const LicenseCompatibility = () => {
  const [compatibilityResult, setCompatibilityResult] = useState("");
  const [checked, setChecked] = useState(false);
  const [render, setRender] = useState("form");
  const [firstLicenseName, setFirstLicenseName] = useState("");
  const [secondLicenseName, setSecondLicenseName] = useState("");
  const [inputState, setInputState] = useState({
    first_license_name: "",
    second_license_name: "",
  });

  const checkStatus = (e) => {
    setChecked(!checked);
  };

  const handleChangeState = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = () => {
    setCompatibilityResult("");
  };

  async function retrieveFirstLicenseId({ firstLicenseName }) {
    try {
      const response = await fetch(
        `https://100080.pythonanywhere.com/api/licenses/?search_term=${firstLicenseName}&action_type=search`
      );
      const first_response = await response.json();
      return first_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async function retrieveSecondLicenseId({ secondLicenseName }) {
    try {
      const response = await fetch(
        `https://100080.pythonanywhere.com/api/licenses/?search_term=${secondLicenseName}&action_type=search`
      );
      const second_response = await response.json();
      return second_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async function processServicesRequest() {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sub_service_ids: ["DOWELL100301"],
          service_id: "DOWELL10030",
        }),
        redirect: "follow",
      };

      const service_url = `https://100105.pythonanywhere.com/api/v3/process-services/?type=module_service&api_key=2ab7d114-0351-418c-a149-2a50e9f70389`;

      const serviceResponse = await fetch(service_url, requestOptions);

      return serviceResponse.status;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  const checkLicenseCompatibility = async (e) => {
    e.preventDefault();

    try {
      const firstLicenseEventId = await retrieveFirstLicenseId({
        firstLicenseName,
      });
      const secondLicenseEventId = await retrieveSecondLicenseId({
        secondLicenseName,
      });

      if (firstLicenseEventId !== "" || secondLicenseEventId !== "") {
        const serviceStatus = await processServicesRequest();

        if (serviceStatus === 200) {
          const data = {
            action_type: "check-compatibility",
            license_event_id_one: firstLicenseEventId,
            license_event_id_two: secondLicenseEventId,
          };

          const response = await fetch(
            "https://100080.pythonanywhere.com/api/licenses/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const compareResult = await response.json();

          if (compareResult.percentage_of_compatibility > 70) {
            setCompatibilityResult("Highly Recommended");
          } else if (
            compareResult.percentage_of_compatibility >= 50 &&
            compareResult.percentage_of_compatibility <= 70
          ) {
            setCompatibilityResult("Recommended");
          } else {
            setCompatibilityResult("Not Recommended");
          }
        } else {
          return "You are out of Credit";
        }
      } else {
        return "Result not found";
      }
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          {compatibilityResult !== "" ? (
            <div className="show-recommendation">
              <h2>{compatibilityResult}</h2>
              <button type="button" style={formStyle.button} onClick={reset}>
                Ok
              </button>
            </div>
          ) : (
            <>
              <div style={{marginBottom: 20, marginTop:20}}>
                <input
                  
                  type="checkbox"
                  name="check"
                  id="flexCheckDefault"
                  checked={checked}
                  onChange={checkStatus}
                  style={{ width: 18, height: 18, marginRight:5,  }}
                />
                <label style={{fontSize: 18, fontWeight:600}}  htmlFor="flexCheckDefault">
                  Check License Compatibility
                </label>
              </div>
              {checked === true ? (
                <form onSubmit={checkLicenseCompatibility}>
                  <div className="mb-3">
                    <label htmlFor="firstLicense" style={formStyle.label}>
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
                      style={formStyle.input}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="secondLicense" style={formStyle.label}>Second License Name</label>
                    <br />
                    <input
                      type="text"
                      
                      id="secondLicense"
                      name="second_license_name"
                      value={inputState.second_license_name}
                      onChange={handleChangeState}
                      style={formStyle.input}
                    />
                  </div>

                  <div className="btn-wrapper">
                    <button type="submit" style={formStyle.button}>
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseCompatibility;
