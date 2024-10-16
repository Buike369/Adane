import React from 'react'
import "../styles/career.css"
import Core from  "./corePrinciple"

const Career = () => {
  const careerInput =[{type:"text",placeholder:"",name:"FirstName"},{type:"text",placeholder:"",name:"LastName"},{type:"email",placeholder:"",name:"Email"},{type:"number",placeholder:"",name:"phone"},{type:"file",placeholder:"",name:"Attach Recume/CV"},{type:"text",placeholder:"",name:"Link to your LinkedIn page"}]
  return (
    <div className='polo'>
        <div className='gg'>
          <div className='wd'>
            <div className='XML'>
              <svg xmlns="http://www.w3.org/2000/svg" className="heroImage" version="1.1" viewBox="0 0 700 700" style={{overflow: "hidden", display: "block"}} width="700" height="700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#121728" stop-opacity="1"/><stop offset="100%" stop-color="#2e756d" stop-opacity="1"/></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-57" d="M 236.486568 69.438721 C 244.003875 93.080142 227.010485 118.916402 223.175086 143.425919 C 218.083504 175.962876 232.826653 218.6136 209.996326 242.348679 C 188.626047 264.565849 148.244407 263.971097 117.948962 258.272201 C 84.422999 251.96561 62.171744 214.494461 29.45183 204.841978 C 10.880874 199.363484 -10.597393 197.658671 -29.19407 203.04921 C -64.379284 213.248198 -84.816107 270.022185 -121.138284 265.255841 C -148.2916 261.692673 -153.496134 218.832551 -175.547561 202.592684 C -199.631439 184.856009 -250.888363 195.067049 -258.53607 166.151042 C -270.683181 120.22277 -158.220283 95.959508 -172.57301 50.672007 C -188.77648 -0.455185 -318.132177 52.89566 -326.99735 0 C -333.243906 -37.271202 -271.422004 -56.684527 -235.773913 -69.229468 C -197.539368 -82.684609 -137.769137 -40.5371 -112.993452 -72.616483 C -96.65362 -93.773183 -130.764695 -124.800348 -131.298842 -151.526941 C -131.943163 -183.766238 -128.58128 -219.267304 -113.038571 -247.519943 C -98.160441 -274.564546 -75.649637 -311.270949 -44.78335 -311.47504 C -9.412314 -311.708918 13.16855 -267.521258 34.395621 -239.226799 C 51.825904 -215.993238 50.899448 -178.860705 73.165742 -160.21063 C 87.00259 -148.620994 107.710632 -146.090811 125.732933 -145.103541 C 171.416243 -142.600987 239.815579 -208.420832 262.366976 -168.613018 C 288.652886 -122.213026 170.693517 -97.633531 156.989157 -46.096176 C 153.007979 -31.124345 158.559972 -13.653582 165.880166 -0.000001 C 181.321825 28.801691 226.58381 38.295219 236.486568 69.438721 Z " fill="#2388804f" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"/></g></svg>
            </div>
             {/* <div className='XML1'>
              <svg xmlns="http://www.w3.org/2000/svg" className="heroImage" version="1.1" viewBox="0 0 700 700" style={{overflow: "hidden", display: "block"}} width="700" height="700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#121728" stop-opacity="1"/><stop offset="100%" stop-color="#2e756d" stop-opacity="1"/></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-57" d="M 236.486568 69.438721 C 244.003875 93.080142 227.010485 118.916402 223.175086 143.425919 C 218.083504 175.962876 232.826653 218.6136 209.996326 242.348679 C 188.626047 264.565849 148.244407 263.971097 117.948962 258.272201 C 84.422999 251.96561 62.171744 214.494461 29.45183 204.841978 C 10.880874 199.363484 -10.597393 197.658671 -29.19407 203.04921 C -64.379284 213.248198 -84.816107 270.022185 -121.138284 265.255841 C -148.2916 261.692673 -153.496134 218.832551 -175.547561 202.592684 C -199.631439 184.856009 -250.888363 195.067049 -258.53607 166.151042 C -270.683181 120.22277 -158.220283 95.959508 -172.57301 50.672007 C -188.77648 -0.455185 -318.132177 52.89566 -326.99735 0 C -333.243906 -37.271202 -271.422004 -56.684527 -235.773913 -69.229468 C -197.539368 -82.684609 -137.769137 -40.5371 -112.993452 -72.616483 C -96.65362 -93.773183 -130.764695 -124.800348 -131.298842 -151.526941 C -131.943163 -183.766238 -128.58128 -219.267304 -113.038571 -247.519943 C -98.160441 -274.564546 -75.649637 -311.270949 -44.78335 -311.47504 C -9.412314 -311.708918 13.16855 -267.521258 34.395621 -239.226799 C 51.825904 -215.993238 50.899448 -178.860705 73.165742 -160.21063 C 87.00259 -148.620994 107.710632 -146.090811 125.732933 -145.103541 C 171.416243 -142.600987 239.815579 -208.420832 262.366976 -168.613018 C 288.652886 -122.213026 170.693517 -97.633531 156.989157 -46.096176 C 153.007979 -31.124345 158.559972 -13.653582 165.880166 -0.000001 C 181.321825 28.801691 226.58381 38.295219 236.486568 69.438721 Z " fill="#2388804f" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"/></g></svg>
            </div> */}
            <div className='dw'>
            
            <p className='kln'>Discover Adane's creativity</p>
<p className='viB'>Join our vibrant team in the heart and contribute to projects that impact the global startup scene. Dive into a workplace where your creativity knows no bounds!</p>
</div>
</div>
<div className='wd'>
    <p className='LPE'>Explore Roles<span>,</span>  Discover Your Potential</p>
    <div className='elope'>
<div className='SenR'>
  <p className='JarB'>Senior Java Developer</p>
<p className='Nout'>Join our dynamic team as a Senior Java Developer and unleash your potential. Collaborate, innovate, and make a lasting impact!</p>
</div>

<div className='SenR'>
  <p className='JarB'>Frontend Developer</p>
<p className='Nout'>Join our innovative team as a Frontend Developer. Create stunning user experiences, collaborate with passionate professionals, and elevate your career today!</p>
</div>
<div className='SenR'>
  <p className='JarB'>Backend Developer</p>
<p className='Nout'>Join our talented team as a Backend Developer. Build robust systems, solve complex challenges, and advance your career in a collaborative environment!</p>
</div>
<div className='SenR'>
  <p className='JarB'>Flutter Developer</p>
<p className='Nout'>Join our creative team as a Flutter Developer. Craft beautiful, high-performance applications, collaborate with passionate innovators, and enhance your career journey!"</p>
</div>
<div className='SenR'>
  <p className='JarB'>React-native Developer</p>
<p className='Nout'>Join our innovative team as a React Native Developer. Build cross-platform applications, collaborate with passionate professionals, and advance your career today!</p>
</div>
<div className='SenR'>
  <p className='JarB'>React Developer</p>
<p className='Nout'>Join our dynamic team as a React Developer. Create cutting-edge applications, collaborate with talented peers, and take your career to new heights</p>
</div>

</div>
{/* <div>
  Core principles that define us
</div> */}
<div>
  <Core/>
</div>
</div>

{/* <div className='wd'>
  <p className='MTEa'>Meet Your Future Colleagues</p>
  <p>Carousel</p>
</div> */}
<div className='wd'>
  <p>Contact Us</p>
 
  <div>
    <div className='hK'>
       <p style={{marginBottom:"20px",color:'#e9e9e9c2'}}>Ready to Make a Difference? Apply Now!</p>
    <div className='Map'>
      {careerInput.map((app,id)=>(
      <div key={id}>
        <div className='LabelD'><label className='lUP'>{app.name}</label></div>
        <input type={app.type} className='cePl' placeholder={app.placeholder}/>
      </div>
      ))}
     
   
    </div>
     <div><textarea name="" id="" className='textAr'></textarea></div>
    <div><button className='SummitDR'>Submit</button></div>
    </div>
      <div>
        <p></p>
        <img src="" alt="" />
      </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Career