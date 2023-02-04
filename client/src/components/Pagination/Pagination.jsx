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
      />
      <span>of {max}</span>
      <button disabled={current === max} className={Style.btn} onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
