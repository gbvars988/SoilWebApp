import React, { useState } from "react";
import "./signup.css";
import SignupValidation from "./SignupValidation";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Function to handle Signup
  const handleSignup = () => {
    // Validate the form fields
    const validationErrors = SignupValidation({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Get existing user details from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    // Add the new user to the existing list of users
    const updatedUsers = [...existingUsers, newUser];

    // Save the updated list of users to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Set signup success message
    setSignupSuccess(true);

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    window.location.href = "/profile";
  };

  return (
    <div className="form-container">
      <h1>Create your Soil account below</h1>
      <form>
        <div>
          <label className="label-text">Name:</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="label-text">Email:</label>
          <input
            className={`input-field ${errors.email && "is-danger"}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className="label-text">Password:</label>
          <input
            className={`input-field ${errors.password && "is-danger"}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>
        <button className="submit-button" type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {signupSuccess && <p>Signup successful!</p>}
    </div>
  );
}

export default Form;
