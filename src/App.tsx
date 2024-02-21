import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BaseTemplate from "./Templates/BaseTemplate";
import HomePage from "./Pages/HomePage";
import AvailableBooks from "./Pages/AvailableBooks";
import MyBooks from "./Pages/MyBooks";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/available-books" element={<AvailableBooks />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/register-new-book" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
