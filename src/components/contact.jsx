import React, {useState,useRef} from 'react'

import "../styles/contact.css"
import axios from "axios"
import withTitle from './title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faLocationDot,faHouse,faMessage,faPhone,faAddressBook,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import validator from 'validator';
// import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [error,setError]=useState("")
     const [message,setMessage]=useState("")
  const [inputs1,setInputs1] = useState({
    fullName:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })

const inputRef = useRef();
   const changeHandle =(e)=>{
    if(inputRef.current){
   
    }

    setInputs1(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(inputs1)
  }


    const postInfo = (e)=>{
e.preventDefault()
    if((inputs1.fullName.length === 0) || (inputs1.email.length === 0) || (inputs1.phone.length === 0) || (inputs1.subject.length === 0) || (inputs1.message.length === 0) ){
      setError("field must not be empty")
       setTimeout(()=>{
           setError("")
        },3000)
    }else if(validator.isEmail(inputs1.email) === false){
setError("invalid Email")
 setTimeout(()=>{
           setError("")
        },3000)
    }else if (validator.isMobilePhone(inputs1.phone,'en-NG',{strictMode:false}) === false){
 setError("invalid phone number")
  setTimeout(()=>{
           setError("")
        },3000)
    }else{

       axios.post("http://localhost:8080/api/post/form",inputs1).then((response)=>{
        // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
        setMessage("Successful Registration")
        setTimeout(()=>{
           setMessage("")
           setInputs1({
            fullName:"",
    email:"",
    phone:"",
    subject:"",
    message:""
           })
          
        },3000)
      }).catch((err)=>{
       console.log(err)
      })
    } 
  }




    
 const inputs = [{label:"Full Name",type:"text", name:"fullName",holder:"Full Name",value:inputs1.fullName,icon:faAddressBook},{label:"Company Name",type:"text",name:"subject",holder:"Company Name",value:inputs1.subject,icon:faHouse},{label:"Email",type:"email",name:"email",holder:"Email",value:inputs1.email,icon:faEnvelope},{label:"Phone",type:"number",name:"phone",holder:"Phone",value:inputs1.phone,icon:faPhone}]

  const PhoneNum ="+2348167029609"
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
  return (
    <div>
    <div style={{position:"relative",zIndex:"4"}}>
        

       <div className='contcat'>
       

        {/* end section */}

        <div className='coverDC'>
            <div className='connectWithUs'><span  className='connectWithUs1'>Contact</span>  us</div>
            <div></div>
            <div className='contactFormD'>
                <div className='ddV'>
                    <div className=' ddV23'>
                    
                    <div>
                        <form className="fdn"> 
                            <div className='lLget'>Get In Touch</div>
                            <p className='getLL'> Fill out the form,and we will contact you</p>
                            {inputs.map((app,id)=>(
                                <div key={id}>
                            {/* <div className='LabelCon'>{app.label}</div> */}
                            <div className='letGo'>
                                <FontAwesomeIcon icon={app.icon}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />
                                <input type={app.type} className='inputsConnect' name={app.name} onChange={changeHandle} placeholder={app.holder} value={app.value} ref={inputRef}/>
                            </div>
                            </div>
                            ))}

                         
                            <div>
                                <div className='messA' style={{paddingLeft:"10px"}}> <FontAwesomeIcon icon={faMessage}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  /> Your Message *</div>
                                <div>
                                    <textarea className='textF' name="message" onChange={changeHandle} value={inputs1.message} placeholder=''>
                                    </textarea>
                                </div>
                            </div>
                            <div className='SumbitConnect' onClick={postInfo}>Submit</div>
                             
                        </form>
                    </div>
                    </div>
                </div>
                <div className=' ddV ddV5'>
                    {/* <div>
                        goggle location map
                    </div> */}

                    <div className='UUH'>
                        <div className='ifUs'>Contact Us to bring your digital ideas to life!</div>
                    <div>
                        <div className='graceDay'>Working Days! </div>
                        <div className='wedDis'>Monday -Saturday 7:00am- 5PM. </div>
                    </div>
                    <div>
                        <div className='graceDay'>Location</div>
                        <div className='wedDis'> <FontAwesomeIcon icon={ faLocationDot}  className='noLike'/>No 7 Ehi Road Oyigbo, Rivers State. </div>
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

       <div className='itin'></div>
    </div>
    </div>
  )
}

export default withTitle(Contact, 'Contact Us at - Adane Technology');