import React,{useEffect} from "react"; 
import Dashboard from "./components/Dashboard.jsx";
// require('dotenv').config()  
const App = () => {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };

  // }, []);
  return (
    <div className="app">
      <h1 className="app-title">Dowell Open-Source License Compatibility Check</h1>
      <hr />
      <Dashboard />
    </div>
  );
};

export default App;
