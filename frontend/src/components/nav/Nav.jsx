import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import  {RiServiceFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setactiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setactiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={()=> setactiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''} ><RiServiceFill/></a>
      <a href='#contact' onClick={()=>setactiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav