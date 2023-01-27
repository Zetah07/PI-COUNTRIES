import React from "react";
import Style from './Nav.module.css';
import img from '../../Assets/earth.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";


const Nav = ({ setForm }) => {
    return (
        <div className={Style.container}>
            <div className={Style.flex}>
                <Link to='/'>
                    <div className={Style.logo}>
                        <img src={img} alt="logo" className={Style.img} />
                        <h1 className={Style.title}>PI Countries</h1>
                    </div>
                </Link>
                <Search />
                <button className={Style.btn} onClick={() => setForm(true)} >
                    <span className={Style.shadow}></span>
                    <span className={Style.edge}></span>
                    <span className={Style.front}>Create</span>
                </button>
            <div>
                <Link to='/about'>
                    <button className={Style.btn} >
                        <span className={Style.shadow}></span>
                        <span className={Style.edge}></span>
                        <span className={Style.front}>About</span>
                    </button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Nav;