import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a UserContext
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/verify-token", {
          withCredentials: true,
        });
        if (response.data.success) {
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) {
            setUser(storedUser);
            setIsAuth(true);
          }
        } else {
          handleInvalidSession();
        }
      } catch (error) {
        console.log(error)
        handleInvalidSession();
      }
    };

    const handleInvalidSession = () => {
      setUser(null);
      setIsAuth(false);
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
    };

    verifyToken();
  }, [isAuth]);

  const loginUser = (userData) => {
    setUser(userData);
    setIsAuth(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuth", JSON.stringify(true));
  };

  const logoutUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed", error);
    }
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  };
  return (
    <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
