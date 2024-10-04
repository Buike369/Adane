import React from 'react'
import "../styles/blogDetails.css"

const Blogdetails = () => {

     const blogNews=[{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""}]
  return (
    <div>
        <div className='qew'>
            <div className='blogHeaderDetails'>
            <p className='qew1'>Healthcare</p>
            <p className='qew2'>Revolutionizing Healthcare : kingsley samuel journey with AI</p>
            </div>
            <div className='blogHeaderDetails'>
                <div className="bHDDiv">
                <div>
                    <div><img src="" alt="" /></div>
                    <div>
                        <p>Kingsley Chukwubuike</p>
                        <p>CEO at Adane</p>
                    </div>
                </div>
                <div><p>Monday, Aug 19, 2024</p></div>
                <div><p>Social Links</p></div>
                </div>
            </div>

            <div className='blogHeaderDetails'>
                <div>
                    <p>Let’s explore new opportunities together</p>
                    <p>We are dedicated to finding the best solution for you. Your idea, combined with our expertise and experience, will lead us to success. Are you ready?</p>
                    <div>Get In Touch</div>
                </div>
                <div>
                    <p>In today’s edition of Bright Founders Talk, we explore the innovative intersection of technology and healthcare. This time, we focus on the inspiring journey of Thomas Knox, Founder and CEO of VitVio. His company is pioneering the use of artificial intelligence and computer vision to transform surgical procedures, driving significant improvements in efficiency and precision. Through this article, we’ll dive into how Knox and his team are shaping the future of healthcare technology, offering insights into the challenges and breakthroughs that come with leading a cutting-edge company.

Thomas brings a wealth of experience, having played a pivotal role in scaling multiple startups into billion-dollar enterprises. Before his ambitious venture with VitVio, he was instrumental in expanding Kiwi.com and pioneering innovations at iFi, setting benchmarks in the autonomous store space. In our interview, Thomas shares his journey from the ground up, revealing how personal reflections and profound experiences shaped his entrepreneurial spirit and led him to redefine operational efficiencies in healthcare.

With a passion for impactful innovation, Thomas discusses how VitVio revolutionizes the medical field by streamlining surgical procedures, thereby improving safety and fostering continuous learning. Join us as we explore how Thomas Knox's leadership at VitVio is not just about technological advancement, but a quest to significantly enhance the quality of healthcare delivery, making an indelible mark on the industry.</p>
<div><img src="" alt="" /></div>
<p>Thomas Knox: Pioneering the Future of Healthcare with AI and a Vision for Greater Impact</p>
<p>Thomas Knox, the Founder and CEO of VitVio, isn't just about groundbreaking ideas; he's about making those ideas matter deeply. In his journey from startup whiz to healthcare innovator, Thomas has transitioned from helping hyper-growth startups soar in value to enhancing life-saving efficiencies in surgery rooms. It's not just the tech that excites him; it's the potential to significantly alter how healthcare functions. "At VitVio, we're not just installing cameras, we're crafting a new vision for healthcare efficiency," Thomas explains, highlighting the company's focus on deploying AI-driven systems to improve both safety and operational flow in surgical environments.</p>
                </div>
            </div>


            <div>
                <div className='blogHeaderDetails'>
                <p className=''>Discover More Captivating Success Stories:</p>
                </div>
            </div> <div className='lili'>
            <div className='lom'>
             <div className='RW DEfer'>
             

                {blogNews.map((app,id)=>(
                 <div className='blogDivD  M' key={id}>
                    <div className='blogImgD F'><a href="/"><img src="/img/blogImg.png" alt=""  className='BID1'/></a></div>
                    <div className='IntroDate'>
                        <p className='otro'>intro</p>
                        <p className='comesd'>26/09/2024</p>
                    </div>
                   
                    <a href="/"><p className='IOP'>{app.tittle}</p></a>
                    <a href="/"><p className='ppL'>{app.text}</p></a>
                </div>
                ))}
                 
              
               
              
            </div> 
            </div>
            </div>
        </div>

    </div>
  )
}

export default Blogdetails