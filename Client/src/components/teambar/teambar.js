import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../header/header.css'


function Teambar({updateUser,updateAdmin }) {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const Logout = () => {
    toast.success("Logged Out Successfully");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/");
    const user = JSON.parse(localStorage.getItem("user"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    updateAdmin(admin);
    updateUser(user);
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
        <div className="middlebarr team-middlebarr" style={{"marginLeft":"-4%"}}>
            <Link to={'/'}><button className="head-btn">Home</button></Link>
            <Link to={"/team"}><button className="nav-btn">Team</button></Link>
        </div>  
        <div className="rightbarr">
        {
          user && <Link to={"/user"} style={{"textDecoration":"none"}}>
              <button className="nav-btn tor user-btn ">
                <BiUserCircle className="user-icon" />
              </button>
              </Link>
        }
            {(admin&&admin.email)||(user && user.email) ?
            <>
              
              <button className="logout-btn" onClick={Logout}>
                Logout
              </button>
            </>  
            :
            <></>
            }
            
        </div> 
      </nav>
    )
  }
  
  export default Teambar