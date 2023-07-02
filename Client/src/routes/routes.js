import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Library from "../Pages/Library";
import Landing from "../Pages/landing/landing";
import User from "../Pages/user/user";
import Admin from "../Pages/admin/admin";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
