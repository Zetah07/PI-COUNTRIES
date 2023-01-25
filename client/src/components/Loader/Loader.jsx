import React from "react";
import s from './Loader.module.css'
import planet from '../../Assets/planet-earth.png'
// import { IoEarth } from "react-icons/io5";

const Loader = () => {
    return (
        <div className={s.container}>
            <div className={s.spinner}>
                <div className={s.inner}>
                <div className={s.flex}>
                    <img className={s.logo} src={planet} alt='tuki'/>
                    {/* <IoEarth/> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;