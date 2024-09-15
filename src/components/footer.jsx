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
                <p className='misOut1'>Subscribe to our newsletter </p>
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
                
               
                <div className='fil'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Projects</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Ecommerce</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Real Estate</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>AgricBusiness</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Logistics</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Finance</a></li>
                                                <li className='pin1  pin6'><a href="/" className='then'>Blog</a></li>
                                                <li className='pin1  pin6'><a href="/" className='then'>Co-operate</a></li>
                    </ul>
                </div>
                <div className='fil'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Company</div></li>

                        <li className='pin pin7'><a href="/about" className='then'>About Us</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact Us</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Careers</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Press</a></li>
                    </ul>
                </div>
                <div className='fil'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Legal</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Privacy Policy</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Terms & Conditions</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>Cookie Policy</a></li>
                        <li className='pin  pin7'><a href="/" className='then'>Disclaimer</a></li>
                      
                    </ul>
                </div>
                <div className='fil'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Resources</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Blog</a></li>


                        <li className='pin  pin7'><a href="/" className='then'>Pricing</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'></a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className=''>
            <div className='footerW fil4'>
                 
                    <div className="fil">
                        
                   <div className='Weg'>Adane Tech</div>
                 
              
            
                </div>
               
                <div className='fil'>
                    <ul className='footerF'>

                        <li className='pin pin6'><a className='then'>Call</a></li>
                        <li className='pin pin7'><a href="/" className='then'>+234 8167 0296 09 +234 9060 2439 60</a></li>
                       
                    </ul>
                </div>
                <div className='fil'>
                    <ul className='footerF'>

                        <li className='pin pin6'><a  className='then'>Mail</a></li>
                        <li className='pin pin7'><a href="/" className='then'>info@adane.com</a></li>
                       
                    </ul>
                </div>
                  <div className='fil'>
                    <ul className='footerF'>

                        <li className='pin pin6'><a href="/" className='then'>Skype</a></li>
                        <li className='pin pin7'><a href="/" className='then'>Adane.Technologies</a></li>
                       
                    </ul>
                </div>
                
             
              
            </div>
        </div>
         <div className='MobileT12 '>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">Company</div>
                    <a href="/about" className='mnm mmm2'>About Us</a>
                    <a href="mailto:chukwubuikekingsley369@gmail.com" className='mnm mmm2'> Contact Us </a>
                    <a href="/" className='mnm mmm2'>Careers</a>
                     <a href="/" className='mnm mmm2'>Press</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Projects</div>
                    <a href="/" className='mnm mmm1 '>Ecommerce</a>
                    <a href="/" className='mnm mmm1'>Real Estate</a>
                    <a href="/" className='mnm mmm1'>AgricBusiness</a>
                    <a href="/" className='mnm mmm1'>Logistics</a>
                     <a href="/" className='mnm mmm1'>Blog</a>
                    <a href="/" className='mnm mmm1'>Co-operate</a>
                    
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

        <div className='MobileT12 fil5'>
            <div className='MobileT1'>
                <div className='MobileT'>

                    <a  className='mnm4'>Call</a>
                    <a  href="tel:+2348167029609"className='mnm mmm2'> +234 8167 029609 </a>

                </div>
                <div className='MobileT'>

                    <a  className='mnm4'>Mail</a>
                    <a  className='mnm mmm1'>info@Adane.com</a>

                    
                </div>
            </div>
        </div>
        <div className='boy2'>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2024 Adane Technologies limited . All Rights Reserved
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