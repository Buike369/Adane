import React, {useState,useEffect} from 'react'
import "../styles/homeBlog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


const HomeBlog = () => {
    const [count,setCount]= useState(0)
    const [count1,setCount1]= useState(0)
    const [count2,setCount2]= useState(0)

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
    <div>
        <div className='FaT1'>
        <div className='BlogD'>
            <p className='OuB'>Our Blog</p>
            <p  className='OuB1'>Most recent articles</p>
            <div className='OuB2'>
                <p className='TL'>The latest news, greatest tutorials and inspiration that’ll make you say “I wish I’d done that!”</p>
                <div className='TLB'><a href="/blogs"><div className='VMD'><span className='Tuy' style={{color:"#fff",fontWeight:"500",letterSpacing:'1px'}}>View More</span> <FontAwesomeIcon icon={faArrowRight}  className="" style={{fontSize:"15px",color:"#38e3cb"}} /></div></a></div>
            </div>
            <div className='Mikl'>
                <div className='WR'>
            <div className='RW'>
                <div className='blogDivD'>
                    <div className='blogImgD F'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    {/* <div className='textDD'>inovation</div> */}
                    <div className='IntroDate'>
                        <p className='otro'>intro</p>
                        <p className='comesd'>26/09/2024</p>
                    </div>
                    <p className='IOP'>Internet of Things in Retail Market: Use Cases, Benefits and Challenges</p>
                    <p className='ppL'>IoT in retail is becoming a real worldwide trend! Learn</p>
                </div>
                 <div className='blogDivD'>
                    <div className='blogImgD F'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    {/* <div className='textDD'>inovation</div> */}
                    <div className='IntroDate'>
                        <p className='otro'>intro</p>
                        <p className='comesd'>26/09/2024</p>
                    </div>
                    <p className='IOP'>Internet of Things in Retail Market: Use Cases, Benefits and Challenges</p>
                    <p className='ppL'>IoT in retail is becoming a real worldwide trend! Learn</p>
                </div>
                <div className='blogDivD'>
                    <div className='blogImgD F'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    {/* <div className='textDD'>inovation</div> */}
                    <div className='IntroDate'>
                        <p className='otro'>intro</p>
                        <p className='comesd'>26/09/2024</p>
                    </div>
                    <p className='IOP'>Internet of Things in Retail Market: Use Cases, Benefits and Challenges</p>
                    <p className='ppL'>IoT in retail is becoming a real worldwide trend! Learn</p>
                </div>
            </div>
            </div>
            </div>

          
        </div>
        </div>
        <div className='FaT'> 
        <div className='BlogD'>
               <div className='shaI'>
            <p className='YFW2'>We're in Number</p>
            <p className='YFW'><span className='TSY'> Key facts </span>and recognitions</p>
            <div className='YF'>
                <div className='LLPNM'>
                    <div className='YFE'> <span className='YFE45'>{count} years</span></div>
                    <p className='YFE1'>on the market</p>
                </div>
                  <div>
                    <div className='YFE'><span className='YFE45'>{count1}+ Projects</span></div>
                    <p className='YFE1'>were delivered by us</p>
                  </div>
                    <div>
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