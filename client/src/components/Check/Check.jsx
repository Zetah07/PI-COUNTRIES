import React from "react";
import { errorClosed } from "../../store/actions";
import Style from "./Check.module.css";
import { useDispatch } from "react-redux";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Check = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(errorClosed());
  };
  return (
    <div className={Style.container}>
      <div className={Style.target}>
        <div className={Style.item}>
          <button className={Style.button} onClick={handleClick}>
            <AiOutlineClose/>
          </button>
        </div>
        <div className={Style.text}>
          <h1 className={Style.h1} >Activity Created!</h1>
        </div>
        <div className={Style.icon}>
          <i>
            <FiCheckCircle />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Check;
