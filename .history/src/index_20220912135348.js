import React from "react";
import ReactDOM from "react-dom/client";
import "./csswebmural.css";
import WebMural from "./Pages/WebMural";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WebMural />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
