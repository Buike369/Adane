import React, {useState} from 'react'

import "../styles/contact.css"
import axios from "axios"
import withTitle from './title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
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


   const changeHandle =(e)=>{

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




    
 const inputs = [{label:"Full Name",type:"text", name:"fullName",holder:"Enter your name",value:inputs1.fullName},{label:"Email",type:"email",name:"email",holder:"Enter your email",value:inputs1.email},{label:"Phone",type:"number",name:"phone",holder:"Enter your phone_number",value:inputs1.phone},{label:"Subject",type:"text",name:"subject",holder:"Purpose of contact",value:inputs1.subject}]

  const PhoneNum ="+2348167029609"
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
  return (
    <div >
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
                            <div className='LabelCon'>{app.label}</div>
                            <div>
                                <input type={app.type} className='inputsConnect' name={app.name} onChange={changeHandle} placeholder={app.holder} value={app.value}/>
                            </div>
                            </div>
                            ))}

                         
                            <div>
                                <div className='messA'>Message *</div>
                                <div>
                                    <textarea className='textF' name="message" onChange={changeHandle} value={inputs1.message} placeholder='Describe your project and goals'>
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

       
    </div>
  )
}

export default withTitle(Contact, 'Contact Us at - Adane Technology');