import React, { useState } from "react";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/login/register";

function App() {
  const [isLogginActive, setisLogginActive] = useState(false);
  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login />}
          {!isLogginActive && <Register />}
        </div>
      </div>
    </div>
  );
}

export default App;
