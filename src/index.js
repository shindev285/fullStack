import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "@/App";
// import reportWebVitals from './reportWebVitals';
import "@/style/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap 4.1.3 CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
