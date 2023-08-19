import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { formStyle } from "./styles";

export const LicenseCompatibility = () => {
  const [inputState, setInputState] = useState({
    action_type: "",
    organization_id: "",
    user_id: "",
    license_event_id_one: "",
    license_event_id_two: "",
    
  });

  const [license1, setLicense1] = useState({});
  const [license2, setLicense2] = useState({});
  const [compatibiltyResult, setCompatibiltyResult] = useState("");
  const [checked, setChecked] = useState(false);
  const [render, setRender] = useState("form");
  const [resStatus, setResStatus] = useState();

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkState = (e) => {
    setChecked((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const compareLicense = async () => {
  

    const data = {
      action_type: inputState.action_type,
      organization_id: inputState.organization_id,
      user_id: inputState.user_id,
      license_event_id_one: inputState.license_event_id_one,
      license_event_id_two: inputState.license_event_id_two,
    };
    const headers = {
      "API-KEY": "2ab7d114-0351-418c-a149-2a50e9f70389",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    };

    await axios
      .post("https://100080.pythonanywhere.com/api/licenses/", data, headers)
      .then((response) => {
         
    const result =  response.data;
   console.log(result.percentage_of_compatibility)

        if(result.percentage_of_compatibility<= 50){
          setCompatibiltyResult("Not Recommended")
        }else if(result.percentage_of_compatibility <= 70){
          setCompatibiltyResult("Recommended")
        }else{
          setCompatibiltyResult("Highly Recommended");
        }
      
        
      // setLicense1(item.license_1);
      // setLicense2(item.license_2);
   

    setRender("content");
        
      })
      .catch((error) => {
        console.log("Error Message: ", error);
      });
  };

  const checkLicenseCompatibilty = async (e) => {
    e.preventDefault();

    const serviceData = {
      sub_service_ids: ["ADD DOWELL SUB SERVICE ID"],
      service_id: "DOWELL SERVICE ID",
    };
    const url = "https://100105.pythonanywhere.com/api/v3/process-services/";

    await axios
      .post(url, serviceData, {
        params: {
          type: "module_service",
          api_key: "YOUR API KEY",
        },
      })
      .then((response) => {
        const result = response.data;
        console.log(result.success);

        if (result.success === true) {
          compareLicense()
          
        } else {
          console.log("Unsuccessful");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {render === "form" ? (
        <>
          <div className="check-section">
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
            <div className="license-content card">
              <div className="terms-text card-body">
                <form onSubmit={checkLicenseCompatibilty} >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="actionType" className="form-label">
                          Action Type
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="action_type"
                          value={inputState.action_type}
                          onChange={handleChange}
                        >
                          <option>Select Type</option>
                          <option>check-compatibility</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="organizationId" className="form-label">
                          Organization ID
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="organizationId"
                          name="organization_id"
                          value={inputState.organization_id}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="firstLicenseId" className="form-label">
                          First License ID
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="firstLicenseId"
                          name="license_event_id_one"
                          value={inputState.license_event_id_one}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="secondLicenseId" className="form-label">
                          Second License ID
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="secondLicenseId"
                          name="license_event_id_two"
                          value={inputState.license_event_id_two}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="userId" className="form-label">
                          User ID
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="userId"
                          name="user_id"
                          value={inputState.user_id}
                          onChange={handleChange}
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      
                    >
                      Check License Compatibility
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
            {/* 
              THIS FORM IS MEANT TO PROVIDE DETAILS OF THE TWO LICENSES COMPARED
              IT'S COMMENTED OUT FOR NOW
            */}

            {/* <div className="license1">
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
            </div> */}
            {/* <div className="license2">
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
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};
