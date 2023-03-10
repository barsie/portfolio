import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mis habilidades</h5>
      <h2>Mis habilidades</h2>

      <div className='container exp__container'>

        <div className='exp__wtech'>

          <h3>Web-App Dev & Tools</h3>
          <div className='exp__content'>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>  
                <h4>ReactJs</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>NextJs</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

          </div>
        </div>

        <div className='exp_bness'>
          
        <h3>IT SKILLS</h3>
          <div className='exp__content'>

          <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>ITIL</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>Analisis de Datos</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>

            
            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>  
                <h4>Network Management</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>Microsoft Suite</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>DB Admin</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>IT Consultancy</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            
            <article className='exp__details'>
              <BsPatchCheckFill/>
              <div>
                <h4>Open-Sourcing</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience