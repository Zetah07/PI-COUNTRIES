import React from "react";
import s from './Check.module.css';
import img from '../../Assets/check.png'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Check = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(errorClose())
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.flex}>
                    <button className={s.btn} onClick={handleClick}>X</button>
                </div>
                <div className={s.title} >
                    <h1 className={s.h1} >Activity Created!</h1>
                </div>
                <div className={s.status}>
                    <img className={s.img} src={img} alt="check" />
                </div>
            </div>
        </div>
    )
}

export default Check;