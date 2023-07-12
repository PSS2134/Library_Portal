import "../../Styles/bookcard.css";
import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";

function Bookcard({ title, id, author, genre, summary, url }) {
  const readbtn = useRef(null);


 
  return (
    <div id="container">
      <div className="book-card">
        <img className="bookimg" src={url} alt="bookimg" />
        <span className="tag">{genre}</span>
        <div className="bookname">{title}</div>
        <p className="Summary">{summary}</p>
        <Link to={`/library/${genre}/${id}`}>
          <button  ref={readbtn} id={id} genre={genre} className="readmore">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bookcard;
