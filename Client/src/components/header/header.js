import React from 'react'
import './header.css';
import { Link ,useNavigate } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll'
import { BiUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Header(props) {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const Logout = () => {
    toast.success("Logged Out Successfully");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/");
    const user = JSON.parse(localStorage.getItem("user"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    props.updateUser(user);
    props.updateAdmin(admin);
  };
  const admin = JSON.parse(localStorage.getItem("admin"));

    return (
      <nav className="header">
        <div className="leftbarr">
            <div class="dropdown">
              {!user&&
                  <button className="dropbtn-head">LIBRARY</button>
              }
              {user&&
                <>
                <Link to={"/library"}>
                    <button className="dropbtn">LIBRARY</button>
                </Link>
                
                <div className="dropdown-content">
                  <a href="/library/Fiction">Fiction</a>
                  <a href="/library/Competitive">Competitive</a>
                  <a href="/library/Autobiography">Autobiography</a>
                  <a href="/library/Others">Others</a>
                </div>
                </>
              }
            </div>
            
        </div>
        <div className="middlebarr">
            <Link to={'/'}><button className="head-btn">Home</button></Link>
            <Scroll to="2" smooth={true} offset={-50} duration={500}>
              <button className="head-btn">About</button>
            </Scroll>
            <Scroll to="3" smooth={true} offset={-30} duration={500}>
              <button className="head-btn">Services</button>
            </Scroll>
            <Scroll to="4" smooth={true} offset={-30} duration={500}>
              <button className="head-btn">Recommended</button>
            </Scroll>
            <Scroll to="5" smooth={true} offset={-30} duration={500}>
              <button className="head-btn">Contact</button>
            </Scroll>
            {
                admin &&
                <Link style={{"color":"white","textAlign":"left"}}  to={"/admin"}>
                  <button className="head-btn">Admin</button>
                </Link>
              }
        </div>  
        <div className="rightbarr">
            {user&&
            <>
              <Link to={"/user"}>
              <button className="nav-btn tor user-btn ">
                <BiUserCircle className="user-icon" />
              </button>
              </Link>
              </> }
              
              {(user||admin) &&<button className="logout-btn" style={{"paddingBottom":"15%","textAlign":"center"}} onClick={Logout}>
                Logout
              </button>}
              
           
            
            
        </div> 
      </nav>
    )
  }
  
  export default Header