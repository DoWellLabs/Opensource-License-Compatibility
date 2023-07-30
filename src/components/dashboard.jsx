import { useState, useEffect } from "react";
import { sample_data } from "../data";

const Dashboard = () => {
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

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkLicenseCompatibilty = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://100080.pythonanywhere.com/api/public/licenses/",
      {
        method: "POST",
        body: JSON.stringify({
          action_type: inputState.action_type,
          organization_id: inputState.organization_id,
          user_id: inputState.user_id,
          license_event_id_one: inputState.license_event_id_one,
          license_event_id_two: inputState.license_event_id_two,
        }),
        headers: {
          "API-KEY": "",
          "Content-Type": "application/json",
        },
      }
    );

    response.forEach((item) => {
      item.percentage_of_compatibility <= 50
        ? setCompatibiltyResult("Not Recommended")
        : item.percentage_of_compatibility <= 70
        ? setCompatibiltyResult("Recommended")
        : setCompatibiltyResult("Highly Recommended");
      setLicense1(item.license_1);
      setLicense2(item.license_2);
    });

    console.log(response);
    // action_type: "check-compatibility",
    // organization_id: "63cf89a0dcc2a171957b290b",
    // user_id: 609,
    // license_event_id_one: "FB1010000000016839611235973491",
    // license_event_id_two: "FB1010000000016844191805602953",
  };

  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-5">
          <div className="license-content card ">
            <div className="terms-text card-body">
              <form onSubmit={checkLicenseCompatibilty}>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-7 license-details">
          <div className="compatibility-result">
            <h4>Compatibility Result: {compatibiltyResult}</h4>
          </div>
          <div className="license1">
            <h6>
              License 1: <span>{license1.license_name}</span>
            </h6>
            <h6>Version: {license1.version}</h6>
            <h6>Type : {license1.type_of_license}</h6>
            <h6>Decsription:</h6>
            <p>{license1.description}</p>
            <h6>Risk:</h6> <p>{license1.risk_for_choosing_license}</p>
            <h6>Liability:</h6> <p>{license1.limitation_of_liability}</p>
            <div className="d-flex">
              <h6>Disclaimer: </h6>
              <span>{license1.disclaimer}</span>
            </div>
          </div>
          <div className="license2">
            <h6>
              License 2: <span>{license2.license_name}</span>
            </h6>
            <h6>Version: {license2.version}</h6>
            <h6>Type: {license2.type_of_license}</h6>
            <h6>Decsription:</h6>
            <p>{license2.description}</p>
            <h6>Risk:</h6> <p>{license2.risk_for_choosing_license}</p>
            <h6>Liability:</h6> <p>{license2.limitation_of_liability}</p>
            <div className="d-flex">
              <h6>Disclaimer: </h6>
              <span> {license2.disclaimer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
