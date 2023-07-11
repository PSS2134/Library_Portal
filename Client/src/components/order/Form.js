import React, { useState } from "react";
import "./Form.css";
import Navbar from "../navbar/navbar";

const FormElement = ({ updateUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    author: "",
    summary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Navbar updateUser={updateUser} />
      <div className="form-container">
        <form className="insideform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
            />
          </div>

          <div>
            <label htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>

          <button className="orderformbutton"type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormElement;
