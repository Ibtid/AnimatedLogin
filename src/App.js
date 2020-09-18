import React, { useState, useEffect } from "react";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/login/register";

function App() {
  const [isLogginActive, setisLogginActive] = useState(true);

  const switchLogginHandler = () => {
    setisLogginActive(!isLogginActive);
  };

  useEffect(() => {
    return () => {};
  }, [isLogginActive]);

  var current = isLogginActive ? "Register" : "Login";
  var currentActive = isLogginActive ? "login" : "register";

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login />}
          {!isLogginActive && <Register />}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          isLogginActive={isLogginActive}
          onClick={switchLogginHandler}
        />
      </div>
    </div>
  );
}

const RightSide = (props) => {
  return (
    <div className="right-side left" onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
