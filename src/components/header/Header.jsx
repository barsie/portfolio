import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avats.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  const ts = document.querySelector("text__s");
  return (
    <header>
      <div className='w-10/12 rounded-3xl bg-violet-900 h-4 m-auto mt-[-6rem] mb-8'></div>
      <div className='container header__container'>
        <h6>"Every data need to tell a story"</h6>
          <h1>Sirineo Barila</h1>
            {/* <h3><span className='text-center text-f text-3xl font-bold flex flex-col'>I'm a </span></h3>
            <span className='text text__s'>Social</span>
            <span className='text text__s'>Entrepreneur</span> */}
          <h5 className='text-light'>Emprendedor, Analista de Datos y Desarrollador web FreeLancer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src ={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'> Scroll DOWN</a>
      </div>

    </header>
  )
}

export default Header