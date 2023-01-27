import React from "react";
import Style from './Loader.module.css'
import planet from '../../Assets/planet-earth.png'
// import { IoEarth } from "react-icons/io5";

const Loader = () => {
    return (
        <div className={Style.container}>
            <div className={Style.spinner}>
                <div className={Style.inner}>
                <div className={Style.flex}>
                    <img className={Style.logo} src={planet} alt='tuki'/>
                    {/* <IoEarth/> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;