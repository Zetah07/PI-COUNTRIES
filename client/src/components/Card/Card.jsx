import React from "react";
import { Link } from "react-router-dom";
import Style from "./Card.module.css";

const Card = ({ id, flag, name, continent }) => {
  return (
    <Link to={`/home/${id}`}>
      <div className={Style.container}>
        <img src={flag} alt={name} className={Style.img} />
        <div className={Style.textContainer}>
          <h2 className={Style.name} >{name}</h2>
          <h3 className={Style.continent} >{continent}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
