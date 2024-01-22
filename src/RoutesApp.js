import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Book from "./pages/Books";
import NewBook from "./pages/NewBook";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Book />} />
      <Route path="/books/new" element={<NewBook />} />
    </Routes>
  );
}
