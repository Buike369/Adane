import React from 'react'
import "../styles/card.css"

const AboutService = ({title,title1}) => {

const WebDevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <rect x="8" y="16" width="48" height="32" fill="#38e3cb" stroke="#2f3a5b" strokeWidth="2" />
    <path d="M10 24h44" stroke="#2f3a5b" strokeWidth="2" />
    <path d="M10 32h44" stroke="#2f3a5b" strokeWidth="2" />
    <rect x="18" y="26" width="4" height="4" fill="#fff" />
    <rect x="42" y="26" width="4" height="4" fill="#fff" />
    <path d="M12 16h40a2 2 0 012 2v1H10v-1a2 2 0 012-2z" fill="#38e3cb" />
  </svg>
);

const MobileAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <rect x="16" y="8" width="32" height="48" fill="#38e3cb" stroke="#2f3a5b" strokeWidth="2" rx="3" />
    <rect x="22" y="12" width="20" height="4" fill="#4CAF50" />
    <path d="M22 24h20" stroke="#333" strokeWidth="2" />
    <path d="M22 32h20" stroke="#333" strokeWidth="2" />
    <path d="M22 40h20" stroke="#333" strokeWidth="2" />
    <rect x="30" y="50" width="4" height="2" fill="#4CAF50" />
  </svg>
);

const UIUXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <rect x="8" y="16" width="48" height="32" fill="#38e3cb" stroke="#2f3a5b" strokeWidth="2" />
    <rect x="12" y="20" width="10" height="10" fill="#4CAF50" />
    <rect x="42" y="20" width="10" height="10" fill="#4CAF50" />
    <rect x="12" y="34" width="10" height="10" fill="#4CAF50" />
    <rect x="42" y="34" width="10" height="10" fill="#4CAF50" />
    <path d="M50 10l-2 2-8-8 2-2a1 1 0 011.414 0l6 6a1 1 0 010 1.414z" fill="#333" />
    <path d="M18 50l-2 2 8-8 2-2-6-6-2-2-8 8 2 2z" fill="#333" />
  </svg>
);

const GraphicDesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <circle cx="16" cy="32" r="12" fill="#ffcc00" />
    <circle cx="32" cy="24" r="5" fill="#ff5733" />
    <circle cx="40" cy="38" r="5" fill="#33c3ff" />
    <circle cx="24" cy="40" r="5" fill="#75ff33" />
    <path d="M50 10l-6 6-8-8 6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z" fill="#333" />
    <path d="M44 46l-4 4-8-8 4-4a1 1 0 011.414 0l8 8a1 1 0 010 1.414z" fill="#333" />
  </svg>
);

const BackendDevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <rect x="12" y="16" width="40" height="32" fill="#38e3cb" stroke="#2f3a5b" strokeWidth="2" />
    <circle cx="16" cy="24" r="2" fill="#333" />
    <circle cx="32" cy="24" r="2" fill="#333" />
    <circle cx="48" cy="24" r="2" fill="#333" />
    <circle cx="16" cy="36" r="2" fill="#333" />
    <circle cx="32" cy="36" r="2" fill="#333" />
    <circle cx="48" cy="36" r="2" fill="#333" />
    <path d="M22 20h20v4H22zm0 8h20v4H22z" fill="#4CAF50" />
    <path d="M10 14h44a2 2 0 012 2v2H8v-2a2 2 0 012-2z" fill="#2f3a5b" />
    <path d="M32 46h-4v6h4v-6z" fill="#4CAF50" />
    <path d="M36 46h-4v6h4v-6z" fill="#4CAF50" />
  </svg>
);

const FrontendDevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64px"
    height="64px"
  >
    <rect width="64" height="64" rx="10" fill="#196b62" />
    <rect x="8" y="16" width="48" height="32" fill="#38e3cb" stroke="#2f3a5b" strokeWidth="2" />
    <rect x="12" y="20" width="40" height="20" fill="#4CAF50" />
    <path d="M16 22h32v4H16zm0 8h32v4H16z" fill="#ffffff" />
    <path d="M10 14h44a2 2 0 012 2v2H8v-2a2 2 0 012-2z" fill="#2f3a5b" />
    <rect x="26" y="52" width="12" height="4" fill="#4CAF50" />
    <path d="M12 50h40a2 2 0 002 2v2H10v-2a2 2 0 002-2z" fill="#2f3a5b" />
  </svg>
);

  return (
    <div className='background-image'>
    <div className='Card'>
        <div className="container cr">
  <p className="container-title">{title}</p>

  <div className="gradient-cards gradient-cards1">
     <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
       
        <div className='vn'><WebDevIcon /></div>
        
        <p className="card-title">Web Development</p>
        <p className="card-description">Our skilled developers craft responsive, high-performance websites that captivate users and drive results. From sleek landing pages to complex e-commerce platforms, we tailor our solutions to fit your goals and audience.</p>
       
      </div>
    </div>
    <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
         <div className='vn'><MobileAppIcon/></div>
         {/* <img src="/img/App.svg" alt="" style={{width:"80px"}} /> */}
        <p className="card-title">Mobile App Development</p>
        <p className="card-description">We design and develop mobile and web applications that are not only functional but also engaging. By integrating the latest technologies and user-centric design principles, we ensure your app stands out in the crowded digital landscape.</p>
        
      </div>
    </div>
    <div className="card">
      <div className="container-card hh">
        <div className='Wen'></div>
       <div className='vn'><UIUXIcon/></div>
       
        <p className="card-title">UI/UX Design</p>
        <p className="card-description">User experience is at the heart of what we do. We focus on creating seamless, intuitive interfaces that provide an exceptional user journey. By combining thoughtful design with user feedback, we enhance the overall interaction between users and your digital products.</p>

      </div>
    </div>

   

    

    <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
            <div className='vn'><GraphicDesignIcon/></div>
         {/* <img src="/img/ui.svg" alt="" style={{width:"80px"}} /> */}
        <p className="card-title">AI Services</p>
        <p className="card-description">Our AI-powered solutions deliver intelligent automation that enhances your business performance. From chatbots and predictive analytics to personalized recommendations, we bring innovative ideas to life with accuracy, speed, and results that speak for themselves.</p>
        
      </div>
    </div>
 <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
                 <div className='vn'><BackendDevIcon/></div>
         
        <p className="card-title">Backend Development</p>
        <p className="card-description">Transform your online presence with our expert backend development services. We provide smooth functionality, strong security, and scalable solutions designed just for you, helping your business succeed in a competitive world. Let’s take your project to the next level.</p>
        
      </div>
    </div>
     <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
     <div className='vn'><FrontendDevIcon/></div>
         
        <p className="card-title">Frontend Development</p>
        <p className="card-description">
Enhance your user experience with our top-notch frontend development services. We create visually stunning, responsive designs that engage users and drive interaction, ensuring your brand stands out. Let's bring your vision to life and captivate your audience.</p>
        
      </div>
    </div>
   
       

  </div>
</div>


    </div>
<div className='Bks'></div>
    </div>
  )
}

export default AboutService;