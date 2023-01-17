/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import TitleWrite from "../Share/TitleWrite";
import s from "./LandingPage.module.css";
import '../Share/Continents.css'
import bg from "../../assets/stars.png";
import earth from "../../assets/earth.png";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";



const LandingPage = () => {
  let title = 'COUNTRIES PI'
  return (
    <div className={s.container}>
            <div className={s.left}>
                <div className={s.div}>
                    <TitleWrite className={s.title} title={title}>Countries PI</TitleWrite>
                    <p className={s.p}>
                        Welcome to my individual project about countries.
                    </p>
                    <Link to='/home'>
                        <button className='btn'>
                            <span className={s.span}>WELCOME</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={s.right}>
                <img className={s.bg} src={bg} alt="bg" />
                <img className={s.earth} src={earth} alt="earth" />
                <img className={s.cloud1} src={cloud1} alt="cloud1" />
                <img className={s.cloud2} src={cloud2} alt="cloud2" />
                <img className={s.cloud4} src={cloud3} alt="cloud3" />
                <img className={s.cloud3} src={cloud4} alt="cloud4" />

            </div>
        </div>
    )
}

export default LandingPage;