import React from "react";
import s from './Nav.module.css';
import img from '../../Assets/earth.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";


const Nav = ({ setForm }) => {
    return (
        <div className={s.container}>
            <div className={s.flex}>
                <Link to='/'>
                    <div className={s.logo}>
                        <img src={img} alt="logo" className={s.img} />
                        <h1 className={s.title}>PI Countries</h1>
                    </div>
                </Link>
                <Search />
                <button className={s.btn} onClick={() => setForm(true)} >
                    <span className={s.shadow}></span>
                    <span className={s.edge}></span>
                    <span className={s.front}>Create</span>
                </button>
            <div>
                <Link to='/about'>
                    <button className={s.btn} >
                        <span className={s.shadow}></span>
                        <span className={s.edge}></span>
                        <span className={s.front}>About</span>
                    </button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Nav;