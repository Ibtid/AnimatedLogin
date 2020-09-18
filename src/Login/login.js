import React from "react";
import "./login.css";

const login = () => {
  return (
    <main>
      <form>
        <div className="field">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Email"
          />
          <label for="email" className="label">
            Email
          </label>
        </div>
        <div className="field">
          <input
            //type={showPassword ? "text" : "password"}
            name="email"
            className="input"
            placeholder="Enter password"
            //onInput={validatePassword}
            //classvalid={strength > 3}
          />
          <label for="password" className="label">
            Password
          </label>
        </div>
      </form>
    </main>
  );
};

export default login;
