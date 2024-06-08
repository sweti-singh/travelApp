import React from 'react'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-style'>
      <span>Copyrights &copy; 2021 Travelo. All rights reserved</span>
      <ul>
        <li><BsLinkedin/></li>
        <li><BsFacebook/></li>
        <li><AiFillInstagram/></li>
      </ul>
    </div>
  )
}

export default Footer
