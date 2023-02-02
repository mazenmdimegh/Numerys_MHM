import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaWaze}  from 'react-icons/fa'
import {FiMapPin} from 'react-icons/fi'
import './LandingIcon.scss'


const LandingIcon = () => {
  return (
    <div className='network' >
      <div className='BsFacebook'><a href="https://www.facebook.com/MHM-Motors-103060721805298" target="_blank">
      <BsFacebook /><br /></a></div>
      <div className='BsFacebook'><a href="https://www.instagram.com/mhm.motors/" target="_blank">
      <BsInstagram/><br/></a>
      </div>
      <div className='BsFacebook'><a href="https://www.youtube.com/channel/UCNA7S_TBfd_sv76PMIb16LA" target="_blank">
      <AiOutlineYoutube/><br /></a>
      </div>
      <div className='BsFacebook'><a href="https://www.google.com/maps/place/MHM+Motors/@48.7364563,1.9076807,17z/data=!4m5!3m4!1s0x47e69d76170fa7b7:0x36c5cb79356ff54c!8m2!3d48.7364492!4d1.9077022?hl=fr-FR" target="_blank">
      <FiMapPin/><br /></a>
      </div>
      <div className='BsFacebook'><a href="https://www.waze.com/live-map/directions?to=ll.48.736446%2C1.907823" target="_blank">
      <FaWaze/><br /></a>
      </div>
      
    </div>
  )
}

export default LandingIcon
