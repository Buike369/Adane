import React from 'react'
import "../styles/privacy.css"
import withTitle from './title';

const CookiePolicy = () => {
  return (
    <div className='priP'>
        <div className='privacyHousing'>
            <div className='lico'>Cookie Policy</div>
            <div>
              
                <p className='toPros'>At <a href="/" style={{ color:" rgb(255, 255, 255)"}}>Adane Technology </a>, we prioritize transparency, privacy, and the security of our user's data. This Cookie Policy explains how and why we use cookies, what types of cookies we use, and how you can control them when you visit our website or use our mobile applications. By using our website, mobile applications, or other online services, you agree to the use of cookies in accordance with this policy.</p>
            </div>
            <div>
                <p className='InfoCollect'>What Are Cookies?</p>
                <p className='WeUe'>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website or use a mobile app. They are widely used to ensure the proper functioning of websites, enhance user experiences, and provide useful information to website or app operators.</p>
                                <p className='InfoCollect'>Types of Cookies We Use</p>
                <div className='DivGu'>
                <div className='toPros mkil'> <span className='lion'>1.</span>  <p className='toPros'><span className="change">Essential Cookies : </span> These cookies are necessary for our website and mobile applications to function properly. Without these cookies, certain services and features may not be available.
Examples: Session cookies, authentication cookies.</p></div>
                <div className=' mkil'> <span className='lion'>2.</span> <p className='toPros'><span className="change"> Performance and Analytics Cookies : </span>These cookies help us understand how visitors interact with our website and mobile apps by collecting information about page visits, user behavior, and error reports. This data helps us improve the performance, design, and functionality of our services.
Examples: Google Analytics, Hotjar.</p></div>
                <div className=' mkil'> <span className='lion'>3.</span><p className='toPros'><span className="change"> Functionality Cookies : </span> Functionality cookies enable us to remember the preferences and settings of our users, such as language preferences or customized elements of the user interface. This enhances the user experience and provides more personalized services.
Examples: Remembering user login details, saved UI/UX preferences.</p></div>
                 <div className=' mkil'> <span className='lion'>4.</span><p className='toPros'><span className="change"> Advertising and Targeting Cookies : </span>These cookies are used to deliver relevant ads to you on third-party websites or mobile applications based on your interests. They also limit the number of times you see an advertisement and help us measure the effectiveness of our campaigns.
Examples: Facebook Pixel, Google Ads cookies.</p></div>
                </div>
            </div>
            <div>
                <p className='InfoCollect'>How We Use Cookies</p>
                <p className='WeUe'>Adane Technology uses cookies to :</p>
                <div className='DivGu'>
                <p className='toPros mkil'> <span className='lion'>a.</span> Ensure the smooth functioning of our website and mobile applications.</p>
                <p className='toPros mkil'> <span className='lion'>b.</span> Enhance user experience by personalizing content and interfaces.</p>
                <p className='toPros mkil'> <span className='lion'>c.</span> Collect data to improve website/app performance, navigation, and design (UI/UX).</p>
                <p className='toPros mkil'> <span className='lion'>d.</span> Monitor usage trends and analytics for better product development.</p>
                <p className='toPros mkil'> <span className='lion'>e.</span> Deliver targeted advertisements relevant to our users.</p>
                </div>
            </div>
                           
            <div>
                 <p className='InfoCollect'>Third-Party Cookies</p>
                <p className='WeUe'>We may allow third-party service providers to place cookies on your device to provide us with better insights into the usage of our services. These third parties may collect information about your online activities across different websites and services. Please note that these third-party cookies are subject to the third party’s privacy policies, not ours.</p>
               </div>
              <div>
                <p className='InfoCollect'>Your Control Over Cookies</p>
                <p  className='WeUe'>You have the option to control and manage cookies in your browser or device settings. You can:</p>
                                <div className='DivGu'>
                <p  className='toPros mkil'> <span className='lion'>a.</span> Accept or reject cookies.</p>
                <p  className='toPros mkil'> <span className='lion'>b.</span> Delete all cookies stored on your device.</p>
                <p  className='toPros mkil'> <span className='lion'>c.</span> Set your browser to prevent cookies from being stored.</p>
            </div>
                   <p  className='WeUe'>However, please note that disabling cookies may affect the functionality and performance of our website and mobile applications.</p>
            </div>

             <div>
               
                                <p className='InfoCollect'>How to Manage Cookies</p>
                <div className='DivGu'>
                <div className='toPros mkil'> <span className='lion'>1.</span>  <p className='toPros'><span className="change">Browser Settings : </span> You can manage or disable cookies through your browser settings. For more information on how to do this, visit your browser’s help section.</p></div>
                <div className=' mkil'> <span className='lion'>2.</span> <p className='toPros'><span className="change"> Mobile App Settings:  </span>Most mobile devices allow you to control cookies through the device settings or within the app itself.</p></div>
               
                </div>
            </div>
            <div>
                <p className='InfoCollect'>Changes to This Policy</p>
                <p  className='toPros'>Adane Technology may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this policy periodically to stay informed about how we use cookies.</p>
            </div>
          
          
            <div>
                <p className='InfoCollect'>Contact Us</p>
                <p className='toPros'>If you have any questions or concerns about our use of cookies,  please Email us :<span>  <a href="mailto:chukwubuikekingsley369@gmail.com" className='' style={{color:"#fff"}}>chukwubuikekingsley369@gmail.com</a></span> </p>
               
            </div>
        </div>
    </div>
  )
}

export default withTitle(CookiePolicy, 'Cookie Policy of - Adane Technology');