import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const dataTest = [
  {
    avatar: AVT1,
    name: 'Maria Jose',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas autem, dolorum architecto temporibus in labore, quas exercitationem voluptatum modi quaerat accusantium fugit. Dolor ad recusandae voluptates officiis repudiandae doloremque.'
  },
  {
    avatar: AVT2,
    name: 'DreamsHub',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas autem, dolorum architecto temporibus in labore, quas exercitationem voluptatum modi quaerat accusantium fugit. Dolor ad recusandae voluptates officiis repudiandae doloremque.'
  },
  {
    avatar: AVT3,
    name: 'Ben Conexia',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas autem, dolorum architecto temporibus in labore, quas exercitationem voluptatum modi quaerat accusantium fugit. Dolor ad recusandae voluptates officiis repudiandae doloremque.'
  },
  {
    avatar: AVT4,
    name: 'Mercedes Maye',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas autem, dolorum architecto temporibus in labore, quas exercitationem voluptatum modi quaerat accusantium fugit. Dolor ad recusandae voluptates officiis repudiandae doloremque.'
  }

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opinion de Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className='container test__container' 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination = {{clickable: true}}
      >
        {
          dataTest.map(({avatar, name, review}, index)=>{

           return(
            <SwiperSlide key={index} className='test'>
                <div className='ct__avt'>
                  <img src={avatar}/>
                </div>
                <h5 className='ct__nme'>{name}</h5>
                <small className='ct__rev text-light'>
                  {review}
                </small>
            </SwiperSlide>
           )
           
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials