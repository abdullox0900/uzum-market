import "./card.scss";
import { data } from "../../data/data";
import Rating from "../../assets/svg/rating.svg";
// import Heart from "../../assets/svg/heart-icon.svg";
import Cart from "../../assets/svg/cart.svg";

function Card() {
  console.log(data);

  return (
    <div className="container">
      <div className="wrapper">
        {data &&
          data.map((item, index) => {
            return (
              <div className="card">
                <img src={item?.img} alt="" />
                {/* <img className="heart" src={Heart} alt="heart" /> */}
                <div className="card-body">
                  <div className="card-title">{item.title}</div>
                  <div className="card-rating">
                    <img src={Rating} alt="rating" />
                    {item.reting}
                  </div>
                  <div className="card-old-price">{item.eski}</div>
                  <div className="card-current-price">{item.som}<a href="#"><img className="card-cart" src={Cart} alt="cart"/></a></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
