import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/bookinfo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Bookinfo() {
  const { id } = useParams();
  const [booksData, setBooksData] = useState([]);
  // this will fetch books acording to particular genre

  useEffect(() => {
    fetch("https://mocki.io/v1/e54f5fb5-64df-4584-9fb9-b8d50beb97a3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooksData(data);
      });
  }, []);

  // console.log(id);
  console.log(booksData);
  const filteredArray = booksData.filter((book) => {
    // console.log("hello")
    if (book.id == id) {
      return book;
    }
  });
  const book = filteredArray[0];
  console.log(filteredArray);
  // const { name, genre, summary, author, url } = book;
  const email = JSON.parse(localStorage.getItem("user")).email;

  const postData = async () => {
    const res = await fetch(`http://localhost:5000/api/add?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await res.json();
    if (data.message == "greater than 2") {
      toast.warn("You already have 2 books to be issued");
    } else if (data.message == "new Added") {
      toast.success(`Congratulations! on adding your first book`);
    } else {
      toast.success(`${data.title} added successfully`);
    }
  };
  // console.log(book.url);
  return (
    <>
      {book && (
        <>
          <Navbar />
          <div className="bookinfo">
            <div className="left">
              <img className="bookimage" src={book.url} alt="book" />
            </div>
            <div className="right">
              <div className="center">
                <div className="titlecon">
                  <h1 className="title">{book.name}</h1>
                </div>
                <div className="info">
                  <h2>Language : English</h2>
                  <h2>Author : {book.author}</h2>
                  <h2>Genre : {book.genre}</h2>
                  <h4>
                    Summary: {book.summary ? book.summary : "Nothing to Show"}
                  </h4>
                  <div className="button">
                    <button onClick={postData} className="cart">
                      Issue Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Bookinfo;
