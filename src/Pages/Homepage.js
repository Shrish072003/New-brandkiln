import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Mainsection from '../Component/mainsection';
import People from '../Component/Peoplesection';
import Particale from '../Component/Particale.js';
import Header from '../Component/header';
import Preloader from '../Component/Preloader.js'; 
import CaseStudyMobil from '../Component/CaseStudyMobil.js';
import './main.css';
import './responsivenes.css';

const Homepage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
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
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('DOMMouseScroll', handleScroll);
      window.removeEventListener('mousewheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSection]);

  return (
    <div className='main-bodyfront'>
      <Helmet>
        <title>Brand Kiln | Creative Brand Management Solutions | Complete Technology Development Solutions</title>
        <meta
          name="description"
          content="Brand Kiln delivers end-to-end tech development along with brand strategy. We elevate your brand with data-powered storytelling and web 3.0 strategies."
        />
      </Helmet>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div ref={sectionRefs.current[0]}>
            <Header />
            <Mainsection />
          </div>
          <div ref={sectionRefs.current[1]}>
            <People />
          </div>
          <div ref={sectionRefs.current[2]} className="particale-section">
            <Particale />
          </div>
          <div ref={sectionRefs.current[3]} className="particale-sectionm">
            <CaseStudyMobil />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
