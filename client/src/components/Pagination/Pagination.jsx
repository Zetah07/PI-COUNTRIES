import React from "react";
import s from './Pagination.module.css'

const Pagination = ({ current, setCurrent, max, input, setInput }) => {

    const next = () => {
        setCurrent(current + 1)
        setInput(input + 1)
    }
    const previous = () => {
        setCurrent(current - 1)
        setInput(input - 1)
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setCurrent(parseInt(e.target.value))
            if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > max || isNaN(parseInt(e.target.value))) {
                setCurrent(1)
                setInput(1)
            } else {
                setCurrent(parseInt(e.target.value))
            }
        }
    }

    /*     const handleChange = (e) => {
            setInput(e.target.value)
        } */

    return (
        <div className={s.container}>
            <button disabled={current === 1} className={s.btn} onClick={previous}>{'<'}</button>
            <input className={s.input} type="text" maxLength='2' name="page" autoComplete="off" onChange={(e) => setInput(e)} value={input} onKeyDown={(e) => onKeyDown(e)} />
            <span>of {max}</span>
            <button disabled={current === max} className={s.btn} onClick={next} >{'>'}</button>
        </div>
    )
}

export default Pagination;