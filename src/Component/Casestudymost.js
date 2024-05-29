import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../Images/01_BK-Offerings_Brand4.png';
import image2 from '../Images/BMW.png';
import image3 from '../Images/01_BK-Offerings_Brand4.png';

const caseStudies = [
    {
        color: 'blue',  // Changed to blue for TECH
        tag: 'TECH',
        image: image1,
        title: 'Fusing French Elegance with Indian Tastes',
        content: 'La Chocolat, after a successful niche debut, aimed to penetrate...',
        link: '/tech'
    },
    {
        color: 'green',  // Changed to green for STRATEGY
        tag: 'STRATEGY',
        image: image2,
        title: 'Innovating the Future',
        content: 'Exploring innovative approaches in technology integration...',
        link: '/strategy'
    },
    {
        color: 'pink',
        tag: 'BRAND',
        image: image3,
        title: 'Enhancing Brand Visibility',
        content: 'Visibility is key in competitive markets...',
        link: '/brand-enhancement'
    },
    // Add other case studies with updated colors as needed
];

const Casestudymost = () => {
    const [filter, setFilter] = useState('ALL');
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredCaseStudies = caseStudies.filter(
        (study) => filter === 'ALL' || study.tag === filter
    );

    const handleFilterChange = (newFilter) => {
        setSelectedFilter(newFilter);
        setFilter(newFilter === 'All' ? 'ALL' : newFilter.toUpperCase());
    };

    return (
        <>
        <section className='d-flex align-items-center gap-3 filter-container'>
            <div className='filtertext filter-text'>FILTER BY CATEGORY</div>
            <div className='d-flex gap-2 '>
                <button className={`boll ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => handleFilterChange('All')}></button>
                {selectedFilter === 'All' && <span className='filter-label filter-text'>All</span>}
                <button className={`boll bollone ${selectedFilter === 'Strategy' ? 'active' : ''}`} onClick={() => handleFilterChange('Strategy')}></button>
                {selectedFilter === 'Strategy' && <span className='filter-label filter-text'>Strategy</span>}
                <button className={`boll bolltwo ${selectedFilter === 'Tech' ? 'active' : ''}`} onClick={() => handleFilterChange('Tech')}></button>
                {selectedFilter === 'Tech' && <span className='filter-label filter-text'>Tech</span>}
                <button className={`boll bollthree ${selectedFilter === 'Brand' ? 'active' : ''}`} onClick={() => handleFilterChange('Brand')}></button>
                {selectedFilter === 'Brand' && <span className='filter-label'>Brand</span>}
            </div>
        </section>
        <section className='d-flex mt-5 justify-content-center imagetes'>
            <div className='d-flex gap-4 flex-wrap justify-content-center w-85'>
                {filteredCaseStudies.map((study, index) => (
                    <div key={index} className={`mainbigcard ${study.color}dot`}>
                        <div className='back-color tagd'>{study.tag}</div>
                        <img src={study.image} alt={study.title} className='imageofbk mt-3 mb-3' />
                        <h2>{study.title}</h2>
                        <p>{study.content}</p>
                        <Link to={study.link} className='moredetail'><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8.00312L10.2 15.8031V11.6031L0.599998 11.6031V4.40312H10.2V0.203125L18 8.00312Z" fill="white"/>
</svg>
</Link>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Casestudymost;
