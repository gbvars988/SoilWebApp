import React from "react";
import "./login.css";
import LoginValidation from "./LoginValidation";
import useForm from "./useForm";

const LoginForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    LoginValidation
  );

  function login() {
    console.log("No errors, submit callback called!");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (!user) {
      alert("Please enter a valid Soil account email and password.");
      return;
    }
  }

  return (
    <div className="form-container">
      <h1>Login using your Soil account below</h1>
      <form onSubmit={handleSubmit} noLoginValidation>
        <div>
          <label className="label-text">Email:</label>
          <input
            autoComplete="off"
            className={`input ${errors.email}`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className="label-text">Password:</label>
          <input
            className={`input ${errors.password}`}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;