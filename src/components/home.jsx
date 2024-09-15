import React from 'react'
import "../styles/home.css"
import OurServices from './ourServices';
import GetStarted from './getStarted';
import Card from "./card"
import Testimony from "./testimony"

const Home = () => {
const title = "Our Services"
const title1 = "Get In Touch"

  return (
    <div >
      <div className="ahh"></div>
      <div className="heroSection">
        <div className="heroBackColor"></div>
        <div className="heroSection1">
          <div className="housingDivForHeroText" >
          <p className='saveSmart'>Creating <span className='Digital'>Digital</span> Solutions</p>
          <p className='saveSmart1 rate' >We create web and mobile app that turn your ideas into reality,sparking innovations and achieving success.</p>
          <div className='hom A_home'>
           <a href="/getInTouch"><div  className='hom1 aHom'>Get In Touch</div></a> 
                      <a href="/contact"><div  className='hom1 aHom2'>Get In Touch</div></a> 
            {/* <div  className='hom2'>Get Started</div> */}
          </div>
          </div>
        </div>
         <div className="heroSection2">
                  
          <div className="heroImgHousing hjhj56">
          <img src="/img/Adaer.png" alt=""className="heroImage"/>
          </div>
           
         </div>
      </div>

         <div id="ourService">
       <Card title={title} title1={title1}/>
       </div>

      
       
      {/* <OurServices/> */}
      
      <GetStarted/>
    
<div className='hSec'>
        <div className="addHo1">
         <div className="heroSection2">
          <p className='saveSmart fastInU'>We  innovate and transform your idea</p>
          <div className="heroImgHousing rtn">
            {/* <div></div> */}
            <div className='homePics'>
              <div className='homePics2'></div> 
          <img src="/img/techPics.png" alt=""className="heroImage"/>
          </div>
          </div>
         </div>
        <div className="heroSection1">
          <div className="housingDivForHeroText addHo" >
          <p className='saveSmart fastIn sH'>We innovate and transform your idea.</p>
          <p className='saveSmart1' >We use cutting-edge technology to innovate and transform your ideas into reality. Our team is dedicated to creating impactful solutions, whether it's a new app, a dynamic website, or any tech project. Partner with us to turn your vision into success.</p>
          <div className='hom'>
            <a href="/about"><div  className='hom1'>Explore More: About Us</div></a>
            {/* <div  className='hom2'>Learn More</div> */}
          </div>
          </div>
        </div>
        
      </div>

      </div>
      <Testimony/>

     
      
     
    </div>
  )
}

export default Home