
import React,{useState,useEffect} from 'react'
import "../styles/header.css"
import "../styles/footer.css"
import "../styles/mobileHeader.css"
import Slide from "./avert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faArrowRight,faXmark,faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"


const Header = () => {

  
   const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faDiscord,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]


  const [isChecked,setIsChecked] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;
  const [addRight, setAddRight] = useState("")

   const [feed,setFeed] = useState("header")

      const [feedBack1,setFeedBack1]=useState("")
   const navbarItem = [{link:"/courses",text:"Explore",name:"navbar1_link explore"},{link:"/ebook",text:"eBook",name:"navbar1_link"},{link:"/blog",text:"Blog",name:"navbar1_link"},{link:"/project",text:"projects",name:"navbar1_link"},{ link:"/",text:"pricing",name:"navbar1_link"}]

    window.onscroll=()=>{
      goMan()
      }
   
     

      const goMan =()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeed('subCap')
            // setFeedBack1('cap')
          }else{
            setFeed('header')
            // setFeedBack1(' ')
          }
      }

      const handleCheckboxChange = ()=>{
   setIsChecked(!isChecked)
   if(!isChecked){
   setAddRight('da1');
       document.body.classList.add('cac')
   }else{
      setAddRight('da');
       document.body.classList.remove('cac')
   }
      }

      

 
    
  return (

    <div className="" >
      <Slide/>
    <div className={feed}>
      <div style={{padding:"0 10px"}}>
      <div className="Navbar relativeD">

            <div><a href="/" className="Brand">
            <div className='headerLogo'>
              {/* <p className='AMAd'>Bkm </p> */}
            <img src="/img/MaraLogo.png" alt="" className=''  style={{width:"30px"}}/>
            <p className='AMAd'>AdaneTech </p>
            </div>
            </a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div >
        <div className="nacBar">
           
          <ul className="NavbarUl" >
            <li><a href="/about" className="navbar1_link">About Us</a></li> 
           
             <li ><a href="/Service" className="navbar1_link">Services</a></li>
              <li ><a href="/" className="navbar1_link">Industries</a></li>
                            <li ><a href="/career" className="navbar1_link">Career</a></li>
               <li ><a href="/blogs" className="navbar1_link">Blog</a></li>

        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div >

          <div className="hamburgerMenu">
            <div className='reff'>
            <div><button className='RegRef'>Register</button></div>
            <div><FontAwesomeIcon icon={faBars}  className=" " style={{fontSize:"26px",color:"#fff",marginRight:"6px"}} onClick={handleCheckboxChange} /></div>
            </div>
    {/* <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label> */}
    {/* {isChecked ?  */}
     <div className={`menuBox ${addRight}`}>
    <ul className="menuBox24">
      <li><div className='gFerL'><FontAwesomeIcon icon={faXmark}  className=" " style={{fontSize:"26px",color:"#fff"}} onClick={handleCheckboxChange} /></div></li>
      <li><div className='reff aaFF'><button className='RegRef' style={{background:"#2e756d"}}>Sign In</button><button className='RegRef'>Register</button></div></li>
            <li><a className="menuItem" href="/about">About Us</a></li>
       <li><a className="menuItem met" onClick={()=>setDropdown(!dropdown)} >Services <FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#fff",marginRight:"8px"}}  /></a>
       {dropdown ? 
          <div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Web Development</a></div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Mobile App Development</a></div>
              <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />UI/UX design</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Graphic Design</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Front_End Development</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Backend Development</a></div>
          </div>
          :""}
       </li>
              <li><a className="menuItem" href="/career">Career</a></li>
              <li><a className="menuItem" href="/">Industries</a></li>
      <li><a className="menuItem" href="/blogs" style={{marginBottom:"10px"}}>Blog</a></li>

     

       <li><button className='loginButton'><a className="menuItem34" href="/contact">Contact Us</a></button></li>
       <li> <div className="hotter kil" style={{marginBottom:"60px"}}>
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL um"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"20px"}} /></a></div></li>
                </ul>
                ))}
                </div>
            </div></li>
            <li><div style={{height:"20px",padding:"10px 15px"}}></div></li>
    </ul>
     
    </div>
    {/* :""} */}
  </div>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li><a href="/contact" className="navbar1_link loginButton">Contact Us</a></li>
                     
           {/* <li><a href="/register" className="navbar1_link ">Join for free <FontAwesomeIcon icon={faArrowRight}  className=""/></a></li> */}
           </ul>
        </div>
        }
      </div>
      </div>


     
         

    </div>

    </div>
  )
}

export default Header