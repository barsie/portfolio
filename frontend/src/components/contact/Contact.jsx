import React from 'react'
import "./contact.css"
import {FiMail} from 'react-icons/fi'
import {RiTelegramLine} from 'react-icons/ri'
import {MdOutlineWhatsapp} from 'react-icons/md'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_4xabi6k', 'template_qmukt0a', form.current, '2xg6JL00Db-vOraBD')
    e.target.reset()
    
  };
  return (
    <section id='contact'>
      <h5>Acerca de</h5>
      <h2>Contacto</h2>
      <div className='container cnt__container'>
        <div className='cnt__optns'>
          <article className='cnt__optn'>
            <FiMail className='cnt__optn-icon'/>
            <h4>Email</h4>
            <h5>info@support.com</h5>
            <a href='mailto:info@support.com' target='_blank'>Enviar Mensaje</a>
          </article>
          <article className='cnt__optn'>
            <RiTelegramLine className='cnt__optn-icon'/>
            <h4>Telegram</h4>
            <h5>@barsiedev</h5>
            <a href='https://t.me/barsiedev' target='_blank'>Enviar Mensaje</a>
          </article>
          <article className='cnt__optn'>
            <MdOutlineWhatsapp className='cnt__optn-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>+240555793862</h5> */}
            <a href='https://api.whastsapp.com/send?phone+240555793862' target='_blank'>Enviar Mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Su nombre' required/>
          <input type='email' name='email' placeholder='Su Correo' required/>
          <textarea name='textarea' placeholder='Su mensaje' required/>
          <button type='submit' className='bnt btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact