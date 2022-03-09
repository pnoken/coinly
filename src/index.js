import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/login";
import Faq from "./components/Faq";
// import { TxnProvider } from "./context/TxnContext";

ReactDOM.render(
  <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);
