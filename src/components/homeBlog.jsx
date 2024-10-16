 import React, {useState,useEffect,useRef} from 'react'
import "../styles/homeBlog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


const HomeBlog = () => {
    const scrollDivRef = useRef(null);
    const [count,setCount]= useState(0)
    const [count1,setCount1]= useState(0)
    const [count2,setCount2]= useState(0)

     const card = [{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"}] 

  // Function to log the scrollTop value
  const handleScroll = () => {
    if (scrollDivRef.current) {
      console.log('scrollTop:', scrollDivRef.current.scrollTop);
    }
  };

  // Set up an event listener for the scroll event
  useEffect(() => {
    const div = scrollDivRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

    useEffect(()=>{
        const live = setInterval(()=>{
            setCount((prevC)=>{
             if(prevC >= 5){
                clearInterval(live)
                return prevC;
             }
             return prevC + 1;
            })
         
        },200)
        return ()=> clearInterval(live)
    },[])

      useEffect(()=>{
        const live2 = setInterval(()=>{
            setCount1((prevCo)=>{
             if(prevCo >= 20){
                clearInterval(live2)
                return prevCo;
             }
             return prevCo + 1;
            })
         
        },200)
        return ()=> clearInterval(live2)
    },[])

     useEffect(()=>{
        const live3 = setInterval(()=>{
            setCount2((prevCo)=>{
             if(prevCo >= 7){
                clearInterval(live3)
                return prevCo;
             }
             return prevCo + 1;
            })
         
        },200)
        return ()=> clearInterval(live3)
    },[])
  return (
    <div ref={scrollDivRef}>
        <div className='FaT1'>
        <div className='BlogD'>
            <p className='OuB' >Our Blog</p>
            <p  className='OuB1'  >Most recent articles</p>
            <div className='OuB2'>
                <p className='TL' data-aos="fade-up" data-aos-duration="2000"
             data-aos-easing="linear">The latest news and updates from us.</p>
                <div className='TLB'><a href="/blogs"><div className='VMD'><span className='Tuy' style={{color:"#fff",fontWeight:"500",letterSpacing:'1px'}}>View More</span> <FontAwesomeIcon icon={faArrowRight}  className="" style={{fontSize:"15px",color:"#38e3cb"}} /></div></a></div>
            </div>
            <div className='Mikl'>
                <div className='WR' >
            <div className='RW'>
              {card.map((app,id)=>(
                <div className='blogDivD' key={id}>
                    <div className='blogImgD F'><a href="/">
                    <div className='hk'>
    <p className='hk1'>Interview</p>
    <p className='hk2'>5 best tools for digital marketing</p>
    <div className='kucM'>
    <p className='hk3'>Kingsley Chukwubuike</p>
    <p className='hk4'>Founder and CEO at Adane</p>
    </div>
    <div className='llbb'><img src="/img/bkImg.jpeg" alt="topic description" className='hk5'/></div>
  </div>
                    {/* <img src="/img/blogImg.png" alt=""  className='BID1'/> */}
                    </a></div>
                    {/* <div className='textDD'>inovation</div> */}
                    <div className='IntroDate'>
                        <p className='otro'>{app.tech}</p>
                        <p className='comesd'>{app.date}</p>
                    </div>
                   <a href="/"> <p className='IOP'>{app.subtopic}</p></a>
                    <a href="/"><p className='ppL'>{app.text}</p></a>
                </div>
                ))}
               
              
            </div>
            </div>
            </div>

          
        </div>
        </div>

 
        <div className='FaT'   ref={scrollDivRef} > 
        <div className='BlogD' >
               <div className='shaI' >
            <p className='YFW2'>We're in Number</p>
            <p className='YFW'><span className='TSY'> Key facts </span>and recognitions</p>
            <div className='YF'>
                <div className='LLPNM' >
                    <div className='YFE'> <span className='YFE45'>{count} years</span></div>
                    <p className='YFE1'>on the market</p>
                </div>
                  <div >
                    <div className='YFE'><span className='YFE45'>{count1}+ Projects</span></div>
                    <p className='YFE1'>were delivered by us</p>
                  </div>
                    <div >
                        <div className='YFE'> <span className='YFE45'>{count2}+ people</span></div>
                        <p className='YFE1'>in the company</p>
                    </div>
            </div>
        </div>
        </div>
        </div>


       
    </div>
  )
}

export default HomeBlog;