import React from "react";

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
          <label for="email" class="label">
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
        </div>
      </form>
    </main>
  );
};

export default login;
