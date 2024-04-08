import React from "react";
import Navbar from "../Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <h1> Login </h1>
      <p>
        {" "}
        Signin: The Signin component is also a form with only email and password
        fields for signing in: After the proper validations (email and password)
        and checks have been performed, the user will be redirected to the
        profile page. Provide a visual cue upon successful login. The visual cue
        could be a text or a pop-up message.
      </p>
    </div>
  );
}

export default Login;
