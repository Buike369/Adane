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
        {/* <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"></rect>
          <path d="M74.2105 36C73.373 36 72.5698 35.6839 71.9776 35.1213C71.3853 34.5587 71.0526 33.7956 71.0526 33C71.0526 32.2044 71.3853 31.4413 71.9776 30.8787C72.5698 30.3161 73.373 30 74.2105 30H86.8421C87.6796 30 88.4829 30.3161 89.0751 30.8787C89.6673 31.4413 90 32.2044 90 33V45C90 45.7956 89.6673 46.5587 89.0751 47.1213C88.4829 47.6839 87.6796 48 86.8421 48C86.0046 48 85.2014 47.6839 84.6091 47.1213C84.0169 46.5587 83.6842 45.7956 83.6842 45V40.242L65.3905 57.621C64.7983 58.1834 63.9953 58.4994 63.1579 58.4994C62.3205 58.4994 61.5175 58.1834 60.9253 57.621L52.1053 49.242L35.3905 65.121C34.7949 65.6675 33.9972 65.9699 33.1693 65.963C32.3413 65.9562 31.5492 65.6407 30.9637 65.0845C30.3782 64.5282 30.0461 63.7758 30.0389 62.9892C30.0317 62.2026 30.35 61.4448 30.9253 60.879L49.8726 42.879C50.4648 42.3166 51.2679 42.0006 52.1053 42.0006C52.9426 42.0006 53.7457 42.3166 54.3379 42.879L63.1579 51.258L79.219 36H74.2105ZM36.3158 78V87C36.3158 87.7957 35.9831 88.5587 35.3909 89.1213C34.7986 89.6839 33.9954 90 33.1579 90C32.3204 90 31.5171 89.6839 30.9249 89.1213C30.3327 88.5587 30 87.7957 30 87V78C30 77.2043 30.3327 76.4413 30.9249 75.8787C31.5171 75.3161 32.3204 75 33.1579 75C33.9954 75 34.7986 75.3161 35.3909 75.8787C35.9831 76.4413 36.3158 77.2043 36.3158 78ZM52.1053 66C52.1053 65.2043 51.7726 64.4413 51.1803 63.8787C50.5881 63.3161 49.7849 63 48.9474 63C48.1098 63 47.3066 63.3161 46.7144 63.8787C46.1222 64.4413 45.7895 65.2043 45.7895 66V87C45.7895 87.7957 46.1222 88.5587 46.7144 89.1213C47.3066 89.6839 48.1098 90 48.9474 90C49.7849 90 50.5881 89.6839 51.1803 89.1213C51.7726 88.5587 52.1053 87.7957 52.1053 87V66ZM64.7368 69C65.5744 69 66.3776 69.3161 66.9698 69.8787C67.562 70.4413 67.8947 71.2043 67.8947 72V87C67.8947 87.7957 67.562 88.5587 66.9698 89.1213C66.3776 89.6839 65.5744 90 64.7368 90C63.8993 90 63.0961 89.6839 62.5039 89.1213C61.9117 88.5587 61.5789 87.7957 61.5789 87V72C61.5789 71.2043 61.9117 70.4413 62.5039 69.8787C63.0961 69.3161 63.8993 69 64.7368 69ZM83.6842 57C83.6842 56.2044 83.3515 55.4413 82.7593 54.8787C82.1671 54.3161 81.3638 54 80.5263 54C79.6888 54 78.8856 54.3161 78.2933 54.8787C77.7011 55.4413 77.3684 56.2044 77.3684 57V87C77.3684 87.7957 77.7011 88.5587 78.2933 89.1213C78.8856 89.6839 79.6888 90 80.5263 90C81.3638 90 82.1671 89.6839 82.7593 89.1213C83.3515 88.5587 83.6842 87.7957 83.6842 87V57Z" fill="#54E8A9"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4565" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.7"></stop>
              <stop offset="0.505208" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="#363437" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg> */}
        <div className='vn'><WebDevIcon /></div>
        {/* <img src="/img/web.svg" alt="" style={{width:"80px"}} /> */}
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
         {/* <img src="/img/ui.svg" alt="" style={{width:"80px"}} /> */}
        <p className="card-title">UI/UX Design</p>
        <p className="card-description">User experience is at the heart of what we do. We focus on creating seamless, intuitive interfaces that provide an exceptional user journey. By combining thoughtful design with user feedback, we enhance the overall interaction between users and your digital products.</p>

      </div>
    </div>

   

    

    <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
            <div className='vn'><GraphicDesignIcon/></div>
         {/* <img src="/img/ui.svg" alt="" style={{width:"80px"}} /> */}
        <p className="card-title">Graphic Design</p>
        <p className="card-description">Our creative team delivers eye-catching graphic design solutions that communicate your brand’s message effectively. From logos and marketing materials to social media graphics, we bring your vision to life with style and precision.</p>
        
      </div>
    </div>
 <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
                 <div className='vn'><BackendDevIcon/></div>
         {/* <img src="/img/ui.svg" alt="" style={{width:"80px"}} /> */}
        <p className="card-title">Backend Development</p>
        <p className="card-description">Transform your online presence with our expert backend development services. We provide smooth functionality, strong security, and scalable solutions designed just for you, helping your business succeed in a competitive world. Let’s take your project to the next level.</p>
        
      </div>
    </div>
     <div className="card">
      <div className="container-card hh">
         <div className='Wen'></div>
     <div className='vn'><FrontendDevIcon/></div>
         {/* <img src="/img/ui.svg" alt="" style={{width:"80px"}} /> */}
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