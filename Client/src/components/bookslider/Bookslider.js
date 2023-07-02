import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bookcard from "../bookcard/Bookcard";

function Bookslider() {
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
        <div>
          <Bookcard name="Book1" />
        </div>
        <div>
          <Bookcard name="Book2" />
        </div>
        <div>
          <Bookcard name="Book3" />
        </div>
        <div>
          <Bookcard name="Book4" />
        </div>
        <div>
          <Bookcard name="Book5" />
        </div>
        {/* Add more book items here */}
      </Slider>
    </div>
  );
}

export default Bookslider;
