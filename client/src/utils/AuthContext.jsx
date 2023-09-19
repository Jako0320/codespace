import React, { createContext, useContext, useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from './localStorage'; // Import localStorage functions

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to set the user when authenticated
  const login = (userData) => {
    setUser(userData);
    setItem('id_token', userData.token); // Store the token in localStorage
  };

  // Function to log the user out
  const logout = () => {
    setUser(null);
    removeItem('id_token'); // Remove the token from localStorage
  };

  useEffect(() => {
    // Check if a user is authenticated (e.g., by validating the token)
    const token = getItem('id_token'); // Get the token from localStorage
    if (token) {
      // Fetch user data based on the token and call login(userData)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
