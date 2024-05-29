import React, { useState, useEffect } from 'react';
import './module.css';
import { useNavigate } from 'react-router-dom';
import imgBk from '../Images/BK_white-e1656676473666-300x72.png';
import imgBk2 from '../Images/bklogoblack.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const MenuToggle = () => {
  const location = useLocation();  // This hook provides the current location object

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpennew, setIsMenuOpennew] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [availableCountries, setAvailableCountries] = useState([]);

  const allCountries = ['India', 'Mexico', 'UAE'];
  const navigate = useNavigate();

  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry) {
      setSelectedCountry(savedCountry);
      setAvailableCountries(allCountries.filter(country => country !== savedCountry));
    } else {
      setAvailableCountries(allCountries.filter(country => country !== 'India'));
    }
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedCountry', country);
    setAvailableCountries(allCountries.filter(c => c !== country));
    setIsMenuOpennew(false);

    // Reload the page after updating the state
    window.location.reload();
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenunew = () => {
    setIsMenuOpennew(!isMenuOpennew);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className='d-flex justify-content-between align-items-center w-100 mainheadder'>
        <div className='mainbklogod' onClick={handleClick}>
        <img src={location.pathname === '/' ? imgBk : imgBk2} alt="Logo" />
        </div>

        <div>
          <div id="menu-toggle" className={`menuToggle ${isOpen ? 'open' : 'closed'}`} onClick={toggleMenu}>
            <div id="hamburger" className="hamburger">
              <span className="everything"></span>
              <span className="everything"></span>
              <span className="everything"></span>
            </div>
            <div id="cross" className="cross">
              <span className="everything"></span>
              <span className="everything"></span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="partial-page-header d-flex flex-column">
          <div className=''>
            <div className="Flyout">
              <button type="button" aria-controls="flyoutMenu" aria-expanded={isMenuOpennew} onClick={toggleMenunew}>
                {selectedCountry}
                <svg className={`arrow ${isMenuOpennew ? 'rotate' : ''}`} style={{ width: '12px', marginLeft: '5px', transform: 'rotate(180deg)' }} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 1L10 5.5l-.6.6-3.9-3.8L1.6 6 1 5.5 5.5 1Z" fill="#fff" stroke="#fff"></path>
                </svg>
              </button>
              <ul id="flyoutMenu" className={isMenuOpennew ? 'open' : ''}>
                {availableCountries.map((country) => (
                  <li key={country}>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCountryChange(country); }}>
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

<div className='mainrightkd mt-5 '>
  <div><Link to="/">Home</Link></div>
  <div>
    <Link to="/">Brand Studio</Link>
  </div>
  <ul className='sdfhjfgf'>
    <li><Link to="/brand-strategy">Brand Strategy</Link></li>
    <li><Link to="/brand-positioning">Brand Positioning</Link></li>
    <li><Link to="/brand-innovation">Experience innovation</Link></li>
    <li><Link to="/content-services">Content Services</Link></li>
  </ul>
  <div><Link to="/">Tech Kiln</Link></div>
  <ul className='sdfhjfgf2'>
    <li><Link to="/metaverse">Metaverse services</Link></li>
    <li><Link to="/e-learning-development">eLearning development</Link></li>
    <li><Link to="/digital-ecosystems">Digital ecosystems</Link></li>
    <li><Link to="/apps-and-platform-development">Apps & Platform dev</Link></li>
  </ul>
  {/* <div><Link to="/resources">Resources</Link></div> */}
  <div><Link to="/about">About</Link></div>
</div>
<hr style={{color:'#fff'}}/>
<div style={{color:'gray'}}>
New business inquiries: <br></br>Sales@BrandKiln.com
</div>

          </div>

        </div>
      )}
    </>
  );
};

export default MenuToggle;
