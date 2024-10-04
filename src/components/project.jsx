import React, {useState,useEffect,useRef} from 'react'
import "../styles/homeBlog.css"
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
        <div className='FaT1' style={{paddingBottom:"30px",paddingTop:"20px",background: "linear-gradient(180deg, #09141f, #0b1a24, #080b18)"}}>
        <div className='BlogD'>
            <p className='OuB' >Our Projects</p>
            
            <div className='OuB2'>
                <p className='TL'>Please take a look at the projects we have successfully delivered.</p>
                <div className='TLB'><a href="/blogs"><div className='VMD'><span className='Tuy' style={{color:"#fff",fontWeight:"500",letterSpacing:'1px'}}>View More</span> <FontAwesomeIcon icon={faArrowRight}  className="" style={{fontSize:"15px",color:"#38e3cb"}} /></div></a></div>
            </div>
            <div className='Mikl'>
                <div className='WR'>
            <div className='RW'>

                <div className='blogDivD'>
                    <div className='prBord'>
                    <div className='blogImgD F'><a href="/"><img src="/img/dvd1.PNG" alt=""  className=' ghg'/></a></div>
                  
                    <div className='IntroDate'>
                        <p className='lllx'>Ecommerce</p>
                        <a href=""><p className='otro' style={{color:"#fff"}}>Preview</p></a>
                    </div>
                    </div>
                  
                </div>
                 <div className='blogDivD'>
                     <div className='prBord'>
                    <div className='blogImgD F'><a href="/"><img src="/img/dvd1.PNG" alt=""  className='BID1'/></a></div>
                   
                    <div className='IntroDate'>
                        <p className='lllx'>Blog</p>
                        <a href=""><p className='otro' style={{color:"#fff"}}>Preview</p></a>
                    </div>
                    </div>
                   
                </div>
                <div className='blogDivD'>
                     <div className='prBord'>
                    <div className='blogImgD F'><a href="/"><img src="/img/dvd1.PNG" alt=""  className='BID1'/></a></div>
                   
                    <div className='IntroDate'>
                        <p className='lllx'>Portfolio</p>
                        <a href=""><p className='otro' style={{color:"#fff"}}>preview</p></a>
                    </div>
                    </div>

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