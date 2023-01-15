/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import TitleWrite from "../Share/TitleWrite";


const LandingPage = () => {
  let title = 'COUNTRIES PI'
  return (
    <div>
        <TitleWrite title={title}/>
        <p>Welcome to my individual project about countries </p>
        <Link to="/home">
            <button>HOME</button>
        </Link>
    </div>
  )
}

export default LandingPage;
