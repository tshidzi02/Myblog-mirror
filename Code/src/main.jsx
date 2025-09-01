// SUMMARY: Mount <App /> into the #root div
/*
  import: brings code from another file into this one.
  ReactDOM.createRoot: prepares a React "root" to render our component tree.
  document.getElementById("root"): grabs the <div id="root"></div> in index.html.
  <React.StrictMode>: dev-only checks for common mistakes (safe to keep).
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
