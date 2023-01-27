import React from "react";
import Style from './Check.module.css';
import img from '../../Assets/check.png'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Check = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(errorClose())
    }

    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <div className={Style.flex}>
                    <button className={Style.btn} onClick={handleClick}>X</button>
                </div>
                <div className={Style.title} >
                    <h1 className={Style.h1} >Activity Created!</h1>
                </div>
                <div className={Style.status}>
                    <img className={Style.img} src={img} alt="check" />
                </div>
            </div>
        </div>
    )
}

export default Check;