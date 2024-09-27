
import React,{useState,useEffect} from 'react'
import "../styles/header.css"
import "../styles/footer.css"
import "../styles/mobileHeader.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"


const Header = () => {

  
   const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faDiscord,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]


  const [isChecked,setIsChecked] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;
  const [show22, setShow22] = useState("Sapap")

   const [feed,setFeed] = useState("")

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
            setFeed(' ')
            // setFeedBack1(' ')
          }
      }

      const handleCheckboxChange = (event)=>{
   setIsChecked(event.target.checked)
   if(isChecked){
    document.body.classList.remove('cac')
   }else{
       document.body.classList.add('cac')
   }
      }

      


  useEffect(() => {
   const goMan =()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeed('subCap')
            console.log('Scroll event detected');
          }else{
            setFeed(' ')
            // setFeedBack1(' ')
          }
      }

    window.addEventListener('scroll', goMan);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', goMan);
    };
  }, []);
    
  return (

    <div className="" >
    <div className={`"header" ${feed}`}>
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
               <li ><a href="/blogs" className="navbar1_link">Blog</a></li>

        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div >
          <div className="hamburgerMenu">
    <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label>
     <div className="menuBox">
    <ul className="menuBox24">
      <li><a className="menuItem" href="/about">About Us</a></li>
       <li><a className="menuItem" href="/service">Services</a></li>
              <li><a className="menuItem" href="/">Industries</a></li>
      <li><a className="menuItem" href="/blogs">Blog</a></li>

     

       <li><button className='loginButton'><a className="menuItem34" href="/contact">Contact Us</a></button></li>
       <li> <div className="hotter kil">
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL um"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"20px"}} /></a></div></li>
                </ul>
                ))}
                </div>
            </div></li>
    </ul>
     
    </div>
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