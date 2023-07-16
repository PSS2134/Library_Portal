import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

//We will be using React-toastify for pop up notofication, it is more styled and attractive version of alert()
//Install the library and read from npmjs.org
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function SignIn({ updateUser,updateAdmin }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  let name, value;
  const loginData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const Login = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      toast.warning("Please Fill the Data");
    } else {
      const res = await fetch("https://backendlibrary.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if(data=="admin success")
      {
        
        localStorage.removeItem("user");
        const user= JSON.parse(localStorage.getItem("user"));
        updateUser(user);
        updateAdmin(userData);
        toast.success(" Welcome Admin!")
        
        navigate("/admin");
      }
    if(data=="admin wrong password")
    {
      toast.error("Admin wrong password");
      navigate("/login")
    }
      if (data == "user not found") {
        toast.error("Please SignUp first");
        navigate("/signup");
      } else if (data == "password incorrect") {
        toast.error("Please Enter Correct Password");
        navigate("/login");
      } else if (data == "user exists") {
        toast.success("LoggedIn Successfully");
        updateUser(userData);
        navigate("/library");
      }
    }
  };
  return (
    <div>
      <div className="body">
        <div className="login-card">
          <h1>LogIn</h1>
          <form>
            <p className="formlabel">Email</p>
            <input
              placeholder="user@gmail.com"
              type="text"
              className="forminput"
              name="email"
              onChange={loginData}
            />
            <p className="formlabel">Password</p>
            <input
              placeholder="********"
              type="password"
              className="forminput"
              name="password"
              onChange={loginData}
            />
            <button className="formbtn" onClick={Login}>
              Submit
            </button>
            <p className="formfoot">
              Don't Have an Account? <a href="/signup">Please Signup</a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default SignIn;
