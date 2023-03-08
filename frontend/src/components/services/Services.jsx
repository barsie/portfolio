import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué Ofrezco</h5>
      <h2>Mis Servicios</h2>

      <div className='container serv__container'>

        <article className='serv'>
          <div className='serv__head'>
            <h3>Analisis de Datos</h3>
          </div>

          <ul className='serv__list'>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
          </ul>
        </article>

        {/* ====================================End Of card====================== */}

        <article className='serv'>
          <div className='serv__head'>
            <h3>Desarrollo Web y App</h3>
          </div>

          <ul className='serv__list'>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
          </ul>
        </article>

        {/* ====================================End Of card====================== */}

        <article className='serv'>
          <div className='serv__head'>
            <h3>Consultoria y Soporte</h3>
          </div>

          <ul className='serv__list'>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>lorem ipsum sicut panis moretis tusos et ilit.</p>
            </li>
          </ul>
        </article>

       
      </div>
    </section>
  )
}

export default Services