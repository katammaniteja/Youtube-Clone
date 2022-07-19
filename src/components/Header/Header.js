import React from 'react'
import './_header.scss'
import { FaBars } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications,MdApps} from "react-icons/md"

const Header = () => {
  return (
    <div className='header'>
      <FaBars className='header-menu' size={26}/>
      <img src="https://i.ytimg.com/vi/IC6m249zvI0/hqdefault.jpg" alt="" className='header-logo' />
      <form><input type="text" placeholder='Search'/>
        <button><AiOutlineSearch size={22}/></button>
      </form>
      <div className="header-icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://iconape.com/wp-content/png_logo_vector/avatar.png" alt="" />
      </div>
    </div>
  )
}

export default Header
