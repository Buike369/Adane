import React, { useRef, useEffect } from 'react';
import Card from "./card"
const ScrollComponent = () => {
  const scrollDivRef = useRef(null);

  // Function to log the scrollTop value
  const handleScroll = () => {
    if (scrollDivRef.current) {
      console.log('scrollTop:', scrollDivRef.current.scrollTop);
    }
  };

  // Set up an event listener for the scroll event
  useEffect(() => {
    const div = scrollDivRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollDivRef}
      style={{
        height: '200px',
        overflowY: 'scroll',
        border: '1px solid black',
      }}
    >
      {/* Add content to make it scrollable */}
      <div style={{ height: '600px' }}>
        Scroll me!
        <Card/>
      </div>
    </div>
  );
};

export default ScrollComponent;
