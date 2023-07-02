import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Library from "../Pages/Library";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
