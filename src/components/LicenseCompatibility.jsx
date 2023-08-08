import { useState, useEffect } from "react";
import axios from "axios";
import { sample_data } from "../data";
import { formStyle } from "./styles";

const LicenseCompatibility = () => {
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

  useEffect(() => {
    sample_data.forEach((item) => {
      item.percentage_of_compatibility <= 50
        ? setCompatibiltyResult("Not Recommended")
        : item.percentage_of_compatibility <= 70
        ? setCompatibiltyResult("Recommended")
        : setCompatibiltyResult("Highly Recommended");
      setLicense1(item.license_1);
      setLicense2(item.license_2);
    });
  }, [license1]);

  const checkLicenseCompatibilty = async (e) => {
    e.preventDefault();

    const data = {
      action_type: inputState.action_type,
      organization_id: inputState.organization_id,
      user_id: inputState.user_id,
      license_event_id_one: inputState.license_event_id_one,
      license_event_id_two: inputState.license_event_id_two,
    };

    // action_type: "check-compatibility",
    // organization_id: "63cf89a0dcc2a171957b290b",
    // user_id: 609,
    // license_event_id_one: "FB1010000000016839611235973491",
    // license_event_id_two: "FB1010000000016844191805602953",

    const headers = {
      "API-KEY": "de4b3cd2-4d2a-4652-ba62-29a174c037ee",
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        "https://100080.pythonanywhere.com/api/public/licenses",
        {
          method: "PoST",
          data,
          headers,
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        
      } else {
        const result = await response.json();
        result.forEach((item) => {
          item.percentage_of_compatibility <= 50
            ? setCompatibiltyResult("Not Recommended")
            : item.percentage_of_compatibility <= 70
            ? setCompatibiltyResult("Recommended")
            : setCompatibiltyResult("Highly Recommended");
          setLicense1(item.license_1);
          setLicense2(item.license_2);
        });

        setRender("content");
      }
    } catch (err) {
      return err;
    }
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
                          htmlFor="actionType"
                          className="form-label"
                          style={formStyle.label}
                        >
                          Action Type
                        </label>
                        <br />
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="action_type"
                          style={formStyle.select}
                          value={inputState.action_type}
                          onChange={handleChange}
                        >
                          <option>Select Type</option>
                          <option>check-compatibility</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3" style={{ marginBottom: 8 }}>
                        <label
                          htmlFor="organizationId"
                          className="form-label"
                          style={formStyle.label}
                        >
                          Organization ID
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="organizationId"
                          name="organization_id"
                          style={formStyle.input}
                          value={inputState.organization_id}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3" style={{ marginBottom: 8 }}>
                        <label
                          htmlFor="firstLicenseId"
                          className="form-label"
                          style={formStyle.label}
                        >
                          First License ID
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="firstLicenseId"
                          name="license_event_id_one"
                          style={formStyle.input}
                          value={inputState.license_event_id_one}
                          onChange={handleChange}
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
                          Second License ID
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="secondLicenseId"
                          name="license_event_id_two"
                          style={formStyle.input}
                          value={inputState.license_event_id_two}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3" style={{ marginBottom: 8 }}>
                        <label
                          htmlFor="userId"
                          className="form-label"
                          style={formStyle.label}
                        >
                          User ID
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="userId"
                          name="user_id"
                          style={formStyle.input}
                          value={inputState.user_id}
                          onChange={handleChange}
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="" style={formStyle.buttonSection}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={formStyle.button}
                      onClick={() => setRender("content")}
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
