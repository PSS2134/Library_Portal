import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Signup from "../Tailwind/Signup";
import Login from "../Tailwind/Login";
import Library from "../Tailwind/Library";
import Landing from "../Pages/landing/landing";
import User from "../Pages/user/user";
import Admin from "../Pages/admin/admin";
import Fiction from "../Pages/Booklist/Fiction";
import Academic from "../Pages/Booklist/Academic";
import Autobiography from "../Pages/Booklist/Autobiography";
import Others from "../Pages/Booklist/Others";
import Bookinfo from "../Pages/Bookinfo";

//data
import books from "../Data/data";

function Routes_new() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/library/fiction" element={<Fiction/>}/>
        <Route path="/library/autobiography" element={<Autobiography/>}/>
        <Route path="/library/competitive" element={<Academic/>}/>
        <Route path="/library/others" element={<Others/>}/>
        <Route path="/library/competitive/:id" element={<Bookinfo/>}/>
        
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_new;
