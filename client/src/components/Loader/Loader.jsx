import React from "react";
import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.container}>
            <div className={s.spinner}>
                <div className={s.inner}>
                </div>
            </div>
        </div>
    )
}

export default Loader;