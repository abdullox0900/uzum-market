import React from "react";
import "./header.scss"
import Location from '../../assets/svg/location.svg'
import Flag from '../../assets/svg/flag.svg'

import { content } from "../../localization/content";

import { Select } from 'antd';


function Header({ lang, setLang }) {


    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="nav-left">
                        <img src={Location} alt="" />
                        <p>
                            {content[lang].city}
                            <span>Toshkent</span>
                        </p>
                        <a className="nav-a" href="#">{content[lang].punkt}</a>
                    </div>
                    <div className="nav-center">
                        <p>
                            {content[lang].dostavka}
                        </p>
                    </div>
                    <div className="nav-right">
                        <a href="#">{content[lang].savol_javoblar}</a>
                        <span className="nav-span__1">{content[lang].buyurtmalarim}</span>
                        <img src={Flag} alt="" />
                        {/* <Select
                            labelInValue
                            defaultValue={{
                                value: 'Оʻzbekcha',
                                label: 'Оʻzbekcha',
                            }}

                            style={{
                                width: 120,

                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'Русский',
                                    label: 'Русский',
                                },
                              

                            ]}
                        /> */}
                        <select className="Lang" onChange={(evt) => {
                            setLang(evt.target.value)
                        }}>

                            <option value="uz">O'zbekcha</option>
                            <option value="ru">Русский</option>


                        </select>

                    </div>
                </nav>

            </div>

        </header>
    )
}

export default Header