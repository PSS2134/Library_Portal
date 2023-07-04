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
        <h1>Welcome to fiction Genre</h1>
      </div>
      {makegroup(genregroup, 3).map((row, rowno) => (
        <div className="grid" key={rowno}>
          {row.map((book) => (
            <Bookcard
              id={book.id}
              title={book.name}
              author={book.author}
              summary={book.summary}
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
