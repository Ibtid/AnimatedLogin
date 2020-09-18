import React from "react";

const login = () => {
  return (
    <main>
      <form>
        <div class="field">
          <input
            type="email"
            name="email"
            class="input"
            placeholder="Enter Email"
          />
          <label for="email" class="label">
            Email
          </label>
        </div>
      </form>
    </main>
  );
};

export default login;
