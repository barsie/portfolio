import React from 'react'
import './footer.css'
import {RiTelegramLine} from 'react-icons/ri'
import {BsReddit, BsInstagram, BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#' className='footer__logo'> <span>Powered by</span> TELL<span>&reg;</span></a>
      <ul className='permalinks'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Acerca de</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portafolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonios</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com'><BsGithub/></a>
        <a href='https://reddit.com'><BsReddit/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
        <a href='https://telegram.com'><RiTelegramLine/></a>
      </div>

      <div className='text-2x text-white'>2023 - 2024 &copy; by SIRINEO BARILA</div>
    </footer>
  )
}

export default Footer