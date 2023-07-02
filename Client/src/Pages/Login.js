import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
//We will be using React-toastify for pop up notofication, it is more styled and attractive version of alert()
//Install the library and read from npmjs.org
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function SignIn() {
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
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data == "user not found") {
        toast.error("Please SignUp first");
        navigate("/signup");
      } else if (data == "password incorrect") {
        toast.error("Please Enter Correct Password");
        navigate("/login");
      } else if (data == "user exists") {
        toast.success("LoggedIn Successfully");
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/library");
      }
    }
  };
  return (
    <div>
      <div className="body">
        <div className="card">
          <h1>LogIn</h1>
          <form>
            <p className="formlabel">Email</p>
            <input
              type="text"
              className="forminput"
              name="email"
              onChange={loginData}
            />
            <p className="formlabel">Password</p>
            <input
              type="text"
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
