import React from "react";
import Style from './Errors.module.css';
import img from '../../Assets/earth.png'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Errors = () => {

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
                    <h1 className={Style.h1} >Not Found</h1>
                </div>
                <div className={Style.status}>
                    <h2 className={Style.h2}>4</h2>
                    <img className={Style.img} src={img} alt="error" />
                    <h2 className={Style.h2}>4</h2>
                </div>
            </div>
        </div>
    )
}

export default Errors;