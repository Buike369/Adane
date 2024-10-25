import React, {useEffect,useState} from 'react'
import "../styles/home.css"
import OurServices from './ourServices';
// import GetStarted from './getStarted';
import GetStarted from './aboutInfo';
import Card from "./card"
import Testimony from "./testimony";
import 'aos/dist/aos.css'
import AOS from 'aos';
import Slide from "./slides"
import HomeBlog from './homeBlog';
import Project from "./project"



const Home = () => {
const title = "Our Services"
const title1 = "Get In Touch"

const [openIndex, setOpenIndex] = useState(null);

const faqs = [
    {
      question: "What services does Adane Technology offer?",
      answer: "We specializes in web  and mobile application development. Our services include creating web development, mobile app development, UI/UX design, consulting and project management, and maintenance and support."
    },
    {
      question: "Why should I choose Adane for my project?",
      answer: "Adane is known for  its expertise in delivering innovative, high-quality web and mobile app solutions that bridge the virtual and physical worlds, meeting modern business needs efficiently."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with a diverse range of industries, including e-commerce, healthcare, finance, education, entertainment, startups, and more."
    },
    
    {
      question: "Can you develop both web and mobile applications?",
      answer: "Yes! We develop both web applications using React and mobile applications using React Native, allowing for a cohesive user experience across platforms."
    },
    
    {
      question: "How do you approach a new project?",
      answer: "Our process typically involves  Initial consultation to understand your needs, Proposal and project scope definition, Design and development phases,Testing and quality assurance,Launch and post-launch support."
    },
   
    // Add more FAQs as needed
  ];
const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


   useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])

  return (
    <div >
      <div className="ahh"></div>
      <div className="heroSection">
        <div className="heroBackColor"></div>
        <div className="heroSection1">
          <div className="housingDivForHeroText" >
          <p className='saveSmart'>Creating <span className='Digital'>Digital</span> Solutions</p>
          <p className='saveSmart1 rate' >We create web and mobile app that turn your ideas into reality,sparking innovations and achieving success.</p>
          <div className='hom A_home'>
           <a href="/contact"><div  className='hom1 aHom'>Get In Touch</div></a> 
                      <a href="/contact"><div  className='hom1 aHom2'>Get In Touch</div></a> 
            {/* <div  className='hom2'>Get Started</div> */}
          </div>
          </div>
        </div>
         <div className="heroSection2">
                  
          <div className="heroImgHousing hjhj56">
            <svg xmlns="http://www.w3.org/2000/svg" className="heroImage lp10" style={{opacity:"0.9",transform:'rotate(60deg)'}} version="1.1"   viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ffflurry-grad" gradientTransform="rotate(270)"><stop stop-color="#080b18" stop-opacity="1" offset="0%"></stop><stop stop-color="#151b2d" stop-opacity="1" offset="45%"></stop><stop stop-color="#2e756d" stop-opacity="1" offset="100%"></stop></linearGradient></defs><rect width="100%" height="100%" fill="#080b18"></rect><g fill="url(#ffflurry-grad)"><rect width="288" height="2" x="236" y="697" rx="1" transform="rotate(137, 380, 698)" opacity="0.35"></rect><rect width="150" height="2" x="227" y="386" rx="1" transform="rotate(137, 302, 387)" opacity="0.11"></rect><rect width="613" height="2" x="-224.5" y="361" rx="1" transform="rotate(137, 82, 362)" opacity="0.68"></rect><rect width="306" height="2" x="363" y="202" rx="1" transform="rotate(137, 516, 203)" opacity="0.53"></rect><rect width="173" height="2" x="313.5" y="610" rx="1" transform="rotate(137, 400, 611)" opacity="0.14"></rect><rect width="611" height="2" x="-260.5" y="150" rx="1" transform="rotate(137, 45, 151)" opacity="0.58"></rect><rect width="72" height="2" x="607" y="43" rx="1" transform="rotate(137, 643, 44)" opacity="0.80"></rect><rect width="500" height="2" x="-100" y="462" rx="1" transform="rotate(137, 150, 463)" opacity="0.43"></rect><rect width="215" height="2" x="228.5" y="773" rx="1" transform="rotate(137, 336, 774)" opacity="0.16"></rect><rect width="357" height="2" x="353.5" y="130" rx="1" transform="rotate(137, 532, 131)" opacity="0.31"></rect><rect width="273" height="2" x="147.5" y="87" rx="1" transform="rotate(137, 284, 88)" opacity="0.84"></rect><rect width="203" height="2" x="197.5" y="583" rx="1" transform="rotate(137, 299, 584)" opacity="0.52"></rect><rect width="735" height="2" x="312.5" y="626" rx="1" transform="rotate(137, 680, 627)" opacity="0.11"></rect><rect width="470" height="2" x="155" y="301" rx="1" transform="rotate(137, 390, 302)" opacity="0.63"></rect><rect width="221" height="2" x="388.5" y="41" rx="1" transform="rotate(137, 499, 42)" opacity="0.92"></rect><rect width="384" height="2" x="458" y="155" rx="1" transform="rotate(137, 650, 156)" opacity="0.45"></rect><rect width="186" height="2" x="364" y="766" rx="1" transform="rotate(137, 457, 767)" opacity="0.32"></rect><rect width="138" height="2" x="403" y="453" rx="1" transform="rotate(137, 472, 454)" opacity="0.49"></rect><rect width="496" height="2" x="434" y="464" rx="1" transform="rotate(137, 682, 465)" opacity="0.16"></rect><rect width="524" height="2" x="-147" y="51" rx="1" transform="rotate(137, 115, 52)" opacity="0.25"></rect><rect width="124" height="2" x="173" y="745" rx="1" transform="rotate(137, 235, 746)" opacity="0.78"></rect><rect width="71" height="2" x="599.5" y="384" rx="1" transform="rotate(137, 635, 385)" opacity="0.40"></rect><rect width="194" height="2" x="326" y="221" rx="1" transform="rotate(137, 423, 222)" opacity="0.18"></rect><rect width="189" height="2" x="329.5" y="526" rx="1" transform="rotate(137, 424, 527)" opacity="0.70"></rect><rect width="616" height="2" x="321" y="546" rx="1" transform="rotate(137, 629, 547)" opacity="0.08"></rect><rect width="180" height="2" x="370" y="341" rx="1" transform="rotate(137, 460, 342)" opacity="0.15"></rect><rect width="449" height="2" x="535.5" y="350" rx="1" transform="rotate(137, 760, 351)" opacity="0.67"></rect><rect width="317" height="2" x="101.5" y="173" rx="1" transform="rotate(137, 260, 174)" opacity="0.47"></rect><rect width="217" height="2" x="194.5" y="694" rx="1" transform="rotate(137, 303, 695)" opacity="0.57"></rect><rect width="451" height="2" x="50.5" y="464" rx="1" transform="rotate(137, 276, 465)" opacity="0.50"></rect><rect width="600" height="2" x="244" y="521" rx="1" transform="rotate(137, 544, 522)" opacity="0.94"></rect><rect width="278" height="2" x="450" y="673" rx="1" transform="rotate(137, 589, 674)" opacity="0.89"></rect><rect width="138" height="2" x="648" y="61" rx="1" transform="rotate(137, 717, 62)" opacity="0.21"></rect><rect width="622" height="2" x="-263" y="464" rx="1" transform="rotate(137, 48, 465)" opacity="0.54"></rect><rect width="165" height="2" x="695.5" y="88" rx="1" transform="rotate(137, 778, 89)" opacity="0.65"></rect><rect width="108" height="2" x="529" y="73" rx="1" transform="rotate(137, 583, 74)" opacity="0.96"></rect><rect width="528" height="2" x="-69" y="215" rx="1" transform="rotate(137, 195, 216)" opacity="0.51"></rect><rect width="587" height="2" x="310.5" y="458" rx="1" transform="rotate(137, 604, 459)" opacity="0.07"></rect><rect width="62" height="2" x="349" y="425" rx="1" transform="rotate(137, 380, 426)" opacity="0.69"></rect><rect width="352" height="2" x="19" y="283" rx="1" transform="rotate(137, 195, 284)" opacity="0.48"></rect><rect width="153" height="2" x="493.5" y="311" rx="1" transform="rotate(137, 570, 312)" opacity="0.55"></rect><rect width="194" height="2" x="122" y="534" rx="1" transform="rotate(137, 219, 535)" opacity="0.45"></rect><rect width="146" height="2" x="600" y="287" rx="1" transform="rotate(137, 673, 288)" opacity="0.98"></rect><rect width="280" height="2" x="437" y="371" rx="1" transform="rotate(137, 577, 372)" opacity="0.43"></rect><rect width="364" height="2" x="-119" y="678" rx="1" transform="rotate(137, 63, 679)" opacity="0.53"></rect><rect width="99" height="2" x="-12.5" y="43" rx="1" transform="rotate(137, 37, 44)" opacity="0.46"></rect><rect width="277" height="2" x="446.5" y="178" rx="1" transform="rotate(137, 585, 179)" opacity="0.31"></rect><rect width="94" height="2" x="176" y="34" rx="1" transform="rotate(137, 223, 35)" opacity="0.26"></rect><rect width="443" height="2" x="306.5" y="409" rx="1" transform="rotate(137, 528, 410)" opacity="0.98"></rect><rect width="280" height="2" x="479" y="238" rx="1" transform="rotate(137, 619, 239)" opacity="0.36"></rect><rect width="403" height="2" x="-30.5" y="115" rx="1" transform="rotate(137, 171, 116)" opacity="0.31"></rect><rect width="210" height="2" x="-49" y="269" rx="1" transform="rotate(137, 56, 270)" opacity="0.90"></rect><rect width="298" height="2" x="192" y="187" rx="1" transform="rotate(137, 341, 188)" opacity="0.54"></rect><rect width="414" height="2" x="553" y="454" rx="1" transform="rotate(137, 760, 455)" opacity="0.62"></rect><rect width="495" height="2" x="-121.5" y="192" rx="1" transform="rotate(137, 126, 193)" opacity="0.86"></rect><rect width="95" height="2" x="460.5" y="265" rx="1" transform="rotate(137, 508, 266)" opacity="0.28"></rect><rect width="569" height="2" x="467.5" y="564" rx="1" transform="rotate(137, 752, 565)" opacity="0.63"></rect><rect width="616" height="2" x="-160" y="585" rx="1" transform="rotate(137, 148, 586)" opacity="0.32"></rect><rect width="204" height="2" x="210" y="247" rx="1" transform="rotate(137, 312, 248)" opacity="0.74"></rect><rect width="466" height="2" x="478" y="116" rx="1" transform="rotate(137, 711, 117)" opacity="0.99"></rect><rect width="116" height="2" x="457" y="608" rx="1" transform="rotate(137, 515, 609)" opacity="0.54"></rect><rect width="260" height="2" x="245" y="38" rx="1" transform="rotate(137, 375, 39)" opacity="0.09"></rect><rect width="517" height="2" x="-66.5" y="377" rx="1" transform="rotate(137, 192, 378)" opacity="0.47"></rect><rect width="189" height="2" x="160.5" y="324" rx="1" transform="rotate(137, 255, 325)" opacity="0.47"></rect><rect width="111" height="2" x="640.5" y="376" rx="1" transform="rotate(137, 696, 377)" opacity="0.59"></rect><rect width="628" height="2" x="287" y="759" rx="1" transform="rotate(137, 601, 760)" opacity="0.94"></rect><rect width="89" height="2" x="714.5" y="261" rx="1" transform="rotate(137, 759, 262)" opacity="0.73"></rect><rect width="424" height="2" x="261" y="692" rx="1" transform="rotate(137, 473, 693)" opacity="0.39"></rect><rect width="138" height="2" x="-24" y="583" rx="1" transform="rotate(137, 45, 584)" opacity="0.08"></rect><rect width="116" height="2" x="110" y="705" rx="1" transform="rotate(137, 168, 706)" opacity="0.76"></rect><rect width="97" height="2" x="404.5" y="131" rx="1" transform="rotate(137, 453, 132)" opacity="0.72"></rect><rect width="550" height="2" x="468" y="183" rx="1" transform="rotate(137, 743, 184)" opacity="0.35"></rect><rect width="478" height="2" x="82" y="313" rx="1" transform="rotate(137, 321, 314)" opacity="0.92"></rect><rect width="542" height="2" x="-210" y="762" rx="1" transform="rotate(137, 61, 763)" opacity="0.36"></rect><rect width="256" height="2" x="615" y="18" rx="1" transform="rotate(137, 743, 19)" opacity="0.73"></rect><rect width="291" height="2" x="229.5" y="125" rx="1" transform="rotate(137, 375, 126)" opacity="0.50"></rect><rect width="541" height="2" x="468.5" y="726" rx="1" transform="rotate(137, 739, 727)" opacity="0.62"></rect></g></svg>
          <img src="/img/Adaer.png" alt=""className="heroImage lp9"/>
        

          </div>
           <div className="heroImgHousing hjhj562">
            <svg xmlns="http://www.w3.org/2000/svg" className="heroImage" version="1.1" viewBox="0 0 700 700" style={{overflow: "hidden", display: "block"}} width="700" height="700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#121728" stop-opacity="1"/><stop offset="100%" stop-color="#2e756d" stop-opacity="1"/></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-57" d="M 236.486568 69.438721 C 244.003875 93.080142 227.010485 118.916402 223.175086 143.425919 C 218.083504 175.962876 232.826653 218.6136 209.996326 242.348679 C 188.626047 264.565849 148.244407 263.971097 117.948962 258.272201 C 84.422999 251.96561 62.171744 214.494461 29.45183 204.841978 C 10.880874 199.363484 -10.597393 197.658671 -29.19407 203.04921 C -64.379284 213.248198 -84.816107 270.022185 -121.138284 265.255841 C -148.2916 261.692673 -153.496134 218.832551 -175.547561 202.592684 C -199.631439 184.856009 -250.888363 195.067049 -258.53607 166.151042 C -270.683181 120.22277 -158.220283 95.959508 -172.57301 50.672007 C -188.77648 -0.455185 -318.132177 52.89566 -326.99735 0 C -333.243906 -37.271202 -271.422004 -56.684527 -235.773913 -69.229468 C -197.539368 -82.684609 -137.769137 -40.5371 -112.993452 -72.616483 C -96.65362 -93.773183 -130.764695 -124.800348 -131.298842 -151.526941 C -131.943163 -183.766238 -128.58128 -219.267304 -113.038571 -247.519943 C -98.160441 -274.564546 -75.649637 -311.270949 -44.78335 -311.47504 C -9.412314 -311.708918 13.16855 -267.521258 34.395621 -239.226799 C 51.825904 -215.993238 50.899448 -178.860705 73.165742 -160.21063 C 87.00259 -148.620994 107.710632 -146.090811 125.732933 -145.103541 C 171.416243 -142.600987 239.815579 -208.420832 262.366976 -168.613018 C 288.652886 -122.213026 170.693517 -97.633531 156.989157 -46.096176 C 153.007979 -31.124345 158.559972 -13.653582 165.880166 -0.000001 C 181.321825 28.801691 226.58381 38.295219 236.486568 69.438721 Z " fill="#2388804f" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"/></g></svg>
           {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns_xlink="http://www.w3.org/1999/xlink" className="heroImage" viewBox="0 0 700 700" style="overflow: hidden; display: block;" width="700" height="700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#121728" stop-opacity="1"></stop><stop offset="100%" stop-color="#2e756d" stop-opacity="1"></stop></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-57" d="M 236.486568 69.438721 C 244.003875 93.080142 227.010485 118.916402 223.175086 143.425919 C 218.083504 175.962876 232.826653 218.6136 209.996326 242.348679 C 188.626047 264.565849 148.244407 263.971097 117.948962 258.272201 C 84.422999 251.96561 62.171744 214.494461 29.45183 204.841978 C 10.880874 199.363484 -10.597393 197.658671 -29.19407 203.04921 C -64.379284 213.248198 -84.816107 270.022185 -121.138284 265.255841 C -148.2916 261.692673 -153.496134 218.832551 -175.547561 202.592684 C -199.631439 184.856009 -250.888363 195.067049 -258.53607 166.151042 C -270.683181 120.22277 -158.220283 95.959508 -172.57301 50.672007 C -188.77648 -0.455185 -318.132177 52.89566 -326.99735 0 C -333.243906 -37.271202 -271.422004 -56.684527 -235.773913 -69.229468 C -197.539368 -82.684609 -137.769137 -40.5371 -112.993452 -72.616483 C -96.65362 -93.773183 -130.764695 -124.800348 -131.298842 -151.526941 C -131.943163 -183.766238 -128.58128 -219.267304 -113.038571 -247.519943 C -98.160441 -274.564546 -75.649637 -311.270949 -44.78335 -311.47504 C -9.412314 -311.708918 13.16855 -267.521258 34.395621 -239.226799 C 51.825904 -215.993238 50.899448 -178.860705 73.165742 -160.21063 C 87.00259 -148.620994 107.710632 -146.090811 125.732933 -145.103541 C 171.416243 -142.600987 239.815579 -208.420832 262.366976 -168.613018 C 288.652886 -122.213026 170.693517 -97.633531 156.989157 -46.096176 C 153.007979 -31.124345 158.559972 -13.653582 165.880166 -0.000001 C 181.321825 28.801691 226.58381 38.295219 236.486568 69.438721 Z " fill="url(#two-3)" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"></path></g></svg>  */}
          {/* <img src="/img/sssplatter.svg" alt=""className="heroImage"/> */}
          {/* url(#two-3) */}
          </div>
           
         </div>
      </div>
  

  <Slide/>
  

   

      
       
      {/* <OurServices/> */}
      
      

    
<div className='hSec' >
        <div className="addHo1" >
         <div className="heroSection2" data-aos="zoom-in" data-aos-duration="500"
             data-aos-easing="linear">
          <p className='saveSmart fastInU' >We  innovate and transform your idea</p>
          <div className="heroImgHousing rtn">
            {/* <div></div> */}
            <div className='homePics'>
              <div className='homePics2'></div> 
          <img src="/img/techPics.png" alt=""className="heroImage"/>
          </div>
          </div>
         </div>
        <div className="heroSection1" data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">
          <div className="housingDivForHeroText addHo" >
          <p className='saveSmart fastIn sH' >We Transform Your Idea.</p>
          <p className='saveSmart1'  >We use cutting-edge technology to innovate and transform your ideas into reality. Our team is dedicated to creating impactful solutions, whether it's a new app, a dynamic website, or any tech project. Partner with us to turn your vision into success.</p>
          <div className='hom'>
            <a href="/about"><div  className='hom1'>Explore More: About Us</div></a>
            {/* <div  className='hom2'>Learn More</div> */}
          </div>
          </div>
        </div>
        
      </div>

      </div>

      <div >

      <GetStarted/>
     </div>

       <div id="ourService" >
       <Card title={title} title1={title1}  />
       </div>

       



 <Project/>

 {/* <div>
  <div className='hk'>
    <p className='hk1'>Interview</p>
    <p className='hk2'>5 best tools for digital marketing</p>
    <div className='kucM'>
    <p className='hk3'>Kingsley Chukwubuike</p>
    <p className='hk4'>Founder and CEO at Adane</p>
    </div>
    <div className='llbb'><img src="/img/bkImg.jpeg" alt="topic description" className='hk5'/></div>
  </div>
 </div> */}
            
      <HomeBlog/>
      
      <Testimony/>
 
 <div className='fffA'>
       <div className="faq-container">
      <div className='trmen' data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">Frequently Asked Questions (FAQ)</div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <div className='FaqQ'>{faq.question}</div>
            <span style={{color:"#fff",marginLeft:"5px",fontSize:"18px"}}>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p className='fA'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
      
     
    </div>
  )
}

export default Home