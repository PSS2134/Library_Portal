import React from "react";
import "../Styles/bookinfo.css";
function Bookinfo() {
  return (
    <div className="bookinfo">
      <div className="left">
        <img
          className="bookimage"
          src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000"
          alt="book"
        />
      </div>
      <div className="right">
        <div className="center">
          <div className="titlecon">
            <h1 className="title">The Merchant Of Venice</h1>
          </div>
          <div className="info">
            <h2>Language : English</h2>
            <h2>Pages : 230</h2>
            <h2>Author : Abhishek Gupta</h2>
            <h2>Genre : Nature</h2>
            <h4>
              Context : Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Est labore quaerat nesciunt qui nisi numquam, atque deserunt
              quod expedita, commodi incidunt dolores. Voluptates cum adipisci
              sequi consequuntur fugit iusto vel, ab, quaerat rerum asperiores
              iste maiores perspiciatis dolor ratione atque libero reprehenderit
              tenetur, voluptatem pariatur necessitatibus fugiat labore! Nulla
              deleniti accusamus culpa asperiores, enim doloremque excepturi? At
              ipsa autem eius, culpa ducimus beatae quasi aliquid officia sequi
              quae quod maxime, quis distinctio, non earum et saepe odio
              provident! Debitis voluptates, suscipit ullam rerum aliquid
              possimus, vero ad, perferendis ab voluptate doloribus consequuntur
              neque nemo officiis laborum amet reiciendis pariatur error.
            </h4>
            <div className="button">
              <button className="cart">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookinfo;
