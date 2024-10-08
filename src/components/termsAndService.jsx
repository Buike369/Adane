import React from 'react'
import "../styles/privacy.css"
import withTitle from './title';

const TermsAndService = () => {
  return (
    <div className='priP'>
        <div className='privacyHousing'>
                        <div className='lico'>Terms And Condition</div>
            <p className='toPros'>Welcome to Adane Technology. These Terms and Conditions govern your use of our website and services, including web and app development solutions. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services.</p>
            <div>
                <p className='InfoCollect' >Services</p>
                <p className='toPros'>Adane Technology provides web and app development services, including custom web development, mobile app development, UX/UI design, e-commerce solutions, and ongoing maintenance and support.</p>
            </div>
            <div>
                <p className='InfoCollect'>User Responsibilities</p>
                <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>1.</span> Eligibility: You must be at least 18 years old or have the consent of a parent or guardian to use our service.</p>
                <p className='toPros mkil'> <span className='lion'>2.</span> Accuracy: You agree to provide accurate and complete information when contacting us or using our services.</p>
                <p className='toPros mkil'> <span className='lion'>3.</span> Use of Services: You agree to use our services for lawful purposes only and in accordance with any applicable laws and regulations.</p>
                </div>
            </div>
            <div>
                <p  className='InfoCollect'>Intellectual Property</p>
                 <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>1.</span> Ownership: All content, trademarks, and intellectual property rights related to our website and services are owned by Adane Tech or our licensors.</p>
                <p className='toPros mkil'> <span className='lion'>2.</span> License: We grant you a limited, non-exclusive, non-transferable license to access and use our services for your personal or business use.</p>
                </div>

            </div>
            <div>
                <p className='InfoCollect'> Payment and Fees</p>
                <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>1.</span> Payment Terms: Fees for our services will be outlined in the service agreement or proposal provided to you. Payment terms and conditions will be specified in the agreement.</p>
                <p className='toPros mkil'> <span className='lion'>2.</span> Late Payments: Late payments may incur additional charges or interest, as specified in the service agreement.</p>
                </div>
            </div>
            <div>
                <p className='InfoCollect'>Confidentiality</p>
                 <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>1.</span> Confidential Information: Both parties agree to keep any confidential information exchanged during the course of providing our services confidential and not to disclose it to third parties without prior written consent.</p>
                </div>
            </div>
            <div>
                <p className='InfoCollect'>Limitation of Liability</p>
                 <div className='DivGu'>
                <p  className='toPros mkil'> <span className='lion'>1.</span> Disclaimer: Our services are provided "as is" and we make no warranties or representations about the accuracy, reliability, or completeness of the services or any content.</p>
                <p  className='toPros mkil'> <span className='lion'>2.</span> Liability: To the maximum extent permitted by law, Adane Tech is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of profits, data, or business opportunities.</p>
                </div>
            </div>
            <div>
                <p className='InfoCollect'>Termination</p>
                    <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>1.</span> Termination by Us: We may suspend or terminate your access to our services if you violate these terms or engage in unlawful conduct.</p>
                
                <p className='toPros mkil'> <span className='lion'>2.</span> Termination by You: You may terminate our services by providing written notice as specified in the service agreement.</p>
                </div>
            </div>
            <div>
                <p className='InfoCollect'>Governing Law</p>
                <p className='toPros'>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Your Jurisdiction].</p>
            </div>
         <div>
            <p  className='InfoCollect'>
                Changes to Terms
            </p>
            <p className='toPros'>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the updated terms.</p>
         </div>
         <div>
            <p className='InfoCollect'>Contact Us</p>
            <p className='toPros'>For any questions or concerns regarding these Terms and Conditions, please contact us. </p>
           
         </div>
        </div>
    </div>
  )
}

export default withTitle(TermsAndService, 'Terms and Condition Of - Adane Technology');