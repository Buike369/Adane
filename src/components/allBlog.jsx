import React from 'react'
import "../styles/allblogs.css"
import Pag from "./pagination"

const AllBlog = () => {

    const blogNews=[{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"},{subtopic:"5 best digital marketing tools",caption:"5 best tools for digital marketing",tech:"Digital Marketing",text:'The  best tools for your digital marketing will depend on your strategy',date:"10/16/2024"}]
  return (
    <div>
        <div className='GBD4'>
            <p className=''>Home/<span className='comesd'>Bright foundation</span></p>
            <p className='BRFou'>Bright Founders Talk</p>
            <div className='BlogDet'>
                <div className='BlogDet1'>
                     <img src="/img/blogk.jpg" alt=""  className='yuri'/>
                     </div>
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

        <div className="LTB">Latest Blog</div>

        <div className='lili'>
            <div className='lom'>
             <div className='RW DEfer'>
             

                {blogNews.map((app,id)=>(
                 <div className='blogDivD  M' key={id}>
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
                    </a></div>
                    <div className='IntroDate'>
                        <p className='otro'>{app.tech}</p>
                        <p className='comesd'>{app.date}</p>
                    </div>
                   
                    <a href="/"><p className='IOP'>{app.subtopic}</p></a>
                    <a href="/"><p className='ppL'>{app.text}</p></a>
                </div>
                ))}
                 
              
               
              
            </div> 
            </div>
            </div>
            {/* <Pag/> */}
    </div>
  )
}

export default AllBlog