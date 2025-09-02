// src/components/LogoutButton.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="ml-4 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
    >
      Logout
    </button>
  );
}
