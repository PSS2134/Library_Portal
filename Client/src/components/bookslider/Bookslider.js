// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React,{useState,useEffect} from "react";
import Bookcard from "../bookcard/Bookcard";
import '../recommended/muststyles.css'

function Bookslider() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/e54f5fb5-64df-4584-9fb9-b8d50beb97a3")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="book-slider-container">
      <Slider {...settings}>
      {books.map((book) => (
          <div key={book.id}>
            <div class="book-cardr">
              <img src={book.url} alt="Book 1"></img>
              <h3>{book?book.name:""}</h3>
              <p>{book?book.author:""}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Bookslider;
