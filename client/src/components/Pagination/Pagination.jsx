import React from "react";
import Style from "./Pagination.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ current, setCurrent, max, input, setInput }) => {
  const next = () => {
    setCurrent(current + 1);
    setInput(current + 1);
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
      )
        setCurrent(1);
      setInput(1);
    } else {
      setCurrent(parseInt(event.target.value));
    }
  };

  return (
    <div className={Style.container}>
      <button
        disabled={current === 1}
        classname={Style.button}
        onClick={previous}
      >
        <BsArrowLeft />
      </button>
      <imput
        className={Style.input}
        type="text"
        maxLength="2"
        name="page"
        autoComplete="off"
        onChange={(e) => setInput(e)}
        value={input}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <span>of{max}</span>
      <button
        disabled={current === max}
        classname={Style.Button}
        onClick={next}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Pagination;