import React, { useState, useEffect, useRef } from 'react';
import Mainsection from '../Component/mainsection';
import People from '../Component/Peoplesection';
import Particale from '../Component/Particale.js';
import Header from '../Component/header';
import Preloader from '../Component/Preloader.js'; // Import your Preloader component
import './main.css';

const Homepage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const sectionRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    // Simulate loading delay with setTimeout (you can replace this with actual data fetching)
    const timeout = setTimeout(() => {
      setIsLoading(false); // Once loaded, set isLoading to false
    }, 20); // Adjust the timeout as needed

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    // Your scroll and key press event listeners remain the same
    const handleScroll = (event) => {
      // Scroll logic
    };

    const handleKeyPress = (event) => {
      // Key press logic
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('DOMMouseScroll', handleScroll, { passive: false });
    window.addEventListener('mousewheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyPress, { passive: false });

    return () => {
      // Cleanup event listeners
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('DOMMouseScroll', handleScroll);
      window.removeEventListener('mousewheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSection]);

  return (
    <div className='main-bodyfront'>
      {isLoading ? (
        <Preloader /> // Render the Preloader component while loading
      ) : (
        <>
          <div ref={sectionRefs.current[0]}>
            <Header />
            <Mainsection />
          </div>
          <div ref={sectionRefs.current[1]}>
            <People />
          </div>
          <div ref={sectionRefs.current[2]}>
            <Particale />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
