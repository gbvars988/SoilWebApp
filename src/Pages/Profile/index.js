import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserData(loggedInUser);
    }
  }, []);

  return (
    <div className="profile-bg">
      <div className="profile-container">
        {userData && (
          <div className="profile-info">
            <h1>Welcome, {userData && userData.name}!</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Signup Time: {new Date(userData.signupTime).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
