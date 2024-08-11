import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className='footerHouse'>
      <div className='footerDiv'>
        <div className='footer pV'>
          <ul className='LinkMeUl'>
            <li><a href="" className='linkMe'>Home</a></li>
            <li><a href="" className='linkMe'>Services</a></li>
            <li><a href="" className='linkMe'>About Us</a></li>
            <li><a href="" className='linkMe'>Privacy Policy</a></li>
            <li><a href="" className='linkMe'>Terms</a></li>
            <li><a href="" className='linkMe'>Contact</a></li>
                      
          </ul>
        </div>
         <div className="footer pV1">
          <ul className='fontUl'>
            <li><a href=""><FontAwesomeIcon icon={faTwitter} className="icon_brand_size"/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faFacebook} className="icon_brand_size"/></a></li>
              <li><a href="" ><FontAwesomeIcon icon={faLinkedin} className="icon_brand_size"/></a></li>
              <li><a href="" ><FontAwesomeIcon icon={faTelegram} className="icon_brand_size"/></a></li>
          </ul>
         </div>
      </div>
      <div className='ffr'>© 2024 AMAD Assure limited. All rights reserved.</div>
    </div>
  )
}

export default Footer