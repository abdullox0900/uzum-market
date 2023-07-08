import React from "react";
import './footer.scss';
import apple from "../../assets/appStore.svg"
import google from "../../assets/googlePlay.svg"
import instagram from "../../assets/instagram.svg"
import telegram from "../../assets/telegram.svg"
import youtube from "../../assets/youtube.svg"
import facebook from "../../assets/facebook.svg"

function Footer() {

    return (
      <div className="container">
        <div className="foot">
            <div className="foot__about-us">
                <h4>Biz haqimizda</h4>
                <a href="#"><p>Topshirish punktlari</p></a>
                <a href="#"><p>Vakansiyalar</p></a>
            </div>
            <div className="foot__users">
                <h4>Foydalanuvchilarga</h4>
                <a href="#"><p>Biz bilan bog'lanish</p></a>
                <a href="#"><p>Savol-javob</p></a>
            </div>
            <div className="foot__businessmen">
                <h4>Tadbirkorlarga</h4>
                <a href="#"><p>Uzumda soting</p></a>
                <a href="#"><p>Sotuvchi kabinetiga kirish</p></a>
            </div>
            <div className="foot__download">
                <h4 className="app">Ilovani yuklab olish</h4>
                <div className="footer-icon-wrapper">
                <a href="#" className="apple footer-icon-wrap"> <img src={apple} alt="apple logo" />App Store</a>
                <a href="#" className="google footer-icon-wrap"> <img src={google} alt="google play logo" />Google Play</a>
                </div>
                <h4 className="social">Uzum ijtimoiy tarmoqlarda</h4>

                <a href="https://www.instagram.com/uzum.market">
                    <img src={instagram} alt="instagram logo" /></a>
                <a href="https://t.me/uzum_market"><img src={telegram} alt="telegram logo" /></a>
                <a href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"><img src={youtube} alt="youtube logo" /></a>
                <a href="https://www.facebook.com/uzummarket"><img src={facebook} alt="facebook logo" /></a>
            </div>
        </div>
        <div className="footer__end">
            <div className="footer__end left">
                <span><a href="#">Maxfiylik kelishuvi</a></span>
                <span><a href="#">Foydalanuvchi kelishuvi</a></span>
            </div>
            <div className="footer__end right">
                <span>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>
            </div>
        </div>
      </div>
    )
  }

  export default Footer