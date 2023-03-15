import React from 'react'
import './portfolio.css'
import ImgPortf1 from '../../assets/portfolio1.jpg'
import ImgPortf2 from '../../assets/portfolio2.jpg'
import ImgPortf3 from '../../assets/portfolio3.jpg'
import ImgPortf4 from '../../assets/portfolio4.jpg'
import ImgPortf5 from '../../assets/portfolio5.png'
import ImgPortf6 from '../../assets/portfolio6.jpg'

const dataPortf = [
  {
      id: 1,
      img: ImgPortf1,
      title: "Analisis de datos",
      github: 'https://github.com/analisis de datos',
      demo: 'http://'
  },
  {
      id: 2,
      img: ImgPortf2,
      title: "Tecnologías web",
      github: "http://github.com/ciencias tecnologia",
      demo: 'http://'
  },
  {
      id: 3,
      img: ImgPortf3,
      title: "Emprendimiento",
      github: "https://github.com/criptomonedas",
      demo: 'http://'
  },
  {
      id: 4,
      img: ImgPortf4,
      title: "Etereum",
      github: "https://github.com/etereum/",
      demo: 'http://'
  },
  {
      id: 5,
      img: ImgPortf5,
      title: "Ciberseguridad",
      github: "https://github.com/ciberseguridad/",
      demo: 'http://'
  },
  {
      id: 6,
      img: ImgPortf6,
      title: "Data Sources",
      github: "https://github.com/Data Scurces",
      demo: 'http://'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos recientes</h5>
      <h2 className='text-2xl font-semibold'>Portfolio</h2>

      <div className='container portf__container'>
        {
          dataPortf.map(({id, img, title, github, demo})=> {
            return(

            <article className='portf__item' key={id}>
              <div className='portf__item__image'>
                <img src={img} alt={title}/>
              </div>
                <h3 className=''>{title}</h3>
              <div className='portf__item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary'>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio