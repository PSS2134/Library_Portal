import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../Tailwind/Signup";
import Login from "../Tailwind/Login";
import Library from "../Tailwind/Library";
import Landing from "../Pages/landing/landing";
import User from "../Pages/user/user";
import Admin from "../Pages/admin/admin";
import Bookinfo from "../Pages/Bookinfo";
import Booklist from "../Pages/Booklist/Booklist";
import ScrollToTop from "./Scroll";
import Members from "../Pages/team/Team";

//data
// import books from "../Data/data";

function Routes_new() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/library/:genre" element={<Booklist />} />
        <Route path="/library/:genre/:id" element={<Bookinfo />} />
        <Route path="/team" element={<Members/>} />
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_new;
