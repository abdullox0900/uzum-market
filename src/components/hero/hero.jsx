import { useState } from 'react'
import "./hero.scss"
import Mirror from '../../assets/svg/mirror.svg'
import Person from '../../assets/svg/person.svg'
import Heart from '../../assets/svg/heart.svg'
import Bag from '../../assets/svg/bag.svg'
import Nasiya from '../../assets/images/Halol.png'
import Strelka from '../../assets/svg/strelka.svg'
import Uzum from '../../assets/svg/uzum.svg'
import Katalog from '../../assets/svg/katalog.svg'
import { content } from '../../localization/content'
import Modal from '../hero/modal/modal'





function Hero({ lang, setLang }) {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className="container">

            <div className='hero'>
                <div className="hero-left">
                    <a href="#">
                        <img src={Uzum} alt="" />
                    </a>
                </div>

                <div className="hero-center">
                    <button className='hero-btn__1'>
                        <img src={Katalog} alt="" />
                        <a href="#">Katalog</a>
                    </button>


                    <div className="input__button">
                        <input type="text" placeholder='Искать товары и категории' />
                        <button className='hero-btn__2'>
                            <img src={Mirror} alt="" />
                        </button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-person">
                        <img src={Person} alt="" />

                        <p className="open-modal" onClick={() => setModalActive(true)}>
                            {content[lang].kirish}
                        </p>
                        <Modal active={modalActive} setActive={setModalActive}>
                            <div className="modal-big">
                                <div className='title'>Введите номер телефона</div>
                                <div className='description'>Отправим смс с кодом подтверждения</div>
                                <form>
                                    <input className='modal__input' type="number" placeholder='+998 00 000 00 00' />
                                    <button className='modal__btn' type='submit'>Получить код</button>
                                </form>

                                <div className="footer__modal">
                                    <p>
                                        Авторизуясь, вы соглашаетесь c
                                    </p>
                                    <a href="#">политикой обработки персональных данных</a>

                                </div>

                            </div>


                        </Modal>


                    </div>
                    <div className="hero-heart">
                        <img src={Heart} alt="" />
                        <p>
                            {content[lang].saralangan}
                        </p>
                    </div>
                    <div className="hero-bag">
                        <img src={Bag} alt="" />
                        <p>
                            {content[lang].savat}
                        </p>
                    </div>

                </div>
            </div>


            <div className="themes">
                <div className="nasiya">
                    <img src={Nasiya} alt="" /><p>{content[lang].nasiya}</p>

                </div>
                <ul>
                    <li><a href="#">{content[lang].elect}</a></li>
                    <li><a href="#">{content[lang].maishiy}</a></li>
                    <li><a href="#">{content[lang].kiyim}</a></li>
                    <li><a href="#">{content[lang].poyabzal}</a></li>
                    <li><a href="#">{content[lang].aksessuar}</a></li>
                    <li><a href="#">{content[lang].goʻzallik}</a></li>
                    <li><a href="#">{content[lang].salomatlik}</a></li>
                    <li><a href="#">{content[lang].rozgor}</a></li>
                    <li><a href="#">{content[lang].qurilish}</a></li>
                    <li><a href="#">{content[lang].avtotovar}</a></li>
                    <li><a href="#">{content[lang].yana}
                        <img src={Strelka} alt="" />
                    </a></li>
                </ul>
            </div>




        </div >
    )
}

export default Hero
