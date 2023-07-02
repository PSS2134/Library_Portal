import React from "react";
import Bookcard from "../../components/bookcard/Bookcard";
import "../../Styles/booklist.css";
import Navbar from "../../components/navbar/navbar";
function Booklist() {
  // function to break array of books into groups of given size
  function makegroup(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  const books=[
  {
    id: 1,
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    genre: "Competitive",
    url: "https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg",
    summary: "This book is often said to be the bible for Algorithms. The book has a lot of famous algorithms ranging from a variety of topics like Dynamic Programming, Greedy methods, to various advanced Graph Algorithms and even Multithreaded Algorithms, algorithms related to Number Theory and what not. ",
  },
  {
    id: 2,
    name: "Structural Analysis",
    author: "R C Hibbeler",
    genre: "Competitive",
    url: "https://3.bp.blogspot.com/-ijSwgH39zks/Uvpmw-CZUgI/AAAAAAAAD80/9mgR7zagcQw/s1600/Hibbeler+Structural+Analysis+8th-engineersdaily_Page_001.jpg",
    summary: " This book is intended to provide the student with a clear and thorough presentation of the theory and application of structural analysis as itapplies to trusses,beams,and frames.Emphasis is placed on developingthe student’s ability to both model and analyze a structure and toprovide realistic applications encountered in professional practice",
  },
  {
    id: 3,
    name: "Engineering Mechanics of Solids",
    author: "E P Popov",
    genre: "Competitive",
    url: "https://www.elsolucionario.me/wp-content/archivos/2018/02/engineering-mechanics-of-solids-egor-p-popov-1st-edition.jpeg",
    summary: "This book is a comprehensive, cross-referenced examination of engineering mechanics of solids. Traditional topics are supplemented by an exposure to several newly-emerging disciplines, such as the probabilistic basis for structural analysis, matrix methods, and plastic limit analysis.",
  },
  {
    id: 4,
    name: "GATE Electrical Engineering Vol 1",
    author: "R.K. Kanodia",
    genre: "Competitive",
    url: "https://content.kopykitab.com/ebooks/2016/06/7572/content/medium/page1.png",
    summary: "A compelling story set in the Deep South during the 1930s, addressing themes of racial injustice and moral courage.",
  },
]
  return (
    <div className="booklist">
    <Navbar/>
      <div className="head">
        <h1>Welcome to fiction Genre</h1>
      </div>
      {makegroup(books, 3).map((row, rowno) => (
        <div className="grid" key={rowno}>
          {row.map((book) => (
            <Bookcard id={book.id} title={book.name} author={book.author} summary={book.summary} genre={book.genre} url={book.url}/>
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