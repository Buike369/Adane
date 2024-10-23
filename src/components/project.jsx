import React, {useState,useEffect,useRef} from 'react'
import "../styles/homeBlog.css"
import "../styles/project.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


const Projects = () => {
    const scrollDivRef = useRef(null);
    const [count,setCount]= useState(0)
    const [count1,setCount1]= useState(0)
    const [count2,setCount2]= useState(0)

      

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
        <div className='FaT1' style={{paddingBottom:"30px",paddingTop:"20px",background: "linear-gradient(rgb(8 11 24), rgb(9 18 29), rgb(9 17 29))"}}>
        <div className='BlogD'>
            <p className='OuB' style={{color:"#ffffff"}} data-aos="fade-down" data-aos-duration="500"
             data-aos-easing="linear">Our Portfolio</p>
            
            <div className='OuB2'>
                <p className='TL' data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">Please take a look at the projects we have successfully delivered.</p>
                <div className='TLB'><a href="/blogs"><div className='VMD'><span className='Tuy' style={{color:"#fff",fontWeight:"500",letterSpacing:'1px'}}>View More</span> <FontAwesomeIcon icon={faArrowRight}  className="" style={{fontSize:"15px",color:"#38e3cb"}} /></div></a></div>
            </div>
            <div className='Mikl'>
                <div className='WR' >
            <div className='RW' data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">

                <div className='blogDivD'>
                    
                    <article className="card1">
  
  <div className='likki'></div>
  <div className="Eme">
    <div className=" ">
      <h2 className="card1__title">Ecommerce</h2>
      <p className="card1__description">
Ecommerce website designed by Adane Tech.
      </p>
    </div>
    <button className="btnB">Preview</button>
  </div>
</article>
                  
                </div>
                  <div className='blogDivD'>
                   
               
                    <article className="card1">
  
  <div className='likki'></div>
  <div className="Eme">
    <div className=" ">
      <h2 className="card1__title">Ecommerce</h2>
      <p className="card1__description">
Ecommerce website designed by Adane Tech.
      </p>
    </div>
    <button className="btnB">Preview</button>
  </div>
</article>
                  
                </div>
             <div className='blogDivD'>
                   
   
                    <article className="card1">
  
  <div className='likki'></div>
  <div className="Eme">
    <div className="">
      <h2 className="card1__title">Ecommerce</h2>
      <p className="card1__description">
Ecommerce website designed by Adane Tech.
      </p>
    </div>
    <button className="btnB">Preview</button>
  </div>
</article>
                  
                </div>
            </div>
            </div>
            </div>

          
        </div>
        </div>

 
        <div className='FaT'   ref={scrollDivRef} > 
        
        </div>


       
    </div>
  )
}

export default Projects