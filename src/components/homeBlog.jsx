import React from 'react'
import "../styles/homeBlog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


const HomeBlog = () => {
  return (
    <div>
        <div className='FaT1'>
        <div className='BlogD'>
            <p className='OuB'>Our Blog</p>
            <p  className='OuB1'>Most recent articles</p>
            <div className='OuB2'>
                <p className='TL'>The latest news, greatest tutorials and inspiration that’ll make you say “I wish I’d done that!”</p>
                <div className='TLB'><a href="/blogs"><div className='VMD'><span className='Tuy'>view More</span> <FontAwesomeIcon icon={faArrowRight}  className="" style={{fontSize:"15px",color:"#38e3cb"}} /></div></a></div>
            </div>
            <div className='Mikl'>
                <div className='WR'>
            <div className='RW'>
                <div className='blogDivD'>
                    <div className='blogImgD'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    <div className='textDD'>inovation</div>
                    <p className='IOP'>Internet of Things in Retail Market: Use Cases, Benefits and Challenges</p>
                    <p className='ppL'>IoT in retail is becoming a real worldwide trend! Learn</p>
                </div>
                 <div className='blogDivD'>
                    <div className='blogImgD'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    <div className='textDD'>inovation</div>
                    <p className='IOP'>Internet of Things in Retail Market: Use Cases, Benefits and Challenges</p>
                    <p className='ppL'>IoT in retail is becoming a real worldwide trend! Learn</p>
                </div>
                <div className='blogDivD'>
                    <div className='blogImgD'><img src="/img/blogImg.png" alt=""  className='BID1'/></div>
                    <div className='textDD'>inovation</div>
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
                    <div className='YFE'> <span className='YFE45'>5 years</span></div>
                    <p className='YFE1'>on the market</p>
                </div>
                  <div>
                    <div className='YFE'><span className='YFE45'>20+ Projects</span></div>
                    <p className='YFE1'>were delivered by us</p>
                  </div>
                    <div>
                        <div className='YFE'> <span className='YFE45'>7+ people</span></div>
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