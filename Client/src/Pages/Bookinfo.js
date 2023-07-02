import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/bookinfo.css";
import Books from "../Data/data";
function Bookinfo() {
  const { id } = useParams();
 console.log(id);
const filteredArray=Books.filter((book)=>{
        if(book.id==id)
        {
        return book;
        }
  })
// console.log(filteredArray[0]);
const book=filteredArray[0];
  const {name, genre, summary, author,url}=book
  const email=JSON.parse(localStorage.getItem('user')).email;

const postData=async()=>{
 const res= await fetch(`http://localhost:5000/api/add?email=${email}`,{
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(book),
 })
 const data=await res.json();

}


  return (
    <div className="bookinfo">
      <div className="left">
        <img
          className="bookimage"
          src={url}
          alt="book"
        />
      </div>
      <div className="right">
        <div className="center">
          <div className="titlecon">
            <h1 className="title">{name}</h1>
          </div>
          <div className="info">
            <h2>Language : English</h2>
            <h2>Pages : 230</h2>
            <h2>Author : {author}</h2>
            <h2>Genre : {genre}</h2>
            <h4>
              Summary: {summary}
            </h4>
            <div className="button">
              <button onClick={postData} className="cart">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookinfo;
