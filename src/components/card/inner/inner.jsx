import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "./inner.scss"
import Oil1 from '../../../assets/images/Oil1.jpg'
import Oil2 from '../../../assets/images/Oil2.jpg'
import Oil3 from '../../../assets/images/Oil3.jpg'
import Oil4 from '../../../assets/images/Oil4.jpg'
import Oil5 from '../../../assets/images/Oil5.jpg'
import { baseUrl } from "../../../../config";
// import Star from '../../../assets/svg/star.svg'

const inner = () => {

    const settings = {
        customPaging: function (i) {
            let count = i + 1
            return (

                <img style={{

                }} src={baseUrl + "Oil" + count + ".jpg"} />

            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="container">
            <div className="header">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Все категории</a></li>
                    <li><a href="#">Продукты питания</a></li>
                    <li><a href="#">Бакалея</a></li>
                    <li><a href="#">Масла</a></li>
                </ul>
            </div>

            <div className="right">
                <div className="right-header__left">
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='#F5A623' /> </svg>
                    <p>
                        (467 оценок)
                    </p>
                    <span>Более 23000 заказов</span>
                </div>
                <div className="right-header__right">
                    <p>
                        В желания
                    </p>
                </div>

            </div>
            <Slider {...settings}>
                <div className="img-con">
                    <img src={Oil1} />
                </div>
                <div className="img-con">
                    <img src={Oil2} />
                </div>
                <div className="img-con">
                    <img src={Oil3} />
                </div>
                <div className="img-con">
                    <img src={Oil4} />
                </div>
                <div className="img-con">
                    <img src={Oil5} />
                </div>
            </Slider>

        </div>
    );


}

export default inner;
