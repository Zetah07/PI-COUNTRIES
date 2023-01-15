import React from "react";
import { useDispatch } from "react-redux";
import { errorClosed } from "../../store/actions";
import Style from "./Errors.module.css";
import { TiTimes } from "react-icons/ti";
import img from "../../assets/earth-ico.png";

const Errors = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(errorClosed());
  };
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.flex}>
          <button className={Style.button} onClick={handleClick}>
            <TiTimes />
          </button>
        </div>
        <div className={Style.title}>
          <h1 className={Style.text}>
            Sorry, we can't find what you are looking for
          </h1>
        </div>
        <div className={Style.status}>
          <h2 className={Style.h2}>4</h2>
          <img className={Style.icon} src={img} alt="error" />
          <h2 className={Style.h2}>4</h2>
        </div>
      </div>
    </div>
  );
};

export default Errors;
