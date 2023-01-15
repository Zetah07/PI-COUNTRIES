import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/earth.png'
import Style from './Nav.module.css'
import Search from '../Search/Search.jsx'

const Nav = ({setForm}) => {
  
  return (
    <div className={Style.container}>
        <div>
            <Link to='/'>
                <div className=''>
                    <img src={img} alt="logo" className={Style.img}/>
                    <h1 className={Style.title} >Individual Proyect Countries</h1>
                </div>
            </Link>
            <Search />
            <button className={Style.button} onClick={() => setForm(true)}>
              <span className={Style.shadow}></span>
              <span className={Style.edge}></span>
              <span className={Style.front}>Create Country</span>
            </button>
        </div>
    </div>
  )
}

export default Nav
