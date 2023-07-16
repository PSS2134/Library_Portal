import React, { useState, useRef } from "react";
import "./Form.css";
import Navbar from "../navbar/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormElement = ({ updateUser }) => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    yourName: "",
    bookName: "",
    genre: "",
    author: "",
  });
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const email = JSON.parse(localStorage.getItem("user")).email;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res= await fetch(`https://backendlibrary.onrender.com/api/order?email=${email}`, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data)
      {
        // console.log("New Order");
        toast.success("Order Sent!");
        navigate("/user");
      }
      console.log(data);
      input1.current.value = "";
      input2.current.value = "";
      input3.current.value = "";
      input4.current.value = "";
     
    } catch (error) {
      console.error("Order failed", error);
    }
  };

  return (
    <>
      <Navbar updateUser={updateUser} />
      <div className="form-back">
      <div className="form-container">
        <h1 className="order-heading1">Order Form</h1>
        <form className="insideform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              ref={input1}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Book Name:</label>
            <input
              type="text"
              id="name"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              ref={input2}
              required
            />
          </div>

          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              ref={input3}
              required
            />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              ref={input4}
              required
            />
          </div>
          <button className="orderformbutton" type="submit">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default FormElement;
