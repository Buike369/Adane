import React from 'react'
import "../styles/privacy.css"
import withTitle from './title';

const  Disclaimer= () => {
  return (
    <div className='priP'>
        <div className='privacyHousing'>
            <div className='lico'>
Disclaimer</div>
            <div>
              
                <p className='toPros'>Welcome to <a href="/" style={{ color:"#2f3a5b"}}>Adane Technology </a>. This disclaimer outlines the limitations of liability and responsibilities related to the use of our website, mobile applications, and any services offered by Adane Technology. Please read this disclaimer carefully before using our services or accessing our content. By engaging with us, you agree to the terms outlined here.</p>
            </div>
            <div>
                <p className='InfoCollect'><span>1. </span> General Information</p>
                <p className='WeUe'>Adane Technology provides web and mobile application development, as well as UI/UX design services. All content on this website and associated platforms is for general information purposes only. While we strive to offer accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, or reliability of the content provided</p>
               
            </div>
            <div>
                <p className='InfoCollect'><span>2. </span> Professional Advice</p>
                <p className='WeUe'>The information provided on our website or through our services does not constitute professional advice. While we offer services related to software development and design, any decisions made based on information from our website, blog posts, tutorials, or any other communication are solely at your own risk. Always seek professional advice when implementing or interpreting technical information.</p>
                
            </div>
            <div>
                <p className='InfoCollect'><span>3. </span> Third-Party Links and Resources</p>
                <p  className='WeUe'>Our website or applications may contain links to third-party websites, plugins, or services that are not owned or controlled by Adane Technology. We are not responsible for the content, privacy policies, or practices of any third-party websites. Accessing such third-party content is at your own risk.</p>
                     
            </div>
            <div>
                <p className='InfoCollect'><span>4. </span> Limitation of Liability</p>
                <p  className='toPros'>To the fullest extent permitted by applicable law, Adane Technology and its employees, partners, or affiliates will not be liable for any indirect, incidental, special, or consequential damages that result from the use of, or inability to use, our services, website, or applications. This includes, but is not limited to, errors, omissions, or interruptions in our services, or loss of data, revenue, or profits.</p>
            </div>
            <div>
                <p className='InfoCollect'> <span>5. </span> Service Availability</p>
                <p>We make reasonable efforts to ensure that our services are available 24/7. However, we do not guarantee uninterrupted access to our services. Adane Technology may temporarily suspend or discontinue services for maintenance or other reasons without prior notice.</p>
                 
            </div>
               <div>
                <p className='InfoCollect'> <span>6. </span> Intellectual Property</p>
                <p className='toPros'>All content, code, design, logos, and graphics on our website and mobile applications are the property of Adane Technology, unless otherwise stated. You may not reproduce, redistribute, or modify our content without explicit written permission from us.</p>
            </div>
            <div>
                <p className='InfoCollect'><span>7. </span> Updates to Disclaimer</p>
                <p className='toPros'>Adane Technology reserves the right to update this disclaimer at any time without prior notice. We encourage you to review this page periodically for any changes.</p>
            </div>
            <div>
                <p className='InfoCollect'><span>8. </span> Contact Us</p>
                <p className='toPros'> you have any questions or concerns regarding this disclaimer or our services, please Email us :<span>  <a href="mailto:chukwubuikekingsley369@gmail.com" className='' style={{color:"#2f3a5b"}}>adanetechnology@gmail.com</a></span> </p>
               
            </div>
        </div>
    </div>
  )
}

export default withTitle( Disclaimer, ' Disclaimer of - Adane Technology');

