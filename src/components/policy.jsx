import React from 'react'
import "../styles/privacy.css"
import withTitle from './title';

const Policy = () => {
  return (
    <div className='priP'>
        <div className='privacyHousing'>
            <div className='lico'>Privacy Policy</div>
            <div>
              
                <p className='toPros'>Welcome to <a href="/" style={{ color:"#2f3a5b)"}}>Adane Technology </a>. We are committed to protecting your privacy and ensuring your personal information is secure. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and services, including web and app development solutions.</p>
            </div>
            <div>
                <p className='InfoCollect'>Information We Collect</p>
                <p className='WeUe'>We collect various types of information to provide and improve our services:</p>
                <div className='DivGu'>
                    <div className='toPros mkil'> <span className='lion'>1.</span>  <p className='toPros'><span className="change">Personal Information : </span> This includes your name, email address, phone number, and any other details you provide when contacting us or using our services.</p></div>
<div className='toPros mkil'> <span className='lion'>2.</span>  <p className='toPros'><span className="change"> Usage Data : </span>  We collect data about how you use our website and services, including IP addresses, browser types, and pages visited.</p></div>
<div className='toPros mkil'> <span className='lion'>3.</span>  <p className='toPros'><span className="change"> Cookies : </span> We use cookies and similar technologies to enhance your experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p></div>
               
                </div>
            </div>
            <div>
                <p className='InfoCollect'> How We Use Your Information</p>
                <p className='WeUe'>We use your information for the following purposes:</p>
                <div className='DivGu'>
                    <div className='toPros mkil'> <span className='lion'>a.</span>  <p className='toPros'><span className="change"> To Provide Services : </span> To deliver and support our web and app development solutions.</p></div>
                    <div className='toPros mkil'> <span className='lion'>b.</span>  <p className='toPros'><span className="change"> To Communicate : </span> To respond to your inquiries, send updates, and provide information related to our services.</p></div>
                    <div className='toPros mkil'> <span className='lion'>c.</span>  <p className='toPros'><span className="change"> To Improve Our Services: </span> To analyze usage data and enhance our offerings.</p></div>
                    <div className='toPros mkil'> <span className='lion'>d.</span>  <p className='toPros'><span className="change">To Comply with Legal Obligations : </span> To adhere to legal requirements and protect our rights.</p></div>
               
                </div>
            </div>
            <div>
                <p className='InfoCollect'>How We Share Your Information</p>
                <p  className='WeUe'>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                                <div className='DivGu'>
                                     <div className='toPros mkil'> <span className='lion'>a.</span>  <p className='toPros'><span className="change">With Service Providers : </span> We may engage third-party vendors to assist with website hosting, payment processing, and other services. These providers are obligated to protect your information.</p></div>
                                      <div className='toPros mkil'> <span className='lion'>b.</span>  <p className='toPros'><span className="change">For Legal Reasons : </span> We may disclose your information if required by law or to protect our rights and the safety of others.</p></div>
               
            </div></div>
            <div>
                <p className='InfoCollect'>Data Security</p>
                <p  className='toPros'>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
            </div>
            <div>
                <p className='InfoCollect'>Your Rights</p>
                <p>You have the following rights regarding your personal information:</p>
                  <div className='DivGu'>
                     <div className='toPros mkil'> <span className='lion'>1.</span>  <p className='toPros'><span className="change"> Access : </span>You can request access to the information we hold about you.</p></div>
                      <div className='toPros mkil'> <span className='lion'>2.</span>  <p className='toPros'><span className="change">Correction : </span> You can request corrections to any inaccurate or incomplete information.</p></div>
                       <div className='toPros mkil'> <span className='lion'>3.</span>  <p className='toPros'><span className="change"> Deletion : </span> You can request the deletion of your personal information, subject to legal and contractual obligations.</p></div>
                        <div className='toPros mkil'> <span className='lion'>4.</span>  <p className='toPros'><span className="change">Opt-Out : </span> You can opt out of receiving marketing communications from us by following the unsubscribe instructions provided in those communications.</p></div>
                
                  </div>
            </div>
            <div>
                <p className='InfoCollect'>Changes to This Privacy Policy</p>
                <p className='toPros'>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
            </div>
            <div>
                <p className='InfoCollect'>Contact Us</p>
                <p className='toPros'>If you have any questions or concerns about this Privacy Policy or our data practices, please Email us :<span>  <a href="mailto:chukwubuikekingsley369@gmail.com" className='' style={{color:"#2f3a5b"}}>adanetechnology@gmail.com</a></span> </p>
               
            </div>
        </div>
    </div>
  )
}

export default withTitle(Policy, 'Privacy Policy of - Adane Technology');