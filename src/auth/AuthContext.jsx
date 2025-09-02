/* STUDY: Global login state (isLoggedIn) with login/logout persisted in localStorage */
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

/* create a Context object to share auth state across components */
const AuthContext = createContext(null);

/* convenience hook so components can read auth easily */
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  /* load initial login state from localStorage only once (on first render) */
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try { return JSON.parse(localStorage.getItem("isLoggedIn")) === true; }
    catch { return false; }
  });

  /* whenever isLoggedIn changes, save it to localStorage so a refresh keeps the state */
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  /* very simple demo check (replace with real backend later) */
  function login(email, password) {
    const ok = email?.toLowerCase() === "student@example.com" && password === "admin123";
    setIsLoggedIn(ok);
    return ok;
  }

  /* log out: just flip the flag; ProtectedRoute will block edits */
  function logout() {
    setIsLoggedIn(false);
  }

  /* memoize the value to avoid unnecessary re-renders */
  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

  /* expose the value to the whole app */
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
