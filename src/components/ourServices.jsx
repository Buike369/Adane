import React from 'react';
import '../styles/ourServices.css'; // Import the CSS file for styling

const OurServices = () => {
    return (
        <div className='serV'>
        <section id="services">
            <h1>Our Services</h1>
         <div className='flex-container'>  
            <div className="service-category">
                <h2> AgriBusiness</h2>
                <ul>
                    <li><strong>Cassava Flour Production:</strong> High-quality, nutritious flour derived from premium cassava.</li>
                    <li><strong>Animal Feed Production:</strong> Nutritionally balanced feed to support healthy livestock.</li>
                </ul>
                <button>Get Started</button>
            </div>
            
            <div className="service-category">
                <h2> Real Estate</h2>
                <ul>
                    <li><strong>Land/Property Sales & Development:</strong> Assistance in buying, selling, and developing land and properties.</li>
                    <li><strong>Building Construction:</strong> Expert services for residential and commercial construction projects.</li>
                </ul>
                  <button>Get Started</button>
            </div>
            
            <div className="service-category">
                <h2>Financial Services</h2>
                <ul className='eme'>
                    <li><strong>Savings Solutions:</strong> Tailored savings plans to secure your financial future.</li>
                    <li><strong>Bright Future Fund:</strong> Investment opportunities aimed at long-term financial growth.</li>
                    <li><strong>Food/Household Appliances:</strong> Financing options for essential household items.</li>
                    <li><strong>Collaborative Contribution:</strong> Group investment schemes for mutual benefit.</li>
                    <li><strong>Thriving Investment:</strong> Strategies and opportunities for robust investment growth.</li>
                </ul>
                  <button>Read more</button>
            </div>
            
            <div className="service-category">
                <h2>Logistics</h2>
                <ul>
                    <li><strong>Dispatch Bikes Delivery:</strong> Quick and dependable delivery services using dispatch bikes.</li>
                </ul>
                  <button>Get Started</button>
            </div>
            
            <div className="service-category">
                <h2>Amad Water</h2>
                <ul>
                    <li><strong>Bottled/Sachet Water:</strong> Purified water available in bottles and sachets for your convenience.</li>
                </ul>
                  <button>Get Started</button>
            </div>
            
            <div className="service-category">
                <h2>Mobile Gas Station</h2>
                <ul>
                    <li><strong>Delivery Gas Motor:</strong> On-the-go gas delivery directly to your location.</li>
                </ul>
                  <button>Get Started</button>
            </div>
            
            <div className="service-category">
                <h2> Renaissance Foundation</h2>
                <ul>
                    <li><strong>Empowering Generations:</strong> Programs and initiatives focused on education and personal development for a better future.</li>
                </ul>
                  <button>Get Started</button>
            </div>
  </div> 
        </section>
        </div>
    );
};

export default OurServices;
