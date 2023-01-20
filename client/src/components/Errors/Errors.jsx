import React from "react";
import s from './Errors.module.css';
import img from '../../Assets/earth.png'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Errors = () => {

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
                    <h1 className={s.h1} >Not Found</h1>
                </div>
                <div className={s.status}>
                    <h2 className={s.h2}>4</h2>
                    <img className={s.img} src={img} alt="error" />
                    <h2 className={s.h2}>4</h2>
                </div>
            </div>
        </div>
    )
}

export default Errors;