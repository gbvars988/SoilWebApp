import React from "react";

function Signup() {
  return (
    <div>
      <h1> Signup </h1>
      <p>
        The Signup component will present a form with name, email, and password
        fields to the user for sign-up. Password input should not be visible in
        a cleartext format. You may want to have a confirm password field, its
        implementation is optional. Sign up form will perform all the necessary
        validations and then save the user details in localStorage. Validations
        to be performed- ● name, email and password are necessary fields. ●
        email must be in a proper format ● the password must be a strong
        password (look at the definition of a strong password) Provide a visual
        cue upon successful registration. The visual cue could be a text or a
        pop-up message. Upon successful registration, the user should be
        automatically logged in.
      </p>
    </div>
  );
}

export default Signup;
