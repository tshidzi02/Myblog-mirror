// SUMMARY: Vite/React entry that mounts <App /> into #root
/*
  ReactDOM.createRoot: concurrent renderer (since React 18).
  document.getElementById("root"): selects the <div> in index.html.
  <React.StrictMode>: dev-only checks for common mistakes.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
