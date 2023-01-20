import React from "react";
import { Link } from "react-router-dom";
import s from './Card.module.css';
import '../Home/Continents.css'

const Card = ({ id, flag, name, continent }) => {
    return (
        <Link to={`/home/${id}`}>
            <div className={s.container}>
                <img src={flag} alt={name} className={s.img} />
                <div className={s.textBox}>
                    <h3 className={s.name}>{name}</h3>
                    <div className={continent.split(' ')[0]} >
                        <p className={s.continent}>{continent}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;