import React from "react";
import Abhi from './2.jpg';
import Priyansh from './3.jpg';
import Vashu from './1.jpg';
import aryan from './4.jpg';
import "./Team.css";

function Team_card() {
  return (
    <div className="single-card">
        <div className="single-card-image">
            <img src={Vashu}/>
        </div>
    </div>
  )
}

export default Team_card