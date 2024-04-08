import React from "react";
import "./login.css";

function LoginForm() {
  return (
    <div className="form-container">
      <h1>Welcome back to Soil</h1>
      <form>
        <div>
          <label className="label-text">Email:</label>
          <input className="input-field" type="text" />
        </div>
        <div>
          <label className="label-text">Password:</label>
          <input className="input-field" type="password" />
        </div>
        <button className="submit-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
