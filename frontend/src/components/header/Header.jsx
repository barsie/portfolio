import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avats.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='colF'></div>
      <div className='container header__container'>
        <h6>"Every data need to tell a story"</h6>
        <div className='bd'>
          <h1><span className='text text-f'>Sirineo Barila</span></h1>
          <span className='text text__s'>Freelancer</span>
          {/* <h5 className='text-light'>Emprendedor, Analista de Datos y Desarrollador web FreeLancer</h5> */}
        </div>
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