import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué Ofrezco</h5>
      <h2 className='text-2xl font-semibold'>Mis Servicios</h2>

      <div className='container serv__container'>

        <article className='serv'>
          <div className='serv__head'>
            <h3>Analisis de Datos</h3>
          </div>

          <ul className='serv__list'>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Investigación y recolección de datos.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Procesado y Modelado de datos.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Visualización y story de datos.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Data Management y Backup.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Automatización y Escalabilidad de Datos.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Insights y Estadísticas.</p>
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
              <p>De Portafolios y páginas personales.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>De proyectos y Servicios web.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Integración a plataformas E-Commerces.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Mantenimiento de sitio y servicios web.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Mapeado de Empresas y Organizaciones.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Optimización de sitios Web (SEO).</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Insights y Analíticas.</p>
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
              <p>Procesos de innovación empresarial.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Acompañamiento en digitalización.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Logistica de suministros de materiales TIC.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Escalabilidad de redes y infraestructuras TIC.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Utilización de herramientas empresariales.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Installación de Servicios en red.</p>
            </li>
          </ul>
        </article>

       
      </div>
    </section>
  )
}

export default Services