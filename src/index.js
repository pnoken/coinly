import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import SignupPage from "./pages/Signup";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
