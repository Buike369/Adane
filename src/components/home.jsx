import React from 'react'
import "../styles/home.css"
import OurServices from './ourServices';
import GetStarted from './getStarted';
import Card from "./card"
import Testimony from "./testimony"

const Home = () => {
  return (
    <div>
      <div className="ahh"></div>
      <div className="heroSection">
        <div className="heroSection1">
          <div className="housingDivForHeroText" >
          <p className='saveSmart'>Easy Savings and Smart Investments.</p>
          <p className='saveSmart1' >Join Amad Assure and take control of your finances with our advanced savings tools and tips.</p>
          <div className='hom A_home'>
            <div  className='hom1'>Get Started</div>
            <div  className='hom2'>Learn More</div>
          </div>
          </div>
        </div>
         <div className="heroSection2">
                  
          <div className="heroImgHousing">
          <img src="/img/main.jpeg" alt=""className="heroImage"/>
          </div>
               <div className='hom A_home1'>
            <div  className='hom1'>Get Started</div>
            <div  className='hom2'>Learn More</div>
          </div>
         </div>
      </div>
       <Card/>

      
       
      {/* <OurServices/> */}
      <GetStarted/>
<div className='hSec'>
        <div className="addHo1">
         <div className="heroSection2">
          <p className='saveSmart fastInU'>Fast Transactions and Easy Investments.</p>
          <div className="heroImgHousing rtn">
          <img src="/img/pwire.webp" alt=""className="heroImage"/>
          </div>
         </div>
        <div className="heroSection1">
          <div className="housingDivForHeroText addHo" >
          <p className='saveSmart fastIn'>Fast Tansactions and Easy Investments.</p>
          <p className='saveSmart1' >We Provide you with easy saving of money,items and investment .</p>
          <div className='hom'>
            <div  className='hom1'>Get Started</div>
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