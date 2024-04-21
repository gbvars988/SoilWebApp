import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    const syncLoginStatus = () => {
      setLoggedIn(!!JSON.parse(localStorage.getItem("loggedInUser")));
    };

    window.addEventListener("storage", syncLoginStatus);
    return () => window.removeEventListener("storage", syncLoginStatus);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
