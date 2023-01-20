/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './About.module.css';
import Styles from './About.module.css';
import { Link } from 'react-router-dom';


export const About = () => {
  return (
    <div className={Styles.container} >
            <Link to='/home'>
                    <button className={Styles.btn} >
                        <span className={Styles.shadow}></span>
                        <span className={Styles.edge}></span>
                        <span className={Styles.front}>Home</span>
                    </button>
                </Link>
            <div className={Styles.about}>
            <h1> 👋 Hi, I’m Johan Sebastian Castro</h1>
            <h3> 👀 click my image to redirect to Github</h3>
            
            <a href= 'https://github.com/Zetah07' target='_blank'><img src="./838-01.jpg" alt="About" className={Styles.img__about}/></a>
                </div>
        </div>
  )
}
  

