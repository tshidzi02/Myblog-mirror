import React from "react";
import { useAuth } from "../auth/AuthContext";

export default function LogoutButton() {
  const { isLoggedIn, logout } = useAuth();
  if (!isLoggedIn) return null;
  return (
    <button onClick={logout} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
      Logout
    </button>
  );
}
