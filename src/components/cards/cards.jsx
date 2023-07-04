import React from "react";
import "./cards.scss";

const Cards = ({ title, description, image }) => {
  return (
    <div className="container">
      <h2 className="summer-sale">Yozgi savdo</h2>
      <div className="cards">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};



export default Cards;
