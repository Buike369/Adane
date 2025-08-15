import React,{useEffect} from 'react'
import "../styles/card.css"
import AOS from 'aos';

const Card = ({title,title1}) => {

   useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])
  return (
    <div className='background-image' id="service" >
    <div className='Card'  >
        <div className="container">
  <p className="container-title" data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">{title}</p>
<div className='like'>
  <div className="gradient-cards">
     <div className="card vn" data-aos="zoom-in" data-aos-duration="500"
             data-aos-easing="linear" >
      <div className="container-card bg-white-box">
         <div className='Wen'></div>
        
                <img src="/img/web.svg" alt="" style={{width:"80px"}} />
        <p className="card-title">Web Development</p>
        <p className="card-description aa">Boost your business with our web development good services.</p>
        <a href="/getInTouch"><button className='SeeMoreB'>{title1}</button></a>
      </div>
    </div>
    <div className="card vn" data-aos="zoom-in" data-aos-duration="500"
             data-aos-easing="linear" >
      <div className="container-card bg-yellow-box">
         <div className='Wen'></div>
        
                <div className='vn'><img src="/img/App.svg" alt="" style={{width:"80px"}} /></div>
        <p className="card-title">Mobile App Development</p>
        <p className="card-description aa">We create seamless functionality and  user-friendly interfaces for business.</p>
         <a href="/getInTouch"><button className='SeeMoreB'>{title1}</button></a>
      </div>
    </div>
    <div className="card vn" data-aos="zoom-in" data-aos-duration="500"
             data-aos-easing="linear" >
      <div className="container-card bg-green-box">
        <div className='Wen'></div>
        
        <img src="/img/ui.svg" alt="" style={{width:"80px"}} />
        
        <p className="card-title">UI/UX Design</p>
        <p className="card-description aa">We enhance user experience seamlessly with streamlined design.</p>
         <a href="/getInTouch"><button className='SeeMoreB'>{title1}</button></a>
      </div>
    </div>

   

    

    <div className="card vn" data-aos="zoom-in" data-aos-duration="500"
             data-aos-easing="linear" >
      <div className="container-card bg-blue-box">
         <div className='Wen'></div>
        
                <img src="/img/ui.svg" alt="" style={{width:"80px"}} />
        <p className="card-title">AI Services</p>
        <p className="card-description aa">We deliver innovation, intelligent automation and insights through powerful AI solutions.</p>
         <a href="/getInTouch"><button className='SeeMoreB'>{title1}</button></a>
      </div>
    </div>

    
       

  </div>
  </div>
</div>


    </div>
<div className='Bks'></div>
    </div>
  )
}

export default Card;