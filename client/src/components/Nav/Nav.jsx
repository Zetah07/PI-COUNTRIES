import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/earth.png'
import Style from './Nav.module.css'
import Search from '../Search/Search.jsx'
import { MdCreateNewFolder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav className={Style.container}>
        <div>
            <Link to='/'>
                <div className=''>
                    <img src={img} alt="logo" className={Style.img}/>
                    <h1 className={Style.title} >Individual Project Countries</h1>
                </div>
            </Link>
            <Search />
            <a href='/create' onClick={() =>setActiveNav('/create') } className={activeNav ==='/create' ?'acitve' : ''}>Create<MdCreateNewFolder/></a>
            <a href='/about' onClick={() => setActiveNav('/about')} className={activeNav ==='/about' ? 'acitve' : ''}> About<FcAbout/></a>
        </div>
    </nav>
  )
}

export default Nav
