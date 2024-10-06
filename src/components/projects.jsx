import React from 'react'
import "../styles/allblogs.css"

const Projects = () => {

    const blogNews=[{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""},{img:"",tittle:"Internet of Things in Retail Market: Use Cases, Benefits and Challenges",text:"IoT in retail is becoming a real worldwide trend! Learn",date:""}]
  return (
    <div>
        <div className='GBD4'>
            <p className=''>Home/<span className='comesd'>Bright foundation</span></p>
            <p className='BRFou'>Bright Founders Talk</p>
            <div className='BlogDet'>
                <div className='BlogDet1'> <img src="/img/blogk.jpg" alt=""  className='yuri'/></div>
                <div className='BlogDet2'>
                    <div className='IntroDate'>
                        <p className='otro'>intro</p>
                        <p className='comesd'>26/09/2024</p>
                    </div>
                    <p className='detailHeaderBl'>Celebrating bright founder: the hero behind our success</p>
                    <p className='comesd'>Becoming a CEO is not really easy to say, it hard work energy skill commitment love passion and the will desire to move ahead</p>
                </div>
            </div>

           

        </div>
        <div className='lili'>
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
  )
}

export default Projects