import React from "react";
import { Link } from "react-router-dom";
import Style from './Card.module.css';
import '../Home/Continents.css'

const Card = ({ id, flag, name, continent }) => {
    return (
        <Link to={`/home/${id}`}>
            <div className={Style.container}>
                <img src={flag} alt={name} className={Style.img} />
                <div className={Style.textBox}>
                    <h3 className={Style.name}>{name}</h3>
                    <div className={continent.split(' ')[0]} >
                        <p className={Style.continent}>{continent}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;