import React from "react";
import Style from './LandingPage.module.css';
import '../Home/Continents.css';
import { Link } from 'react-router-dom';
import earth from '../../Assets/earth.png';
import cloud1 from '../../Assets/cloud1.png';
import cloud2 from '../../Assets/cloud2.png';
import cloud3 from '../../Assets/cloud3.png';
import cloud4 from '../../Assets/cloud4.png';
import bg from '../../Assets/bg.png';
import TitleWrite from '../Share/TitleWrite';

const LandingPage = () => {
    let title="Countries PI"
    return (
        <div className={Style.container}>
            <div className={Style.left}>
                <div className={Style.div}>
                    <TitleWrite className={Style.title} title={title}></TitleWrite>
                    <p className={Style.p}>
                        Welcome to my individual project about countries.<br />
                        In this project you will find current information of different countries from all over the world. <br />
                        Enjoy  {':)'}
                    </p>
                    <Link to='/home'>
                        <button className={Style.btn}>
                            <span className={Style.span}>START</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={Style.right}>
                <img className={Style.bg} src={bg} alt="bg" />
                <img className={Style.earth} src={earth} alt="earth" />
                <img className={Style.cloud1} src={cloud1} alt="cloud1" />
                <img className={Style.cloud2} src={cloud2} alt="cloud2" />
                <img className={Style.cloud4} src={cloud3} alt="cloud3" />
                <img className={Style.cloud3} src={cloud4} alt="cloud4" />

            </div>
        </div>
    )
}

export default LandingPage;