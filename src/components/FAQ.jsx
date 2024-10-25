import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Adane Technology offer?",
      answer: "We specializes in web and mobile application development. Our services include custom web development, mobile app development, UI/UX design, consulting and project management, and maintenance and support."
    },
    {
      question: "Why should I choose React for my project?",
      answer: "React is known for its speed, efficiency, and flexibility. It allows for rapid development with reusable components, enhanced performance through a virtual DOM, and a strong community and ecosystem for ongoing support."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with a diverse range of industries, including e-commerce, healthcare, finance, education, entertainment, startups, and more."
    },
    ,
    {
      question: "Can you develop both web and mobile applications?",
      answer: "Yes! We develop both web applications using React and mobile applications using React Native, allowing for a cohesive user experience across platforms."
    },
    ,
    {
      question: "How do you approach a new project?",
      answer: "Our process typically involves  Initial consultation to understand your needs,Proposal and project scope definition,Design and development phases,Testing and quality assurance,Launch and post-launch support"
    },
    ,
    {
      question: " What is your typical project timeline",
      answer: "Project timelines vary based on complexity and requirements. Generally, small projects may take 4-6 weeks, while larger projects can take several months. We provide a detailed timeline during the project proposal stage."
    },
    ,
    {
      question: "Do you offer maintenance and support after project completion?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your application remains up-to-date, secure, and functional."
    },
    ,
    {
      question: " What are your pricing models?",
      answer: "We offer flexible pricing models, including Fixed-price projects for well-defined scopes,Hourly rates for ongoing or open-ended projects, Retainer agreements for long-term partnerships"
    },
    ,
    {
      question: " How do you ensure the quality of your work?",
      answer: "We follow a rigorous quality assurance process, including:Code reviews, Automated testing, User acceptance testing (UAT), Performance testing."
    },
    ,
    {
      question: "How can I get started with Adane Technology?",
      answer: "To get started, simply contact us via our website or email. We’ll schedule a consultation to discuss your project needs and outline the next steps."
    },
    ,
    {
      question: "What if I have an existing project that needs improvement?",
      answer: "We’re happy to assess your existing project and provide recommendations for enhancements, whether it's performance optimization, UI/UX improvements, or feature additions."
    },
    ,
    {
      question: "Can you integrate third-party services or APIs?",
      answer: "Yes, we can integrate various third-party services, APIs, and tools to enhance your application’s functionality, including payment gateways, social media platforms, and analytics tools."
    },
    ,
    {
      question: "How do you handle project communication?",
      answer: "We prioritize clear communication and use tools like Slack, Trello, or email to keep you updated on project progress. Regular check-ins and milestone reviews are also part of our process."
    },
    ,
    {
      question: " Is my project idea confidential?",
      answer: "Absolutely! We take confidentiality seriously and can provide a Non-Disclosure Agreement (NDA) upon request to protect your project ideas."
    },
    ,
    {
      question: "What technologies do you use besides React?",
      answer: "In addition to React and React Native, we work with a variety of technologies including Node.js, MongoDB, Firebase, and various front-end and back-end frameworks, depending on project needs."
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='Qaf'>
    <div className="faq-container">
           <div className='trmen' >Frequently Asked Questions (FAQ)</div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <div className='FaqQ'>{faq.question}</div>
            <span style={{color:"#fff",marginLeft:"5px",fontSize:"18px"}}>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
