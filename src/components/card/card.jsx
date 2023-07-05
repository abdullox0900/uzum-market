import "./card.scss";
import { data } from "../../data/data";
import Rating from "../../assets/svg/rating.svg";

function Card() {

    console.log(data);

    return (
        <div className="container">
            <div className="wrapper">
                {
                    data.map((item, index) => {
                        return (
                            <div className="card">
                                <img src={item.img} alt="" />
                                <div>{item.title}</div>
                                <div className="card-rating"><img src={Rating} alt="rating" />{item.reting}</div>
                                <div>{item.eski}</div>
                                <div>{item.som}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card