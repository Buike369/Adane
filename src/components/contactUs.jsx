import React from 'react'
import "../styles/contactUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faMessage} from "@fortawesome/free-solid-svg-icons"

const ContactUs = () => {

  const PhoneNum ="+2348167029609"
  return (
    <div>
                <div className='ImageLinH'>
                  <img src="/img/tech1.PNG" alt="" className="ImageLinH1" />
                  <div className='imgTeckI'></div>
                  </div>
        <div className='GITMD'>
        <div className='GITHD' >
            <div className='WUY'>Get in Touch with Us</div>
            <div className=''>
                <div className='DisDiv'>
                    <div className='DivN'>
                       <div className='DivN3'>
                         <div className=''><FontAwesomeIcon icon={faPhone}  className="ICH" style={{fontSize:"36px"}} /></div>
                        <p className='PSA'>Talk to a member of our  team</p>
                        <p className='helpYou'>We’ll help you find the right projects and idea for your business.</p>
                        <a href={`tel:${PhoneNum}`}><div className='buTNum'>+234 8167029609</div></a>
                    </div>
                       </div>
                    <div className='DivN'>
                    <div className='DivN3'>
                                                <div><FontAwesomeIcon icon={faMessage}  className="ICH" style={{fontSize:"36px"}} /></div>
                        <p className='PSA'>Contact us by filling the form</p>
                        <p className='helpYou'>click the button below to get in touch with us .</p>
                        
                        <a href="/contact"><div className='GoTS'>Contact us</div></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs