import "../Styles/bookcard.css";
import React from "react";

function Bookcard(props) {
  return (
    <div id="container">
      <div className="card">
        <img
          className="bookimg"
          src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000"
          alt="bookimg"
        />
        <span className="tag">Nature</span>
        <div className="bookname">{props.name}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt
          temporibus quaerat est necessitatibus assumenda sunt non nam nihil.
          Rem?
        </p>
        <button className="readmore">Read More</button>
      </div>
    </div>
  );
}

export default Bookcard;
