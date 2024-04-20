import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setName(loggedInUser.name);
    }
  }, []);

  return (
    <div className="profile-bg">
      <div className="profile-container">
        <h1>Welcome, {name}!</h1>
      </div>
    </div>
  );
};

export default Profile;
