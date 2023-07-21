import React from 'react'
import '../styles/Header.css'
import {AiOutlineMenu} from 'react-icons/ai';
const Header = () => {
  return (
   <div className='header-main'>
    <img src='https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg'/>
    <AiOutlineMenu className='icon'/>
   </div>
  )
}

export default Header
