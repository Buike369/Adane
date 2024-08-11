
import React,{useState} from 'react'
import "../styles/header.css"
import "../styles/mobileHeader.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [isChecked,setIsChecked] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;

   const [feedBack,setFeedBack]=useState("")
      const [feedBack1,setFeedBack1]=useState("")
   const navbarItem = [{link:"/courses",text:"Explore",name:"navbar1_link explore"},{link:"/ebook",text:"eBook",name:"navbar1_link"},{link:"/blog",text:"Blog",name:"navbar1_link"},{link:"/project",text:"projects",name:"navbar1_link"},{ link:"/",text:"pricing",name:"navbar1_link"}]

    window.onscroll =()=>{
        scrollF()
      }
    

      const scrollF =()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('subCap')
            setFeedBack1('cap')
          }else{
            setFeedBack(' ')
            setFeedBack1(' ')
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

      
    
  return (

    <div >
    <div className={`"header" ${feedBack}`}>
      <div className="Navbar">

            <div><a href="/" className="Brand">
            <div className='headerLogo'>
            <img src="/img/Wh.png" alt="" className=''  style={{width:"30px"}}/>
            <p className='AMAd'>AMAD Assured</p>
            </div>
            </a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div style={{width:"40%"}}>
        <div className="nacBar">
           
          <ul className="NavbarUl" >
            <li><a href="/" className="navbar1_link">Home</a></li> 
            <li><div href="" className="navbar1_link explore" onClick={()=>setDropdown(!dropdown)}>Services</div>
           {dropdown ?   
          <ul className='navbarDropD'>

                  <li><a className="menuItem" href="/teach">Topic 1</a></li>
       <li><a className="menuItem" href="/teach1">Topic 2</a></li>
              <li><a className="menuItem" href="/teach2">Topic 3</a></li>
              <li>Still on development </li>
          </ul>
           :""}  
            </li>

              <li ><a href="/" className="navbar1_link">About</a></li>
               <li ><a href="/" className="navbar1_link">Contact</a></li>
                <li><a href="/" className="navbar1_link">Blog</a></li>
        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div style={{width:"15%"}}>
          <div className="hamburgerMenu">
    <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label>
     <div className="menuBox">
    <ul className="menuBox24">
      <li><a className="menuItem" href="/teach">Topic 1</a></li>
       <li><a className="menuItem" href="/teach1">Topic 2</a></li>
              <li><a className="menuItem" href="/teach2">Topic 3</a></li>
      <li><a className="menuItem" href="/courses">Course</a></li>
      <li><a className="menuItem" href="/ebook">eBook</a></li>
      <li><a className="menuItem" href="/blog">Blog</a></li>
      <li><a className="menuItem" href="/project">Projects</a></li>
       <li><button className='loginButton'><a className="menuItem34" href="/register">Log In</a></button></li>
    </ul>
    </div>
  </div>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li><a href="/register" className="navbar1_link loginButton">Log In</a></li>
                     
           {/* <li><a href="/register" className="navbar1_link ">Join for free <FontAwesomeIcon icon={faArrowRight}  className=""/></a></li> */}
           </ul>
        </div>
        }
      </div>


     
         

    </div>

    </div>
  )
}

export default Header