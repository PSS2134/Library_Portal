import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookcard from "../../components/bookcard/Bookcard";
import "./booklist.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";
import NotAvailable from "../../components/bookcard/Notavailable";

function Booklist({ updateUser,updateAdmin }) {
  const { genre } = useParams();
  const [booksData, setBooksData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  // this will fetch books acording to particular genre
  const genregroup = booksData.filter((book) => {
    if (book.genre === genre) {
      return book;
    }
  });
  // console.log(Object.values(genregroup[0])[1].toLowerCase());
  const filteredItems = genregroup.filter((book) => {
    return Object.values(book)[1].toLowerCase().includes(query.toLowerCase());
  });
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
  let oneliner = "";
  if (genre === "Fiction") {
    oneliner = "Where imagination thrives and reality takes a backseat";
  } else if (genre === "Competitive") {
    oneliner =
      "Where knowledge is the ultimate prize, and intellect becomes the battleground";
  } else if (genre === "Autobiography") {
    oneliner =
      "Personal stories that inspire, enlighten, and unveil the extraordinary journeys within";
  } else if (genre === "Others") {
    oneliner =
      "Explore uncharted worlds, unravel mysteries, and experience the endless possibilities of other books genres";
  }

 
  // function to break array of books into groups of given size
  function makegroup(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  return (
    <>
      {loading ? (
        <div className="loading">
          <HashLoader
            color={"green"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="booklist">
          <Navbar updateUser={updateUser} updateAdmin={updateAdmin} />
          <div className="head">
            <h1>Welcome to {genre} genre</h1>
            <p className="head-oneliner">{oneliner}</p>
          </div>
          <div
            style={{
              // width: "100%",
              backgroundColor: "white",
              padding: "0 35% 0 38%",
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="book-search"
              type="search"
              placeholder="Search Your Book"
              style={{
                width: "350px",
                height: "40px",
                marginleft: "300px",
                border: "3px #0E2954 solid",
                paddingLeft: "20px",
                borderRadius: "16px",
              }}
            />
          </div>
          {filteredItems.length?makegroup(filteredItems, 3).map((row, rowno) => (
            <div className="grid" key={rowno}>
              {row.map((book) => (
                
               book.Available?<Bookcard
                  updateUser={updateUser}
                  id={book.id}
                  title={book.name.slice(0, 18) + "..."}
                  author={book.author}
                  summary={book.summary && book.summary.slice(0, 100) + "..."}
                  genre={book.genre}
                  url={book.url}
                />:<NotAvailable  id={book.id}
                  title={book.name.slice(0, 18) + "..."}
                  
                  summary={book.summary && book.summary.slice(0, 100) + "..."}
                  genre={book.genre}
                  url={book.url}/>
              ))}
            </div>
          )):<h1 style={{"textAlign":"center","margin":"11.24vh","color":"red","fontSize":"2.5rem"}}>NO BOOK FOUND!</h1>}
      
          <Footer />
        </div>
      )}
    </>
  );
}
export default Booklist;
