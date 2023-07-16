import React, { useState, useEffect } from "react";
import "../Styles/Signup.css";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//We will be using React-toastify for pop up notofication, it is more styled and attractive version of alert()
//Install the library and read from npmjs.org
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  // const [username, setUsername] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    contact: "",
    room: "",
    course: "",
    year: "",
  });
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.contact ||
      !data.confirm_password ||
      !data.course ||
      !data.year ||
      !data.room
    ) {
      toast.warning("Please Fill the Data");
    }
    if (data.password != data.confirm_password) {
      toast.warn("Password does not match");
    } else {
      try {
        const res = await fetch("https://backendlibrary.onrender.com/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const newres = await res.json();
        console.log(newres);
        if (newres == "user exists") {
          toast.error("Id already exist, Please Login");
          navigate("/login");
        } else {
          toast.success("Signed Up successfully");
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //   const handleDatanew=(e) => {
  //  console.log(e.target.name);
  //   }

  // console.log(dataname);
  return (
    <div className="signup-outer"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "110vh",
        overflowY: "hidden",
        backgroundColor: "#021a42",
      }}
    >
      <form
        className="signup-card"
        style={{
          width: "50%",
          backgroundColor: "#F5F5F5",
          padding: "1.8% 1% 1.5% 1%",
          margin: "2%",
          borderRadius: "10px",
          boxShadow: "8px 8px 8px black",
        }}
      >
        <h1
          className="text-4xl font-bold"
          style={{
            textAlign: "center",
            padding: "0 4% 4% 0",
            color: "#0E2954",
            fontFamily: "Poppins",
          }}
        >
          SignUp
        </h1>
        <div className="" style={{ display: "flex", alignContent: "center" }}>
          <div
            className="signup-card-content"
            style={{ padding: "0 25% 0 3%" }}
          >
            <p className="signup-label"> Name </p>
            <input
              name="name"
              onChange={handleData}
              className="signup-input"
              type="text"
            />
          </div>
          <div className="signup-card-content">
            <p className="signup-label"> Contact </p>
            <input
              name="contact"
              onChange={handleData}
              className="signup-input"
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            className="signup-card-content"
            style={{ padding: "0 16% 0 3%" }}
          >
            <p className="signup-label">Course</p>
            {/* <inputonChange={handleData} className="signup-input" type="text"/> */}
            <select
              onChange={handleData}
              name="course"
              style={{ width: "100%", margin: "20% 0" }}
              className="signup-input"
            >
              <option selected="true" disabled="disabled">
                Select Course
              </option>
              <option>BTech</option>
              <option>MTech</option>
              <option>PHD</option>
            </select>
          </div>
          <div
            className="signup-card-content"
            style={{ padding: "0 2% 0 20%" }}
          >
            <p className="signup-label"> Year </p>
            {/* <input className="signup-input" type="password"/> */}
            <select
              onChange={handleData}
              style={{ width: "100%", margin: "20% 40% 20% 0" }}
              className="signup-input"
              name="year"
            >
              <option selected="true" disabled="disabled">
                Select Year
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            className="signup-card-content"
            style={{ padding: "0 25% 0 3%" }}
          >
            <p className="signup-label">Room No</p>
            <input
              name="room"
              onChange={handleData}
              className="signup-input"
              type="text"
            />
          </div>
          <div className="signup-card-content">
            <p className="signup-label">Email </p>
            <input
              name="email"
              onChange={handleData}
              className="signup-input"
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            className="signup-card-content"
            style={{ padding: "0 25% 0 3%" }}
          >
            <p className="signup-label">Password</p>
            <input
              name="password"
              onChange={handleData}
              className="signup-input"
              type="password"
            />
          </div>
          <div className="signup-card-content">
            <p className="signup-label">Confirm Password</p>
            <input
              name="confirm_password"
              onChange={handleData}
              className="signup-input"
              type="password"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="signup-btn bg-orange-600 "
          type="submit"
        >
          Register
        </button>
        <p className="formfoot">
          Already Have an Account? <a href="/login">Please Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
