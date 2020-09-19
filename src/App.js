import React, { useState } from "react";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/login/register";
import Slider from "./components/login/Slider";

function App() {
  const [isLogginActive, setisLogginActive] = useState(true);

  const switchLogginHandler = () => {
    setisLogginActive(!isLogginActive);
  };

  var current = isLogginActive ? "Register here" : "Login here";
  var currentMessage = isLogginActive ? "New with us?" : "Have an account?";
  var currentActive = isLogginActive ? "right-side left" : "right-side right";

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login />}
          {!isLogginActive && <Register />}
        </div>
        <Slider
          current={current}
          currentMessage={currentMessage}
          currentActive={currentActive}
          isLogginActive={isLogginActive}
          onClick={switchLogginHandler}
        />
      </div>
    </div>
  );
}

export default App;
