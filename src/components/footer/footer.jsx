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
                <p>Topshirish punktlari</p>
                <p>Vakansiyalar</p>
            </div>
            <div className="foot__users">
                <h4>Foydalanuvchilarga</h4>
                <p>Biz bilan bog'lanish</p>
                <p>Savol-javob</p>
            </div>
            <div className="foot__businessmen">
                <h4>Tadbirkorlarga</h4>
                <p>Uzumda soting</p>
                <p>Sotuvchi kabinetiga kirish</p>
            </div>
            <div className="foot__download">
                <h4>Ilovani yuklab olish</h4>
                <span className="apple"> <img src={apple} alt="apple logo" />App Store</span>
                <span className="google"> <img src={google} alt="google play logo" />Google Play</span>
                <h4>Uzum ijtimoiy tarmoqlarda</h4>

                {/* img larni a tegiga o'rash //  razmerlarini to'g'irlash kerak */}
                <img src={instagram} alt="instagram logo" />
                <img src={telegram} alt="telegram logo" />
                <img src={youtube} alt="youtube logo" />
                <img src={facebook} alt="facebook logo" />
            </div>
        </div>
      </div>
    )
  }
  
  export default Footer