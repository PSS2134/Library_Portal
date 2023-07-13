import "../../Styles/bookcard.css";
import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";

function Bookcard({ title, id, author, genre, summary, url }) {
  const readbtn = useRef(null);


 
  return (
    <div id="container">
      <Link to={`/library/${genre}/${id}`}>
      <div className="book-card">
        <div className="tution"><img className="bookimg" src={url}/></div>
        <span className="tag">{genre}</span>
        <div className="bookname">{title}</div>
        <p className="Summary">{summary}</p>
        {/* <Link to={`/library/${genre}/${id}`}>
          <button  ref={readbtn} id={id} genre={genre} className="readmore">
            Read More
          </button>
        </Link> */}
      </div>
      </Link>
    </div>
  );
}

export default Bookcard;
