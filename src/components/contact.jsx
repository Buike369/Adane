import React, {useState} from 'react'

import "../styles/contact.css"
import axios from "axios"
import withTitle from './title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
// import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [error,setError]=useState("")
     const [messages,setMessages]=useState("")
  const [inputs1,setInputs1] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:""
  })


   const changeHandle =(e)=>{

    setInputs1(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(inputs1)
  }





    
 const inputs = [{label:"Full Name",type:"text", name:"FullName",holder:"Enter your name"},{label:"Email",type:"email",name:"email",holder:"Enter your email"},{label:"Phone",type:"number",name:"phoneNumber",holder:"Enter your phone_number"},{label:"Subject",type:"text",name:"Subject",holder:"Purpose of contact"}]

  const PhoneNum ="+2348167029609"
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
  return (
    <div >
       <div className='contcat'>
       

        {/* end section */}

        <div className='coverDC'>
            <div className='connectWithUs'><span  className='connectWithUs1'>Connect</span> with us</div>
            <div></div>
            <div className='contactFormD'>
                <div className='ddV'>
                    <div className=' ddV23'>
                    <div className='ifUs'>Contact Us to bring your digital ideas to life!</div>
                    <div>
                        <form className="fdn">
                            {inputs.map((app,id)=>(
                                <div key={id}>
                            <div className='LabelCon'>{app.label}</div>
                            <div>
                                <input type={app.type} className='inputsConnect' name={app.name} onChange={changeHandle} placeholder={app.holder}/>
                            </div>
                            </div>
                            ))}

                         
                            <div>
                                <div className='messA'>Message *</div>
                                <div>
                                    <textarea className='textF'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='SumbitConnect'>Submit</div>
                             
                        </form>
                    </div>
                    </div>
                </div>
                <div className=' ddV ddV5'>
                    {/* <div>
                        goggle location map
                    </div> */}

                    
                    <div>
                        <div className='graceDay'>Working Days! </div>
                        <div className='wedDis'>Monday -Saturday 7:00am- 5PM. </div>
                    </div>
                    <div>
                        <div className='graceDay'>Location</div>
                        <div className='wedDis'> <FontAwesomeIcon icon={ faLocationDot}  className='noLike'/>No 7 Marat Avenue </div>
                    </div>
                    <div>
                        <div className='graceDay'>
                            Contact Information
                        </div>
                        <div className='wedDis'>Office Phone:  <a href={`tel:${PhoneNum}`} style={{color:"#fff"}}>+234 906 0243 960</a></div>
                        <div className='wedDis'>Email: chukwubuikekingsley@gmail.com</div>
                        <div className='deed'>Mailing Address:</div>
                        <div className='wedDis'>P.O. Box 1639</div>
                        <div className='wedDis'>Boring, OR 97009</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

       
    </div>
  )
}

export default withTitle(Contact, 'Contact Us at - Adane Technology');