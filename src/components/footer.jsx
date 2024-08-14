import React, {useState} from 'react'
import "../styles/footer.css"

import axios from "axios"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
     const [inputs,setInputs] = useState({
    email:""
  })
      const [error,setError]=useState("")
     const [messages,setMessages]=useState("")

   const changeHandle4 =(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  
  }
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faGithub,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faDiscord,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]

//    const postInfo1 =(e)=>{
// e.preventDefault()
//     if( inputs.email.length === 0 ){
//       setError("field must not be empty")
//        setTimeout(()=>{
//            setError("")
//         },3000)
//     }else
//      if(validator.isEmail(inputs.email) === false){
// setError("invalid Email")
//  setTimeout(()=>{
//            setError("")
//         },3000)
//     }else{

//       axios.post("https://maratproject.onrender.com/api/post/form1",inputs).then((response)=>{
//         // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
//         setMessages("Sent Successfully")
//          document.body.classList.add("sucMac");
//         setTimeout(()=>{
//            setMessages("")
//            setInputs({
//             email:""
//            })
//             document.body.classList.remove("sucMac");
          
//         },5000)
//       }).catch((err)=>{
//       //  console.log(err)
//        setError("Internal Server error")
//         document.body.classList.add("sucMac");

//          setTimeout(()=>{
//            setError("")
          
//             document.body.classList.remove("sucMac");
          
//         },5000)
//       })

//     } 
//   }




  return (
    <div>



       

        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
           
            <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news.</p>
                <form className='FormPP'>
                    <div>
                        <input type="email" placeholder='Enter your Email' className='yourEmail' name="email" value={inputs.email} onChange={changeHandle4}/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}}/>
                    </div>
                </form>
                 <img src="/img/news.svg" alt=""  className="messageImg"/>
            </div>
         
            </div>
             <div className='footerHouse2'></div>
        <div>
            <div className='footerW'>
                  <div className='footerFo'>
                    <div className="weg4">
                        <div className="ato2">
                   <div className='Weg'>AMAD Assure</div>
                   <p className='Weg2'>We turn your idea into reality and ignite a passion  for tech development</p>
                   <p className='misOut1'>Subscribe to our newsletter</p>
                   <div>
                    <form className='FormPP'>
                    <div>
                        <input type="email" placeholder='Enter your Email' className='yourEmail' name="email" value={inputs.email} onChange={changeHandle4}/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}} />
                    </div>
                </form></div>
                </div>
                </div>
                </div>
               
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Product</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Financial</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Real Estate</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>AgricBusiness</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Logistics</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Bright Future Fund</a></li>
                                                <li className='pin1  pin6'><a href="/" className='then'>Logistics</a></li>
                                                <li className='pin1  pin6'><a href="/" className='then'>Bright Fu</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Company</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Our Team</a></li>
                        <li className='pin pin7'><a href="/" className='then'>About Us</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>Contact Us</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Careers</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Press</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Legal</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Privacy Policy</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Terms & Conditions</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>Cookie Policy</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Disclaimer</a></li>
                      
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Resources</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Blog</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Become an Author</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>Become an Affiliate</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Pricing</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'></a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">Company</div>
                    <a href="/" className='mnm mmm2'>About Us</a>
                    <a href="/" className='mnm mmm2'> Contact Us </a>
                    <a href="/" className='mnm mmm2'>Careers</a>
                     <a href="/" className='mnm mmm2'>Press</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Products</div>
                    <a href="/" className='mnm mmm1 '>Financial</a>
                    <a href="/" className='mnm mmm1'>Real Estate</a>
                    <a href="/" className='mnm mmm1'>AgricBusiness</a>
                    <a href="/" className='mnm mmm1'>Logistics</a>
                     <a href="/" className='mnm mmm1'>Bright Future Fund</a>
                    <a href="/" className='mnm mmm1'>Logistics</a>
                    
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">Legal</div>
                    <a href="/" className='mnm mmm2'>Privacy Policy </a>
                    <a href="/" className='mnm mmm2'>Terms & Conditions</a>
                    <a href="/" className='mnm mmm2'>Disclaimer</a>
                                        <a href="#" className='mnm mmm2'>Cookie Policy</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Resources</div>
                    <a href="/" className='mnm mmm1 '>Blog</a>

    
                    <a href="/" className='mnm mmm1'>Pricing</a>
                </div>
            </div>
        </div>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2024 Amad Assure limited . All Rights Reserved
            </div>
            <div className="hotter">
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"15px"}} /></a></div></li>
                </ul>
                ))}
                </div>
            </div>
        </div>
        </div>
        </div>

             {messages && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {messages}
      </div>
     </div>
     </div>
      }


                {error && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {error}
      </div>
     </div>
     </div>
      }
    </div>
  )
}

export default Footer