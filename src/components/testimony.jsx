import React,{useState} from 'react'
import "../styles/testimony.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"
const Testimony = () => {
      const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  // const [show4,setShow4]= useState(false)
  // const [show5,setShow5]= useState(false)
  const [show6,setShow6]= useState(false)
  const [show7,setShow7]= useState(false)

  const drop =()=>{
     setShow(!show)
     setShow1(false)
     setShow2(false)
     setShow3(false)
    //  setShow4(false)
    //  setShow5(false)
     setShow6(false)
     setShow7(false)
  }
  const drop1 =()=>{
    setShow(false)
    setShow1(!show1)
    setShow2(false)
    setShow3(false)

    setShow6(false)
    setShow7(false)
    
  }
  const drop2 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(!show2)
    setShow3(false)

    setShow6(false)
    setShow7(false)
    
  }
  const drop3 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
  
    setShow6(false)
    setShow7(false)
  }
 
  const drop6 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    // setShow4(false)
    // setShow5(false)
    setShow6(!show6)
    setShow7(false)
  }
  const drop7 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    // setShow4(false)
    // setShow5(false)
    setShow6(false)
    setShow7(!show7)
  }

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

  return (
    <div className="testimonyDiv">
        <div className="WhatD">
         <div className="Rtme">
        {/* <div className='TheyAre' data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">They are talking about us</div> */}
          <div className='DonTake' data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">What Our Customers Say</div>
          <div className='seeWhat' data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">Discover why our clients love working with us! Read their testimonials and see how we’ve made a difference for them</div>
         {/* <div className="divUnder1"></div> */}
         <div className=" marginMu fadama " data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
         <Carousel
  swipeable={true}
  draggable={false}
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
  containerClass="carousel-container"
  removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <div className='sHe1'></div>
  <img src="/img/eme1.svg" alt="" className='sHe'/>
  <p className="partnerShip">"Adane Tech transformed our vision into a stunning, functional app."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-John Nwachukwu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 10px"}}>           
<div className="earnSayPp">
  <img src="/img/eme1.svg" alt="" className='sHe'/>
  <p className="partnerShip">"Innovative solutions and seamless support. Adane Tech delivers excellence"</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka  Lisy</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <img src="/img/eme1.svg" alt="" className='sHe'/>
  <p className="partnerShip">"Adane Tech made our project shine,with top-notch design and development."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Stanley Ifeanyi</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <img src="/img/eme1.svg" alt="" className='sHe'/>
  <p className="partnerShip">"Exceptional web development that truly elevated our online presence."</p>
  <div className="favourPath">
    <div><img src="/img/create.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwuma chioma</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>





                   {/* <div style={{padding:"0 10px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span className="chibi" >How do I start to save</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                  To start saving  follow the steps in get started above.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span className="chibi">How I start to invest?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 to start investment sign up with us read about the service you want to invest and deposit from you dashboard.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span className="chibi"> What are the requirement for creating an account? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                Click the market button on the header and go through forex section to see recommended brokers
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span className="chibi"> What are the subscription plans for logistics saving? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 need feed back reply
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
           
          
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop6}>
                <span className="chibi"> How does the real Estate work? </span>
                <span className="IconSpace">
                  {show6? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show6 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  Needs feed back reply.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop7}>
                <span className='chibi'> What are benefits of choosing Amad assure saving?</span>
                <span className="IconSpace">
                  {show7? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show7 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 need feed back reply.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          </div> */}
          </div>  
     

        
      </div>
  
    </div>
  )
}

export default Testimony