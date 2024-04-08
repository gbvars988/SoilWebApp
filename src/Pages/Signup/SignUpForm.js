import React, { useState } from "react";
import "./signup.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState("");

  // Function to handle Signup
  const handleSignup = () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
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

    // Clear the form fields after saving
    setName("");
    setEmail("");
    setPassword("");
    setError("");
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
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label-text">Password:</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-button" type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {signupSuccess && <p>Signup successful!</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Form;
