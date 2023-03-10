import React from 'react'
import {BsLinkedin, BsReddit, BsTwitter, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
        <a href="https://reddit.com" target='_blank'><BsReddit/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial