import "./recommended.css";
// import { Carousel } from 'react-responsive-carousel';
// import React,{useState,useEffect} from "react";
export default function Recommended() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("https://mocki.io/v1/e54f5fb5-64df-4584-9fb9-b8d50beb97a3")
  //     .then((response) => response.json())
  //     .then((data) => setBooks(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
  <div className="recom" id="4"> 
    <h1>Recommended Books</h1>
    <div className="recommended">
      <div class="book-cardr">
        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647263154l/33154385.jpg" alt="Book 1"></img>
        <h3>Atomic Habits</h3>
        <p>James Clear</p>
      </div>
      
      <div class="book-cardr">
        <img src="https://prodimage.images-bn.com/pimages/9781435159631_p0_v1_s1200x630.jpg" alt="Book 2"></img>
        <h3>Pride and Prejudice </h3>
        <p>Jane Austen</p>
      </div>
      
      <div class="book-cardr">
        <img src="https://yogiimpressions.com/image/cache/PON_01__01808-800x800-800x800.jpg" alt="Book 3"></img>
        <h3>The Power of now</h3>
        <p>Echart Tolle</p>
      </div>
      
      <div class="book-cardr">
        <img src="https://imgv2-2-f.scribdassets.com/img/word_document/206713254/original/216x287/56d85ceb13/1688148750?v=1" alt="Book 4"></img>
        <h3>Rich Dad Poor Dad</h3>
        <p>Robert T. Kyosaki</p>
      </div>
      
  {/* <Carousel
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    infiniteLoop={true}
    showStatus={false}
  > */}
    {/* {books.map((book) => (

          <div key={book.id}>
            <div class="book-cardr">
              <img src={book.url} alt="Book 1"></img>
              <h3>{book?book.name:""}</h3>
              <p>{book?book.author:""}</p>
              <p>{book.summary}</p>
            </div>
          </div>
        ))} */}
  {/* </Carousel> */}
    </div>
  </div> 
  );
}




