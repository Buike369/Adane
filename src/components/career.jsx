import React from 'react'
import "../styles/career.css"
import Core from  "./corePrinciple"

const Career = () => {
  const careerInput =[{type:"text",placeholder:"",name:"FirstName"},{type:"text",placeholder:"",name:"LastName"},{type:"email",placeholder:"",name:"Email"},{type:"number",placeholder:"",name:"phone"},{type:"file",placeholder:"",name:"Attach Recume/CV"},{type:"text",placeholder:"",name:"Link to your LinkedIn page"}]
  return (
    <div>
        <div className='gg'>
          <div className='wd'>
            <div className='dw'>
            <p className='kln'>Welcome to Adane
Where Ideas Thrive!</p>
<p>Join our vibrant team in the heart and contribute to projects that impact the global startup scene. Dive into a workplace where your creativity knows no bounds!</p>
</div>
</div>
<div className='wd'>
    <p className='LPE'>Explore open positions and discover where you can shine!</p>
    <div className='elope'>
<div>
  <p className='JarB'>Senior Java Developer</p>
<p className='Nout'>Join our dynamic team as a Senior Java Developer and unleash your potential. Collaborate, innovate, and make a lasting impact!</p>
</div>

<div>
  <p className='JarB'>Frontend developer</p>
<p className='Nout'>Join our innovative team as a Frontend Developer. Create stunning user experiences, collaborate with passionate professionals, and elevate your career today!</p>
</div>
<div>
  <p className='JarB'>Backend developer</p>
<p className='Nout'>Join our talented team as a Backend Developer. Build robust systems, solve complex challenges, and advance your career in a collaborative environment!</p>
</div>
<div>
  <p className='JarB'>flutter developer</p>
<p className='Nout'>Join our creative team as a Flutter Developer. Craft beautiful, high-performance applications, collaborate with passionate innovators, and enhance your career journey!"</p>
</div>
<div>
  <p className='JarB'>React-native developer</p>
<p className='Nout'>Join our innovative team as a React Native Developer. Build cross-platform applications, collaborate with passionate professionals, and advance your career today!</p>
</div>
<div>
  <p className='JarB'>React developer</p>
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

<div className='wd'>
  <p>Meet Your Future Colleagues</p>
  <p>Carousel</p>
</div>
<div className='wd'>
  <p>Contact Us</p>
  <p>Ready to Make a Difference? Apply Now!</p>
  <div>
    <div className='hK'>
    <div className='Map'>
      {careerInput.map((app,id)=>(
      <div key={id}>
        <div><label className='lUP'>{app.name}</label></div>
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