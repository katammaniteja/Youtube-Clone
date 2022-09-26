import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./_base.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
