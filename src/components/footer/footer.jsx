import React from "react";
import './footer.scss';
import apple from "../../assets/appStore.svg"
import google from "../../assets/googlePlay.svg"
import instagram from "../../assets/instagram.svg"
import telegram from "../../assets/telegram.svg"
import youtube from "../../assets/youtube.svg"
import facebook from "../../assets/facebook.svg"
import { content } from "../../localization/content"

function Footer({lang, setLang}) {

    return (
      <div className="container">
        <div className="foot">
            <div className="foot__about-us">
                <h4>{content[lang].biz_haqimizda}</h4>
                <a href="#"><p>{content[lang].topshirish_punktlari}</p></a>
                <a href="#"><p>{content[lang].vakansiya}</p></a>
            </div>
            <div className="foot__users">
                <h4>{content[lang].foydalanuvchilarga}</h4>
                <a href="#"><p>{content[lang].aloqa}</p></a>
                <a href="#"><p>{content[lang].savol_javob}</p></a>
            </div>
            <div className="foot__businessmen">
                <h4>{content[lang].tadbirkorlarga}</h4>
                <a href="#"><p>{content[lang].uzumda_soting}</p></a>
                <a href="#"><p>{content[lang].sotuvchi_kabineti}</p></a>
            </div>
            <div className="foot__download">
                <h4 className="app">{content[lang].ilovani_yuklash}</h4>
                <div className="footer-icon-wrapper">
                <a href="#" className="apple footer-icon-wrap"> <img src={apple} alt="apple logo" />App Store</a>
                <a href="#" className="google footer-icon-wrap"> <img src={google} alt="google play logo" />Google Play</a>
                </div>
                <h4 className="social">{content[lang].ijtimoiy_tarmoqlar}</h4>

                <a href="https://www.instagram.com/uzum.market">
                    <img src={instagram} alt="instagram logo" /></a>
                <a href="https://t.me/uzum_market"><img src={telegram} alt="telegram logo" /></a>
                <a href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"><img src={youtube} alt="youtube logo" /></a>
                <a href="https://www.facebook.com/uzummarket"><img src={facebook} alt="facebook logo" /></a>
            </div>
        </div>
        <div className="footer__end">
            <div className="footer__end left">
                <a href="#">{content[lang].maxfiylik}</a>
                <a href="#">{content[lang].foydalanuvchi_kelishuvi}</a>
            </div>
            <div className="footer__end right">
                <span>{content[lang].licence}</span>
            </div>
        </div>
      </div>
    )
  }

  export default Footer