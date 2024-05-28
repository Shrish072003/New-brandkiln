import React, { useState, useEffect } from 'react';
import './preloader.css'; // Ensure correct path to CSS file
import imgBack from '../Images/image16.png';
import imgBk from '../Images/bklogoblack.png';
import imgOne from '../Images/img-1.jpg';
import imgTwo from '../Images/img-2.jpg';
import { Link } from 'react-router-dom';

const Preloader = () => {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const sectionTimers = [
            setTimeout(() => setCurrentSection(1), 2000),
            setTimeout(() => setCurrentSection(2), 4000),
            setTimeout(() => setCurrentSection(3), 6000),
            setTimeout(() => setCurrentSection(4), 8000),
            setTimeout(() => setCurrentSection(5), 10000),
        ];

        return () => {
            sectionTimers.forEach((timer) => clearTimeout(timer));
        };
    }, []);




    return (
        <>
            <section className={`fade-in ${currentSection === 1 ? 'visible' : ''}`}>
                <img className='center-logo' src={imgBk} />

                <img className='lodingimagewidth' src={imgBack} />
            </section>

            <section className={`hero-section d-flex  fade-in ${currentSection === 2 ? 'visible' : ''}`}>

                <div
                    className='w-50 hero-image hero-image1'
                    style={{
                        backgroundImage: `url(${imgOne})`,
                        backgroundPosition: 'right',
                    }}

                >
                    BRAND
                    <span className='studio'>STUDIO</span>
                    <div className='undermaindiv' style={{ alignItems: 'end' }}>
                        <span className='undermain'>We Design Experiences</span>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                </div>
                <div
                    className='w-50 hero-image hero-image2'
                    style={{


                    }}

                >
                    <div className='undermaindiv' >
                        <div className='undermain'>We Design Experiences</div>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                    <span>KILN</span>
                    <section className='studio'>TECH</section>
                </div>
            </section>



            <section className={`hero-section d-flex  fade-in ${currentSection === 3 ? 'visible' : ''}`}>
                <img className='fghdkjfgkjdf' src={imgBack} />

                <div
                    className='w-50 hero-image hero-image1'
                    style={{
                        backgroundImage: `url(${imgOne})`,
                        backgroundPosition: 'right',
                        transition: 'filter 0.3s ease',
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}

                >
                    BRAND
                    <span className='studio'>STUDIO</span>
                    <div className='undermaindiv' style={{ alignItems: 'end' }}>
                        <span className='undermain'>We Design Experiences</span>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                </div>
                <div
                    className='w-50 hero-image hero-image2'
                    style={{
                        backgroundImage: `url(${imgTwo})`,
                        backgroundPosition: '-70px',
                        transition: 'filter 0.3s ease', // Smooth transition for filter
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}
                >
                    <div className='undermaindiv' >
                        <div className='undermain'>We Design Experiences</div>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                    <span>KILN</span>
                    <section className='studio'>TECH</section>
                </div>
            </section>






            <section className={`hero-section d-flex  fade-in ${currentSection === 4 ? 'visible' : ''}`}>
                <img className='fghdkjfgkjdf' src={imgBack} />

                <div
                    className='w-50 hero-image hero-image1'
                    style={{
                        backgroundImage: `url(${imgOne})`,
                        backgroundPosition: 'right',
                        transition: 'filter 0.3s ease',
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}
                >
                    BRAND
                    <span className='studio'>STUDIO</span>
                    <div className='undermaindiv' style={{ alignItems: 'end' }}>
                        <span className='undermain'>We Design Experiences</span>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                </div>
                <div
                    className='w-50 hero-image hero-image2'
                    style={{
                        backgroundImage: `url(${imgTwo})`,
                        backgroundPosition: '-70px',
                        transition: 'filter 0.3s ease', // Smooth transition for filter
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}
                >
                    <div className='undermaindiv' >
                        <div className='undermain'>We Design Experiences</div>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                    <span>KILN</span>
                    <section className='studio'>TECH</section>
                </div>
            </section>






            <section className={`hero-section d-flex  fade-in ${currentSection === 5 ? 'visible' : ''}`}>
                <img className='fghdkjfgkjdf' src={imgBack} />


                <div
                    className='w-50 hero-image hero-image1'
                    style={{
                        backgroundImage: `url(${imgOne})`,
                        backgroundPosition: 'right',
                        transition: 'filter 0.3s ease',
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}
                >
                    BRAND
                    <span className='studio'>STUDIO</span>
                    <div className='undermaindiv' style={{ alignItems: 'end' }}>
                        <span className='undermain'>We Design Experiences</span>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                </div>
                <div
                    className='w-50 hero-image hero-image2'
                    style={{
                        backgroundImage: `url(${imgTwo})`,
                        backgroundPosition: '-70px',
                        transition: 'filter 0.3s ease', 
                        boxShadow: 'black 0px 0px 0px 5px',
                    }}
                >
                    <div className='undermaindiv' >
                        <div className='undermain'>We Design Experiences</div>
                        <Link to='/about' className='buoton'>MORE</Link>
                    </div>
                    <span>KILN</span>
                    <section className='studio'>TECH</section>
                </div>
            </section>


        </>
    );
};

export default Preloader;



