import React,{useEffect} from 'react'
import "../styles/about.css"
import Card from "./aboutService"
import 'aos/dist/aos.css'
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GetStarted from './aboutText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import withTitle from './title';
import Testimony1 from "./testimony"

const About = () => {
  const title = "What We Do"

    const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,

      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
       partialVisibilityGutter: 80,
      slidesToSlide: 1 // optional, default to 1.
    }
  }


   const ButtonOne =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowLeft}   style={{fontSize:"15px"}} /></div>
  )
}

const ButtonTwo =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div>
  )
};

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
     
    </div>
  );
};

useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])

  return (
    <div>
     

      <div className='hSec'>
        <div className="addHo1 jjj">
         <div className="heroSection2">
          <p className='saveSmart fastInU'>We  innovate and transform your idea</p>
          <div className=" rtnlo">
            {/* <div></div> */}
            <div className='uyi'>
          
          <img src="/img/try1.jpg" alt=""className="heroImage lmki bnv"/>
          </div>
          </div>
         </div>
        <div className="heroSection1">
          <div className="housingDivForHeroText addHo hoAdd" >
          <p className='saveSmart fastIn sH sM rrg Usa Asu'>About Us</p>
          <p className='saveSmart1 sh1 sh6' > Welcome to <a href="/"  style={{color:"#2f3a5b"}}>Adane Technology</a>. We specialize in web development, app creation, and graphic design, blending technical expertise with artistic vision to turn your digital dreams into reality.</p>
           <p className="OurM rrg">Mission</p>
            <p className="saveSmart1 sh6"> Our mission is to empower businesses by crafting innovative web solutions, intuitive mobile apps, and captivating designs. We blend creativity with technology to deliver seamless user experiences and visually striking interfaces, helping our clients thrive in the digital world.</p>
            
           
          </div>
        </div>
        
      </div>

      </div>

<Card title={title}/>
        <GetStarted/>

<div className='meetDiv'>
      <div className='MeetTeam'>
        <div className='MeetTeam1'>
          <p className='MT'>Meet Our Team</p>
          <p className='MT3'>Awesome  People </p>
           <p className='MT3'>Behinds Us</p>
           <p className='ThAre'>These are the team behind this wonderful success of this project</p>
          <p className=''></p>
        </div>
        <div className='MeetTeam2'>
           {/* <div className='MeetTeam3'> */}
         
                    <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive2}
   arrows={false} 
   renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
   partialVisible={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
> 

            <div className=' l2 go'>
              <img src="/img/bkImg.jpeg" alt="learn.PNG" className='ls'/>
              <div className='ran'>
              <p className='mr'>Mr Chukwubuike Kingsley</p>
              <p className='mr1'>CEO</p>
              </div>
            </div>
            <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mr Samuel Dominic</p>
               <p className='mr1'>CTO</p>
               </div>
            </div>
             <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Software Developer</p>
               </div>
            </div>
             <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Product Manager</p>
               </div>
            </div>
              <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>UX/UI Designer</p>
               </div>
            </div>
                  <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Quality Assurance(QA)</p>
               </div>
            </div>
                  <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>DevOps Engineer</p>
               </div>
            </div>
                  <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Marketing Manager</p>
               </div>
            </div>
                   <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Sales Representative</p>
               </div>
            </div>
                   <div className='l2 go'>
               <img src="/img/learn.PNG" alt="learn.PNG" className='ls'/>
               <div>
               <p className='mr'>Mrs Chika Nwaokorie</p>
               <p className='mr1'>Customer Support Specialist</p>
               </div>
            </div>
             
            </Carousel>
              {/* </div> */}
        
        </div>
     
      </div>
      </div>

      <Testimony1/>


      
    </div>
  )
}

export default withTitle(About, 'About Us | Adane Technology');