import React from 'react'
import './Footer.module.css';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';


export const Footer = () => {
  return (
    <footer className='footer__cont'>
        <div className='text__container'>
            <p>© Johan Sebastian Castro Lopez - All rigth reserved - 2023</p>
        </div>
        <div className='icon__container'>
        <a className='icon' href='https://www.linkedin.com/in/zetahdev/'><AiOutlineLinkedin/></a>
        <a className='icon' href='https://github.com/Zetah07'> <AiFillGithub/></a>
        </div>
    </footer>
  )
}
