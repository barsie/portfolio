import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avats.png'
import HeaderSocial from './HeaderSocial'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  const ts = document.querySelector("text__s");
  return (
    <header>
      <div className='w-10/12 rounded-3xl bg-violet-900 h-4 m-auto mt-[-6rem] mb-8'></div>
      <div className='container header__container'>
          <h1>Sirineo Barila</h1>
          <div className=''>
            <div className='text-lg md:text-7xl'>
            <TypeAnimation 
              sequence={[
                'Entrepreneur', 1000,
                'Data Analyst', 1000,
                'Front-End Developer', 1000,
                'IT Specialist', 1000
              ]}
              repeat={Infinity}
            />
            </div>
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