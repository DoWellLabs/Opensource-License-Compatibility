import { useState } from "react";
import { formStyle } from "./styles";


const LicenseCompatibility = () => {
  const [compatibiltyResult, setCompatibiltyResult] = useState("");
  const [checked, setChecked] = useState(false);
  const [render, setRender] = useState("form");
  const [firstLicenseName, setFirstLicenseName] = useState("");
  const [secondLicenseName, setSecondLicenseName] = useState("");

  const checkState = (e) => {
    setChecked((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function retrieveFirstLicenseId({ firstLicenseName }) {
    try {
      const response = await fetch(
        `https://100080.pythonanywhere.com/api/licenses/?search_term=${firstLicenseName}&action_type=search`
      );
      const first_response = await response.json();
      //console.log("first response", first_response);
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
      //console.log("second response", second_response);
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
      // console.log(serviceResponse)
      return serviceResponse.status;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  const checkLicenseCompatibilty = async (e) => {
    e.preventDefault();

    try {
      const firstLicenseEventId = await retrieveFirstLicenseId({
        firstLicenseName,
      });
      const secondLicenseEventId = await retrieveSecondLicenseId({
        secondLicenseName,
      });

      // try {
      //   const requestOptions = {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       sub_service_ids: ["DOWELL100301"],
      //       service_id: "DOWELL10030",
      //     }),
      //     redirect: "follow",
      //   };
  
      //   const service_url = `https://100105.pythonanywhere.com/api/v3/process-services/?type=module_service&api_key=2ab7d114-0351-418c-a149-2a50e9f70389`;
  
      //   const serviceResponse = await fetch(service_url, requestOptions);
      //   console.log(serviceResponse.status)
      //   //return serviceResponse.text();
      // } catch (error) {
      //   return JSON.stringify(error);
      // }

      

      if (firstLicenseEventId !== "" || secondLicenseEventId !== "") {
        const serviceResult = await processServicesRequest();
        //console.log("from service result", serviceResult)

        if (serviceResult === 200) {
          const data = {
            action_type: "check-compatibility",
            license_event_id_one: firstLicenseEventId,
            license_event_id_two: secondLicenseEventId,
          };
          const header = {
            "API-KEY": "2ab7d114-0351-418c-a149-2a50e9f70389",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          };

          const options = {
            method: "POST",
            headers: header,
            body: data,
          };

          await fetch(
            "https://100080.pythonanywhere.com/api/licenses/",
            data,
            options
          )
            .then((response) => {
              const data = response;
              console.log("from data", data)
              let result = "";

              if (data.percentage_of_compatibility > 70) {
                result = "Highly Recommended";
              } else if (
                data.percentage_of_compatibility >= 50 &&
                data.percentage_of_compatibility <= 70
              ) {
                result = "Recommended";
              } else {
                result = "Not Recommended";
              }
              return result;
            })
            .catch((error) => {
              return error.message;
            });
        } else {
          console.log("You are out of Credit")
        }
      } else {
        return "Result not found";
      }
    } catch (error) {}
   
  };

  return (
    <div className="dashboard" style={formStyle.dashboard}>
      {render === "form" ? (
        <>
          <div className="check-section" style={formStyle.checkSection}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="check"
                id="flexCheckDefault"
                checked={checked}
                onChange={checkState}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Check License Compatibility
              </label>
            </div>
          </div>
          {checked === false ? (
            ""
          ) : (
            <div
              className="license-content"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              <div className="terms-text card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3" style={{ marginBottom: 8 }}>
                        <label
                          htmlFor="firstLicenseId"
                          className="form-label"
                          style={formStyle.label}
                        >
                          First License Name
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="firstLicenseId"
                          name="firstLicenseName"
                          style={formStyle.input}
                          onChange={(e) => setFirstLicenseName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3" style={{ marginBottom: 8 }}>
                        <label
                          htmlFor="secondLicenseId"
                          className="form-label"
                          style={formStyle.label}
                        >
                          Second License Name
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="secondLicenseId"
                          name="secondLicenseName"
                          style={formStyle.input}
                          onChange={(e) => setSecondLicenseName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="" style={formStyle.buttonSection}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={formStyle.button}
                      onClick={checkLicenseCompatibilty}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="license-details">
            <div className="compatibility-result">
              <h4 style={formStyle.compatibilityResult}>
                Compatibility: {compatibiltyResult}
              </h4>
            </div>
            <div className="license1">
              <h4 style={{ fontSize: 18, fontWeight: 700 }}>
                FIRST LICENSE: <span>{license1.license_name}</span>
              </h4>
              <h5 style={formStyle.h5}>
                Version: <span>{license1.version}</span>{" "}
              </h5>
              <h5 style={formStyle.h5}>
                Type : <span>{license1.type_of_license}</span>{" "}
              </h5>
              <h5 style={formStyle.h5}>Decsription:</h5>
              <p>{license1.description}</p>
              <h5 style={formStyle.h5}>Risk:</h5>{" "}
              <p>{license1.risk_for_choosing_license}</p>
              <h5 style={formStyle.h5}>Liability:</h5>{" "}
              <p>{license1.limitation_of_liability}</p>
              <h5 style={formStyle.h5}>Disclaimer:</h5>{" "}
              <p>{license1.disclaimer}</p>
            </div>
            <div className="license2">
              <h4 style={{ fontSize: 18, fontWeight: 700 }}>
                SECOND LICENSE : <span>{license2.license_name}</span>
              </h4>
              <h5 style={formStyle.h5}>Version: {license2.version}</h5>
              <h5 style={formStyle.h5}>Type: {license2.type_of_license}</h5>
              <h5 style={formStyle.h5}>Decsription:</h5>
              <p>{license2.description}</p>
              <h5 style={formStyle.h5}>Risk:</h5>{" "}
              <p>{license2.risk_for_choosing_license}</p>
              <h5 style={formStyle.h5}>Liability:</h5>{" "}
              <p>{license2.limitation_of_liability}</p>
              <h5 style={formStyle.h5}>Disclaimer:</h5>{" "}
              <p> {license2.disclaimer}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LicenseCompatibility;
