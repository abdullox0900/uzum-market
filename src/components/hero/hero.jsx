import React from 'react'
import "./hero.scss"
import Mirror from '../../assets/svg/mirror.svg'
import Person from '../../assets/svg/person.svg'
import Heart from '../../assets/svg/heart.svg'
import Bag from '../../assets/svg/bag.svg'
import Nasiya from '../../assets/images/Halol.png'
import Strelka from '../../assets/svg/strelka.svg'
import Swiper from '../../assets/images/swiper.png'
import Logo from '../../assets/svg/site-logo.svg'





function Hero() {
    return (
        <div className="container">

            <div className='hero'>
                <div className="hero-left">
                    <a href="#">
                        <img src={Logo} alt="" />
                    </a>
                </div>

                <div className="hero-center">
                    <button className='hero-btn__1'>
                        <a href="#">Katalog</a>
                    </button>
                    <input type="text" placeholder='Искать товары и категории' />
                    <button className='hero-btn__2'>
                        <img src={Mirror} alt="" />
                    </button>
                </div>

                <div className="hero-right">
                    <div className="hero-person">
                        <img src={Person} alt="" />
                        <p>
                            Kirish
                        </p>
                    </div>
                    <div className="hero-heart">
                        <img src={Heart} alt="" />
                        <p>
                            Saralangan
                        </p>
                    </div>
                    <div className="hero-bag">
                        <img src={Bag} alt="" />
                        <p>
                            Savat
                        </p>
                    </div>

                </div>
            </div>


            <div className="themes">
                <div className="nasiya">
                    <img src={Nasiya} alt="" /><p>Halol nasiya</p>

                </div>
                <ul>
                    <li><a href="#">Elektronika</a></li>
                    <li><a href="#">Maishiy texnika</a></li>
                    <li><a href="#">Kiyim</a></li>
                    <li><a href="#">Poyabzallar</a></li>
                    <li><a href="#">Aksessuarlar</a></li>
                    <li><a href="#">Goʻzallik</a></li>
                    <li><a href="#">Salomatlik</a></li>
                    <li><a href="#">Uy-roʻzgʻor buyumlari</a></li>
                    <li><a href="#">Qurilish va taʼmirlash</a></li>
                    <li><a href="#">Avtotovarlar</a></li>
                    <li><a href="#">Yana
                        <img src={Strelka} alt="" />
                    </a></li>
                </ul>
            </div>




        </div>
    )
}

export default Hero
