import React from "react";
import { useParams } from "react-router-dom";
import Bookcard from "../../components/bookcard/Bookcard";
import "../../Styles/booklist.css";
import Navbar from "../../components/navbar/navbar";
import Books from "../../Data/data";
function Booklist() {
  const { genre } = useParams();
  // this will fetch books acording to particular genre
  const genregroup = Books.filter((book) => {
    if (book.genre === genre) {
      return book;
    }
  });
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
    <div className="booklist">
      <Navbar />
      <div className="head">
        <h1>Welcome to {genre} genre</h1>
        <p className="head-oneliner">{oneliner}</p>
      </div>
      {makegroup(genregroup, 3).map((row, rowno) => (
        <div className="grid" key={rowno}>
          {row.map((book) => (
            <Bookcard
              id={book.id}
              title={book.name.slice(0, 18) + "..."}
              author={book.author}
              summary={book.summary.slice(0, 100) + "..."}
              genre={book.genre}
              url={book.url}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default Booklist;
