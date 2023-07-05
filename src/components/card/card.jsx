import "./card.scss";
import { data } from "../../data/data";

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
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card