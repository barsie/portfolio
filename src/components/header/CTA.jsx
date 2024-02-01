import React from 'react'
import CV from "../../assets/cv.pdf"
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary text-center'>Let's Talk</a>
        <a href="https://blog.glives.org" className='btn font-bold'>Find My Blog</a>
    </div>
  )
}

export default CTA