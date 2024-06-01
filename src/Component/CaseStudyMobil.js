import React, { useState } from 'react';
import imgBk from '../Images/bklogo.png';
import Footer from './footer.js';
import ParticleData from './particle.json';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";

import './module.css'; // Assuming this file contains necessary styles

const CaseStudyMobil = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setVisibleCount(4); // Reset visible count when filter changes
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const filteredData = ParticleData.filter(item => selectedFilter === 'All' || item.tag === selectedFilter);
  const visibleData = filteredData.slice(0, visibleCount);

  const tagColors = {
    'Strategy': '#B3D658',
    'Tech': '#2C55ED',
    'Brand': '#E0076A'
  };

  return (
    <>
    <section className='bg-black'>
      <div className='d-flex w-100 align-items-center flex-column'>
        <div className='d-flex maintosecteion dghkgjkf'>
          <img src={imgBk} alt="Logo" />
          <div className='bklogotext'>invites you to explore..</div>
        </div>
        <div className='d-flex gap-2 gkhlkfghfg'>
          {['All', 'Strategy', 'Tech', 'Brand'].map((filter) => (
            <div key={filter} className='filter-wrapper'>
              <button
                className={`boll ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
                style={{ backgroundColor: tagColors[filter] }}
              ></button>
              {selectedFilter === filter && <span className='filter-label filter-text'>{filter}</span>}
            </div>
          ))}
        </div>
      </div>
      <section className='case-study-section'>
        <div className='case-study-grid'>
          {visibleData.map((item, index) => (
            <div key={index} className='case-study-card d-flex' style={{ backgroundColor: tagColors[item.tag] }}>
              <div className='case-study-content d-flex flex-column'>

              <img src={item.image} alt={item.headline} className='case-study-image' />
                <p className='case-study-text'>{item.text}</p>
                </div>

                <Link to={item.link} className='case-study-link'><FaChevronCircleRight />
</Link>
              </div>
          ))}
        </div>
        {visibleData.length < filteredData.length && (
          <button className='load-more-button' onClick={loadMore}>Read More</button>
        )}
      </section>
      </section>
      <Footer />
      
    </>
  );
}

export default CaseStudyMobil;
