/* STUDY: Simple login form; on success redirect back to the page the user wanted */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = useLocation().state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const ok = login(email, pwd);
    if (ok) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <section className="p-4 max-w-sm mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">🔐 Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email (student@example.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Password (admin123)"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-700">
          Login
        </button>
      </form>
    </section>
  );
}
