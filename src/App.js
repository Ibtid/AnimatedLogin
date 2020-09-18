import React, { useState } from "react";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/login/register";

function App() {
  const [isLogginActive, setisLogginActive] = useState(false);
  return (
    <div className="App">
      <div className="login">
        <div className="container" /*ref={(ref) => (this.container = ref)}*/>
          {isLogginActive && (
            <Login containerRef={(ref) => (this.current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={(ref) => (this.current = ref)} />
          )}
        </div>
        <RightSide />
      </div>
    </div>
  );
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
