import React, { useState, useEffect } from "react";
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
import FormElement from "../components/order/Form";
import AdminUser from "../components/admincomp/adminuser";

//data
// import books from "../Data/data";

function Routes_new() {
  const [user, setLoginUser] = useState({});
  const[admin,setAdmin]=useState({});
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    // const user_after_every_load=
    setLoginUser(JSON.parse(localStorage.getItem("user")));
    setAdmin(JSON.parse(localStorage.getItem("admin")))
  }, []);
  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoginUser(user);
  };
  const updateAdmin = (admin) => {
    localStorage.setItem("admin", JSON.stringify(admin));
    setAdmin(admin);
  };
  console.log(available);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Landing updateUser={updateUser} updateAdmin={updateAdmin} />} />
        <Route
          path="/user"
          element={
            user && user.email ? (
              <User updateUser={updateUser} updateAdmin={updateAdmin}  />
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminuser/:email" element={<AdminUser />} />
        <Route path="/login" element={<Login updateUser={updateUser} updateAdmin={updateAdmin} />} />
        <Route
          path="/library"
          element={
            (admin&&admin.email)||(user && user.email) ? (
              <Library updateUser={updateUser} updateAdmin={updateAdmin}/>
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route
          path="/admin"
          element={
            admin && admin.email ? (
              <Admin updateUser={updateUser} updateAdmin={updateAdmin} />
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route
          path="/order"
          element={
            user && user.email ? (
              <FormElement updateUser={updateUser} />
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route
          path="/library/:genre"
          element={
            (admin&&admin.email)||(user && user.email) ? (
              <Booklist updateUser={updateUser} />
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route
          path="/library/:genre/:id"
          element={
            (admin&&admin.email)||(user && user.email) ? (
              <Bookinfo updateUser={updateUser} />
            ) : (
              <Login updateUser={updateUser} updateAdmin={updateAdmin} />
            )
          }
        />
        <Route path="/team" element={<Members updateUser={updateUser} updateAdmin={updateAdmin} />} />
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_new;
