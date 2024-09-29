import React, { useRef, useEffect, useState } from 'react';
import HomeBlog from './homeBlog';
const ScrollComponent = () => {
  const verticalDivRef = useRef(null);
  const horizontalDivRef = useRef(null);
  const [isScrollingHorizontally, setIsScrollingHorizontally] = useState(false);

  const handleScroll = () => {
    if (verticalDivRef.current) {
      const scrollTop = verticalDivRef.current.scrollTop;
      console.log('scrollTop:', scrollTop);

      // Check if scrollTop has reached a certain threshold
      if (scrollTop > 100) {
        setIsScrollingHorizontally(true);
      } else {
        setIsScrollingHorizontally(false);
      }
    }
  };

  useEffect(() => {
    const verticalDiv = verticalDivRef.current;
    if (verticalDiv) {
      verticalDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (verticalDiv) {
        verticalDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const horizontalDiv = horizontalDivRef.current;
    let scrollInterval;

    if (isScrollingHorizontally) {
      scrollInterval = setInterval(() => {
        if (horizontalDiv) {
          horizontalDiv.scrollLeft += 5; // Adjust scroll speed
          // Stop scrolling if the end of content is reached
          if (horizontalDiv.scrollLeft + horizontalDiv.clientWidth >= horizontalDiv.scrollWidth) {
            clearInterval(scrollInterval);
            setIsScrollingHorizontally(false);
          }
        }
      }, 100); // Adjust interval speed

    } else if (horizontalDiv) {
      horizontalDiv.scrollLeft = 0; // Reset horizontal scroll when stopped
    }

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isScrollingHorizontally]);

  return (
    <div>
      <div
        ref={verticalDivRef}
        style={{
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid black',
          marginBottom: '20px',
        }}
      >
        {/* Add content to make it scrollable */}
        <div style={{ height: '600px' }}>
          Scroll down to trigger horizontal scroll!
          <HomeBlog/>
        </div>
      </div>
      <div
        ref={horizontalDivRef}
        style={{
          width: '100%',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          border: '1px solid black',
          display: 'block' // Show only when scrolling horizontally
        }}
      >
        {/* Horizontal scrollable content */}
        <div style={{ display: 'inline-block', width: '2000px', height: '100px', background: 'lightblue' }}>
          This is a long horizontal content that will scroll!
          <HomeBlog/>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
