import React from "react";
import Bookcard from "../../components/bookcard/Bookcard";
import "../../Styles/booklist.css";
function Booklist() {
  // function to break array of books into groups of given size
  function makegroup(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  const books = [
    { title: "Book 1", author: "Author 1", id: "1" },
    { title: "Book 2", author: "Author 2", id: "2" },
    { title: "Book 3", author: "Author 3", id: "3" },
    { title: "Book 3", author: "Author 3", id: "4" },
    { title: "Book 3", author: "Author 3", id: "5" },
    { title: "Book 3", author: "Author 3", id: "6" },
    { title: "Book 3", author: "Author 3", id: "7" },
    { title: "Book 3", author: "Author 3", id: "8" },
    { title: "Book 3", author: "Author 3", id: "9" },
    { title: "Book 3", author: "Author 3", id: "10" },
  ];
  return (
    <div className="booklist">
      <div className="head">
        <h1>Welcome to fiction Genre</h1>
      </div>
      {makegroup(books, 3).map((row, rowno) => (
        <div className="grid" key={rowno}>
          {row.map((book) => (
            <Bookcard key={book.id} name={book.title} author={book.author} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Booklist;
// {
/* <div className="grid" style={{ display: "flex", flexWrap: "wrap" }}>
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </div>
      <div className="grid" style={{ display: "flex", flexWrap: "wrap" }}>
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </div>
      <div className="grid" style={{ display: "flex", flexWrap: "wrap" }}>
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </div> */
// }
