import React from "react";
import "./header.scss"
import Location from '../../assets/svg/location.svg'
import Flag from '../../assets/svg/flag.svg'

import { Select } from 'antd';


function Header() {

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
                            Shahar:
                            <span>Toshkent</span>
                        </p>
                        <a className="nav-a" href="#">Topshirish punktlari</a>
                    </div>
                    <div className="nav-center">
                        <p>
                            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
                        </p>
                    </div>
                    <div className="nav-right">
                        <a href="#">Savol-javoblar</a>
                        <span className="nav-span__1">Buyurtmalarim</span>
                        <img src={Flag} alt="" />
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'lucy',
                                label: 'Lucy (101)',
                            }}
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'uz',
                                    label: 'Uzbekistan',
                                },
                                {
                                    value: 'ru',
                                    label: 'Rossian',
                                },
                            ]}
                        />
                    </div>
                </nav>

            </div>

        </header>
    )
}

export default Header