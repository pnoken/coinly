import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import Faq from "./components/Faq";

ReactDOM.render(
  <BrowserRouter>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>  
  </BrowserRouter>,
  document.getElementById("root")
);
