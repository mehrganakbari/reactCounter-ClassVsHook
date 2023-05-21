import React from "react";
import Logo from "./assets/logo192.png";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import HookCounter from "./components/HookCounter/HookCounter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <img src={Logo} />
        {/* <ClassCounter /> */}
        <HookCounter />
      </div>
      <div className="footer">
        <p>Developed by Mehrgan Akbari ^_^</p>
      </div>
    </div>
  );
}

export default App;
