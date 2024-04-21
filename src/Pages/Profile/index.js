import React, { useEffect, useState } from "react";
import "./profile.css";
import ProfileImg from "../../Assets/profile.jpg";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserData(loggedInUser);
    }
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  // Function to handle profile update
  const handleUpdate = () => {
    if (newName && newEmail) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        // Find the index of the logged-in user in the existing users array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(
          (user) =>
            user.name === loggedInUser.name && user.email === loggedInUser.email
        );

        if (userIndex !== -1) {
          // Update the name and email of the logged-in user
          users[userIndex].name = newName;
          users[userIndex].email = newEmail;

          // Save the updated user list back to localStorage
          localStorage.setItem("users", JSON.stringify(users));

          // Update the loggedInUser object in localStorage as well
          const updatedUserData = {
            ...loggedInUser,
            name: newName,
            email: newEmail,
          };
          localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
          setUserData(updatedUserData);

          // Clear the input fields
          setNewName("");
          setNewEmail("");
        } else {
          console.error("Logged-in user not found in users list.");
        }
      } else {
        console.error("Logged-in user data not found in localStorage.");
      }
    }
  };

  // Function to handle profile deletion
  const handleDeleteProfile = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (confirmDelete) {
      // Remove user data from localStorage and log the user out
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("users");
      setUserData(null);
      window.location.href = "/login";
    }
  };

  return (
    <div className="profile-bg">
      <div className="profile-line"></div>
      <div className="profile-container">
        {userData && (
          <div className="profile-info">
            <h1>Welcome, {userData && userData.name}!</h1>
            <img src={ProfileImg} alt="Profile" />
            <h2>
              Signup Time: {new Date(userData.signupTime).toLocaleString()}
            </h2>
            <div className="edit-profile">
              <h2 className="edit-text"> Edit your profile details below</h2>
              <p className="name-text">Name: {userData.name}</p>
              <input
                className="input-box"
                type="text"
                placeholder="New Name"
                value={newName}
                onChange={handleNameChange}
              />
              <p className="email-text">Email: {userData.email}</p>
              <input
                className="input-box"
                type="text"
                placeholder="New Email"
                value={newEmail}
                onChange={handleEmailChange}
              />

              <button className="update-button" onClick={handleUpdate}>
                Update
              </button>
              <button className="delete-button" onClick={handleDeleteProfile}>
                Delete Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
