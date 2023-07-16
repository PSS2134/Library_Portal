import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/bookinfo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";


function Bookinfo({ updateUser ,updateAdmin}) {
  const { id } = useParams();
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // this will fetch books acording to particular genre

  useEffect(() => {
    fetch("https://backendlibrary.onrender.com/api/databooks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooksData(data);
      });
      setTimeout(() => {
        setLoading(false);
      }, 1250);
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
  book && console.log(book.Available);
  // const { name, genre, summary, author, url } = book;
  const user = JSON.parse(localStorage.getItem("user"));
  let email;
  if(user){
    email=user.email;
  }
  const admin = JSON.parse(localStorage.getItem("admin"));

  const postData = async () => {
    
    const res = await fetch(`https://backendlibrary.onrender.com/api/add?email=${email}`, {
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
      window.location.reload();
    } else {
      toast.success(`${data.title} added successfully`);
      window.location.reload()
    }
  };
 
    return (
    <>
    {loading?
    <div className="loading">
    <HashLoader
      color={"green"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  :
    <>
      {book && (
        <>
          <Navbar updateUser={updateUser} updateAdmin={updateAdmin} />
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
                  <h4>Summary: {book.summary}</h4>
                  {admin?<></>:
                    <div className="button">
                    {book.Available? <button onClick={postData} className="cart">
                        Issue Book
                      </button>:<button  className="cart1" onClick={()=>{
                      toast.error("Not Available Currently")
                      }}>
                        Not Available
                      </button>}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
}
</>
  );
}

export default Bookinfo;
