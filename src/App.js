import "./App.css";
import { useState} from "react";
import { OpensourceLicenseCompatibility } from "@dowell/licensecompatibility";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [inputState, setInputState] = useState({
    first_license_name: "",
    second_license_name: "",
  });
  const [compatibilityResult, setCompatibilityResult] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeState = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkStatus = () => {
    setChecked(!checked);
  };

  const reset = () => {
    setCompatibilityResult("");
    setLoading(false);
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
            <>
              <div className="check-section">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="check"
                  id="flexCheckDefault"
                  checked={checked}
                  onChange={checkStatus}
                  style={{ width: 18, height: 18, marginRight: "5px" }}
                />
                <label className="checkbox-label" htmlFor="flexCheckDefault">
                  Check License Compatibility
                </label>
              </div>
              {checked === true ? (
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
                  <ClipLoader
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="btn-submit"
                      onClick={() => setLoading(true)}
                    >
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
}

export default App;
