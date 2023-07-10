import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as Scroll } from 'react-scroll'

function Navbar(props) {
  const navigate = useNavigate();
  const Logout = () => {
    toast.success("Logged Out Successfully");
    localStorage.removeItem("user");
    navigate("/");
    const user = JSON.parse(localStorage.getItem("user"));
    props.updateUser(user);
  };
  return (
    <nav className="navbar">
      <div className="leftbar">
        <div className="dropdown">
          <Link to={"/library"}>
            <button className="dropbtn">LIBRARY</button>
          </Link>
          <div className="dropdown-content">
            <a href="/library/Fiction">Fiction</a>
            <a href="/library/Competitive">Competitive</a>
            <a href="/library/Autobiography">Autobiography</a>
            <a href="/library/Others">Others</a>
          </div>
        </div>
      </div>
      <div className="middlebar">
        <Link to={"/"}>
          <button className="nav-btn">Home</button>
        </Link>
        <Link to={"/team"}>
        <button className="nav-btn">Team</button>
        </Link>
        <Scroll to="5" smooth={true} offset={-30} duration={500}>
              <button className="head-btn">Contact</button>
        </Scroll>
        {/* <button className="nav-btn">Services</button>
            <button className="nav-btn">Recommended</button> */}
      </div>
      <div className="rightbar">
        <Link to={"/user"}>
          <button className="nav-btn user-btn">
            <BiUserCircle className="user-icon" />
          </button>
        </Link>
        <button className="logout-btn" onClick={Logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
