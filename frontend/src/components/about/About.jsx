import React from 'react'
import './about.css'
import Me from '../../assets/avats.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi' 
import { RiFolder5Fill } from 'react-icons/ri'
import CountUp from 'react-countup'

const About = () => {
  return (
    <section id='about'>
      
    <h5>Conóscame</h5>
    <h2 className='text-2xl font-semibold'>Acerca de</h2>

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
            {/* <CountUp end={2}>Años</CountUp> */}
            <small><CountUp delay={2} start={0} end={2}/> Años</small>
          </article>
        
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clientes</h5>
            <small><CountUp delay={2} start={0} end={10}/> Satisfichos</small>
          </article>
         
          <article className='about__card'>
            <RiFolder5Fill className='about__icon'/>
            <h5>Proyectos</h5>
            <small><CountUp delay={2} start={0} end={8}/> Completados</small>
          </article>

        </div>

        <p className='about__param'>Experiencia en desarrollo web y proyectos web con herramientas actualizadas; procesos de analisis de datos e implementación de sistemas informáticos en red para corporaciones, compañías y Organizaciones.</p>
        
        <a href='#contact' className='btn btn-primary'>Hablemos!</a>

      </div>

    </div>
    </section>
  )
}

export default About