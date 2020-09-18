import React, { useState } from "react";
import "./App.scss";
import Login from "./components/login/login";

function App() {
  const [isLogginActive, setisLogginActive] = useState(true);
  return (
    <div className="App">
      <div className="login">
        <div className="container">{isLogginActive && <Login />}</div>
      </div>
    </div>
  );
}

export default App;
