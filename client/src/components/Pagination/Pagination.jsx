import React from "react";
import Style from "./Pagination.module.css";

const Pagination = ({ current, setCurrent, max, input, setInput }) => {
  const next = () => {
    setCurrent(current + 1);
    setInput(input + 1);
  };
  const previous = () => {
    setCurrent(current - 1);
    setInput(input - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setCurrent(parseInt(event.target.value));
      if (
        parseInt(event.target.value) < 1 ||
        parseInt(event.target.value) > max ||
        isNaN(parseInt(event.target.value))
      ) {
        setCurrent(1);
        setInput(1);
      } else {
        setCurrent(parseInt(event.target.value));
      }
    }
  };

  /*     const handleChange = (event) => {
            setInput(event.target.value)
        } */

  return (
    <div className={Style.container}>
      <button disabled={current === 1} className={Style.btn} onClick={previous}>
        {"<"}
      </button>
      <input
        className={Style.input}
        type="text"
        maxLength="2"
        name="page"
        autoComplete="off"
        onChange={(event) => setInput(event)}
        value={input}
        onKeyDown={(event) => onKeyDown(event)}
      />
      <span>of {max}</span>
      <button disabled={current === max} className={Style.btn} onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
