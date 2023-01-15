import React from "react";
import Style from "./Loader.module.css";
import { IoEarthOutline } from "react-icons/io5";

const Loader = () => {
  return (
    <div className={Style.container}>
      <div className={Style.rotation}>
        <div className={Style.earth}> <IoEarthOutline/> </div>
        <div className={Style.tuki}></div>
      </div>
    </div>
  );
};

export default Loader;
