import "./card.scss";
import { data } from "../../data/data";
import Rating from "../../assets/svg/rating.svg";

function Card() {

    console.log(data);

    return (
        <div className="container">
            <div className="wrapper">
                {
                   data && data.map((item, index) => {
                        return (
                            <div className="card">
                                <img src={item?.img} alt="" />
                                <div className="card-title">{item.title}</div>
                                <div className="card-rating"><img src={Rating} alt="rating" />{item.reting}</div>
                                <div className="card-old-price">{item.eski}</div>
                                <div className="card-current-price">{item.som}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card