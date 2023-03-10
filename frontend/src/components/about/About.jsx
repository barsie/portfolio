import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi' 
import { RiFolder5Fill } from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      
    <h5>Conóscame</h5>
    <h2>Acerca de</h2>

    <div className='container about__container'>

      <div className='about__me'>
        <div className='about__me-image'>
          <img src={Me} alt='About Image'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experiencia</h5>
            <small>+2 Años</small>
          </article>
        
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clientes</h5>
            <small>+10 Satisfichos</small>
          </article>
         
          <article className='about__card'>
            <RiFolder5Fill className='about__icon'/>
            <h5>Proyectos</h5>
            <small>+8 Completados</small>
          </article>

        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet tenetur vitae molestiae laboriosam dolorem temporibus distinctio necessitatibus. Nulla blanditiis non, nostrum alias assumenda modi magni vero aspernatur aliquid quo officia!</p>
        
        <a href='#contact' className='btn btn-primary'> Hablemos!</a>

      </div>

    </div>
    </section>
  )
}

export default About