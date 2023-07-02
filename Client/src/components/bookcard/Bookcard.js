import "../../Styles/bookcard.css";
import React,{useRef} from "react";
import { Link } from "react-router-dom";


function Bookcard({title,id,author,genre,summary,url}) {
  const readbtn=useRef(null);

//   const handleClick=(e)=>{
//     e.preventDefault();
//  console.log(readbtn.current);
//  //navigate to this id in bookinfo
//   }

  return (
    <div id="container">
      <div className="card">
        <img
          className="bookimg"
          src={url}
          alt="bookimg"
        />
        <span className="tag">{genre}</span>
        <div className="bookname">{title}</div>
        <p>
          {summary}
        </p>
        <Link to={`/library/${genre}/${id}`}><button ref={readbtn} id={id} genre={genre} className="readmore">Read More</button></Link>
      </div>
    </div>
  );
}

export default Bookcard;
