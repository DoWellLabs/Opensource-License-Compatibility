import React from "react"; 
import LicenseCompatibility from "./components/LicenseCompatibility.jsx";
// require('dotenv').config()  
const App = () => {

  return (
    <div className="app">
      {/* <h1 className="app-title">Dowell Open-Source License Compatibility Check</h1>
      <hr /> */}
      <LicenseCompatibility />
    </div>
  );
};

export default App;
