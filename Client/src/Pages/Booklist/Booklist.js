import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookcard from "../../components/bookcard/Bookcard";
import "../../Styles/booklist.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";

function Booklist({ updateUser }) {
  const { genre } = useParams();
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  // this will fetch books acording to particular genre
  const genregroup = booksData.filter((book) => {
    if (book.genre === genre) {
      return book;
    }
  });

  useEffect(() => {
    fetch("https://mocki.io/v1/5fe99cc7-0e42-46f3-a511-5a18c0abd765")
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
            color={"#F37A24"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="booklist">
          <Navbar updateUser={updateUser} />
          <div className="head">
            <h1>Welcome to {genre} genre</h1>
            <p className="head-oneliner">{oneliner}</p>
          </div>
          {makegroup(genregroup, 3).map((row, rowno) => (
            <div className="grid" key={rowno}>
              {row.map((book) => (
                <Bookcard
                  updateUser={updateUser}
                  id={book.id}
                  title={book.name.slice(0, 18) + "..."}
                  author={book.author}
                  summary={book.summary && book.summary.slice(0, 100) + "..."}
                  genre={book.genre}
                  url={book.url}
                />
              ))}
            </div>
          ))}
          <Footer />
        </div>
      )}
    </>
  );
}
export default Booklist;
