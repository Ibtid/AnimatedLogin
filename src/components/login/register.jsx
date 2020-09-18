import React from "react";
import loginImg from "../../login.svg";
import "./style.scss";

const Register = (props) => {
  return (
    <div className="base-container" ref={props.ref}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
