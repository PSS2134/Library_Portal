import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookcard from "../../components/bookcard/Bookcard";
import "./booklist.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";

function Booklist({ updateUser }) {
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
    fetch("https://mocki.io/v1/543bcd3a-e8aa-46ac-9279-0289293acfcd")
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

          <div
            style={{
              width: "100%",
              backgroundColor: "#030c40",
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
                border: "2px black solid",
                paddingLeft: "20px",
                borderRadius: "16px",
              }}
            />
          </div>
         
          ))}
          <Footer />
        </div>
      )}
    </>
  );
}
export default Booklist;
