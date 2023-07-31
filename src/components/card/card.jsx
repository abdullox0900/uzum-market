import {useEffect, useState} from 'react'

import "./card.scss";
import { data } from "../../data/data";
import Rating from "../../assets/svg/rating.svg";
import Heart from "../../assets/svg/heart-icon.svg";
import Cart from "../../assets/svg/cart.svg";
import Fan from '../../assets/images/fan.jpg'


function Card() {
  // console.log(data);

  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://64c510e7c853c26efada7299.mockapi.io/product/product')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        {data &&
          data.map((item, index) => {
            return (
              <div className="card">
                <img src={item?.image} alt="" />
                <button className="heart"><img src={Heart} alt="heart" /></button>
                <div className="card-body">
                  <div className="card-title">{item.name}</div>
                  <div className="card-rating">
                    <img src={Rating} alt="rating" />
                    {item.rating}
                  </div>
                  <div className="card-old-price">{item.old}</div>
                  <div className="card-current-price">{item.new_price}<a href="#"><img className="card-cart" src={Cart} alt="cart"/></a></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
