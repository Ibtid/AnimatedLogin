import React from "react";
import loginImg from "../../login.svg";
import "./style.scss";
import useForm from "../../useForm";
import validate from "../../validateLogin";

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Succesfully");
  }

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            {errors.username && <p className="error">{errors.username}</p>}
            <input
              className={`${errors.username && "inputError"}`}
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            {errors.password && <p className="error">{errors.password}</p>}
            <input
              className={`${errors.password && "inputError"}`}
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
