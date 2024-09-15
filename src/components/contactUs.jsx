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
                        <p className='PSA'>Talk to a member of our Sales team</p>
                        <p className='helpYou'>We’ll help you find the right projects and pricing for your business.</p>
                        <a href={`tel:${PhoneNum}`}><div className='buTNum'>+234 8167029609</div></a>
                    </div>
                       </div>
                    <div className='DivN'>
                    <div className='DivN3'>
                                                <div><FontAwesomeIcon icon={faMessage}  className="ICH" style={{fontSize:"36px"}} /></div>
                        <p className='PSA'>Projects and Service support</p>
                        <p className='helpYou'>Our help center is fresh and always open for business. If you can’t find the answer you’re looking for, we’re here to lend a hand.</p>
                        
                        <a href="/contact"><div className='GoTS'>Go to Contact Us</div></a>
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