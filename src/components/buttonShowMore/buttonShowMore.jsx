import Card from "antd/es/card/Card";
import React, { useState } from "react";
import "./buttonShowMore.scss";
import { Route } from "react-router-dom";
import { data } from "../../data/data";
import Rating from "../../assets/svg/rating.svg";
import Heart from "../../assets/svg/heart-icon.svg";
import Cart from "../../assets/svg/cart.svg";
import { content } from "../../localization/content";

const ButtonShowMore = ({ lang, setLang }) => {
  const [showCards, setShowCards] = useState(false);

  const handleShowMore = () => {
    setShowCards(true);
  };

  return (
    <div className="container">
      <button className="show-more" onClick={handleShowMore}>
        {content[lang].yana_20}
      </button>
      {showCards && (
        <div>
          <div className="wrapper">
            {data &&
              data.map((item, index) => {
                return (
                  <div className="card">
                    <img src={item?.img} alt="" />
                    <button className="heart">
                      <img src={Heart} alt="heart" />
                    </button>
                    <div className="card-body">
                      <div className="card-title">{item.title}</div>
                      <div className="card-rating">
                        <img src={Rating} alt="rating" />
                        {item.reting}
                      </div>
                      <div className="card-old-price">{item.eski}</div>
                      <div className="card-current-price">
                        {item.som}
                        <a href="#">
                          <img className="card-cart" src={Cart} alt="cart" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonShowMore;
