import React from "react";
import "./login.css";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login-bg">
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
