import React, { useState } from 'react';
import gift from '../Images/header.mp4';
import { FaPlus, FaMinus } from 'react-icons/fa';
import imgBk from '../Images/image.png';
import { IoLogoLinkedin } from "react-icons/io";
import { ImCross } from "react-icons/im";
import ProfileCard from './profilecard.js';

import imgBkp from '../Images/bigo.png';
import imgBkp2 from '../Images/image (4).png';
import { Link } from 'react-router-dom';




const Faqs = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [accordionOpen1, setAccordionOpen1] = useState(false);
    const [accordionOpen2, setAccordionOpen2] = useState(false);
    const [accordionOpen3, setAccordionOpen3] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
        setAccordionOpen1(false);
        setAccordionOpen2(false);
        setAccordionOpen3(false);
    };

    const toggleAccordion1 = () => {
        setAccordionOpen(false);
        setAccordionOpen1(!accordionOpen1);
        setAccordionOpen2(false);
        setAccordionOpen3(false);
    };

    const toggleAccordion2 = () => {
        setAccordionOpen(false);
        setAccordionOpen1(false);
        setAccordionOpen2(!accordionOpen2);
        setAccordionOpen3(false);
    };
    const toggleAccordion3 = () => {
        setAccordionOpen(false);
        setAccordionOpen1(false);
        setAccordionOpen2(false);
        setAccordionOpen3(!accordionOpen3);
    };



    const [creamDivVisible, setCreamDivVisible] = useState(false);

    const toggleCreamDiv = () => {
        setCreamDivVisible(!creamDivVisible);
    };

    const closeCreamDiv = () => {
        setCreamDivVisible(false);
    };


    return (
        <>
            <section className='about-faq-section' style={{ padding: '0 0 0 25%' }}>
                <div className='about-text'>About</div>
                <div>
            <div className='gifimageplac'>
                <video autoPlay loop muted>
                    <source src={gift} type="video/mp4" />
                </video>
                <div className="overlay-content">
                <div className="white-line"></div>

                    <h2>Transform with Us.</h2>
                </div>
            </div>
        </div>
                <div className='about-faq-textf'>
                    The creativity of a BRAND Studio coupled with the innovation of a TECH Kiln... that’s what makes us Brand Kiln. We are a boutique firm based in Pune, India. We are dedicated to enhancing brand resonance and technology enablement.
                    <br></br>                <br></br>

                    Our grasp of Web 2.0 and Web 3.0 ecosystem enables us to deliver concepts, products, and solutions that drive business growth for global enterprises and start-ups alike.
                    <br></br>
                    <br></br>

                    At Brand Kiln, we are continuously evolving how we work and how we look at marketplace challenges so we can continue to deliver measurable, sustainable results for our clients and communities.
                </div>
                <hr className='w-998' />


                <section>
                    <div className='faqs fjhghjghj'><div className='maintrjjbfg' style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                        <div onClick={toggleAccordion} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">  <div className='d-flex align-items-center'>
                            <div className='circlebefore'></div>
                            Who we are
                        </div>
                            <div>{accordionOpen ? <FaMinus className='FaMinus' /> : <FaPlus className='FaMinus' />}</div>
                        </div>
                        <div style={{ height: accordionOpen ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                            <div className='mainadanfskjndfjsdjf'>
                                <div className='mt-3 about-faq-textf'>We tackle unique business challenges by leveraging strategy, brand vision, and technology.</div>

                                <div className='about-faq-textf'><b>Our purpose</b> –  to deliver an impact that matters by creating trust and confidence in a more equitable society.</div>

                                <div className='about-faq-textf'><b>Our leadership</b> comprises of global industry veterans with more than 200 years of cumulative leadership experience across Business Strategy, Brand Development and Tech-solutions Delivery.</div>

                                <div className='about-faq-textf'><b>Our workforce</b> comprises some of the brightest sparks across the industry and are purpose-built to address each client’s unique business challenges.</div>


                                <div className='maingrrtjk'>Brand Kiln Leadership</div>
                            </div>
                            <ProfileCard />
                        </div>
                        {/* <div style={{ height: accordionOpen ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                            <div className='mainadanfskjndfjsdjf'>
                                <div className='maingrrtjk'>Our Core Team</div>
                                <div>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                <div className='hart-section' ><img className="mainimagein-faq" src={imgBk} /><div class='circleanimate'  style={{ position: accordionOpen ? 'absolute' : 'relative'}}></div>
                                    <div class="heart"  style={{ position: accordionOpen ? 'absolute' : 'relative'}}>
                                    </div>
                                    <div className='d-flex circlefgi'  style={{ position: accordionOpen ? 'absolute' : 'relative'}}>
                                        <div>
                                            <div className='strateg' onClick={toggleCreamDiv}></div>
                                            <div className='orangemid' onClick={toggleCreamDiv}></div>
                                            {creamDivVisible && (
                                                <div className='cream-div-new d-flex'>
                                                    <div className='maingrayimg'>         
                                                     <img src='https://brandkiln.com/wp-content/uploads/2022/07/MD-v5-1.png' className='herobkimage' alt='hero'></img>
                                                    </div>
                                                    <div className='maingray'>
                                                        <div className='maninbfjk'>Manas Dewan</div>
                                                        <div>Co-Founder</div>
                                                        <div><IoLogoLinkedin  className='ddsfs'/>
                                                        </div>
                                                        <br />
                                                        <div className='roloejhr'><span>Role at BrandKiln</span>
                                                            <br />
                                                            Strategy
                                                            <br />
                                                            Supervision
                                                        </div>
                                                        <div className='roloejhr'><span>Experience</span>
                                                        <br />

                                                            30 years</div>

                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="left-column">
                                                            <div className="dark-gray">Focus</div>
                                                            <div className="dark-gray">Prior Experience</div>
                                                            <div className="dark-gray">Highlight</div>
                                                            <div className="dark-gray">Interests</div>
                                                        </div>
                                                        <div className="right-column">
                                                            <div className="light-gray">Ongoing Ph.D. in Metaverse</div>
                                                            <div className="light-gray">Mercedes Benz Dow Chemical Global Retail</div>
                                                            <div className="light-gray">Limca Record for 18 country motorbike trip</div>
                                                            <div className="light-gray"> Music Reading Philosophy</div>
                                                        </div>
                                                    </div>
                                                    <div className="close-btn" onClick={closeCreamDiv}><ImCross /></div>

                                                </div>
                                                

                                            )}
                                        </div>

                                        <div>
                                            <div className='strateg'></div>
                                            <div className='orangemid'></div>
                                            <div class='cream-div'></div>
                                        </div><div className='content'>

                                            <div className='strateg'></div>
                                            <div className='orangemid'></div>
                                            <div class='cream-div'></div>
                                        </div><div className='tech'>

                                            <div className='strateg'></div>
                                            <div className='orangemid'></div>
                                            <div class='cream-div'></div>
                                        </div><div className='metaverse'>

                                            <div className='strateg'></div>
                                            <div className='orangemid'></div>
                                            <div class='cream-div'></div>
                                        </div><div className='bizdev'>

                                            <div className='strateg'></div>
                                            <div className='orangemid'></div>
                                            <div class='cream-div'></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div></div>
                    <hr className='w-998' />

                    <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                        <div onClick={toggleAccordion1} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">  <div className='d-flex align-items-center'>
                            <div className='circlebefore'></div>
                            What we do
                        </div>
                            <div> {accordionOpen1 ? <FaMinus className='FaMinus1' /> : <FaPlus className='FaMinus1' />}</div>
                        </div>
                        <div style={{ height: accordionOpen1 ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                            <div className='d-flex justify-content-between w-998 dgfgdf41gh'>
                                <div className='mainadanfskjndfjsdjf'>
                                    <div className='mt-4 sfgfsjgf'>
                                        <Link to="/brand-strategy" className="text-decoration-none text-dark">
                                            BRAND Studio
                                        </Link>
                                    </div>

                                    <div className='d-flex flex-column'>
                                        <div className='weteciudy mt-3'>
                                            We curate Experiences
                                        </div>
                                        <div className='underfssbd'>
                                            <Link to="/brand-strategy" className="text-decoration-none text-dark">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DC096A" />
                                                </svg>
                                                Strategy
                                            </Link>
                                        </div>
                                        <div className='underfssbd'>
                                            <Link to="/brand-positioning" className="text-decoration-none text-dark">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DC096A" />
                                                </svg>
                                                Brand Positioning
                                            </Link>
                                        </div>
                                        <div className='underfssbd'>
                                            <Link to="/brand-innovation" className="text-decoration-none text-dark">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DC096A" />
                                                </svg>
                                                Experience Innovation
                                            </Link>
                                        </div>
                                        <div className='underfssbd'>
                                            <Link to="/content-services" className="text-decoration-none text-dark">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DC096A" />
                                                </svg>
                                                Content
                                            </Link>
                                        </div>
                                    </div>
                                </div>



                                <div className='mainadanfskjndfjsdjf'>
                                    <div className='mt-4 sfgfsjgf'>Tech KILN</div>

                                    <div className='d-flex flex-column'>
                                        <div className='weteciudy mt-3'>We code Excellence</div>
                                        <div className='underfssbd fghfghfghfghfg'>
                                            <Link to="/metaverse" className="text-decoration-none">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#2638d9 " />
                                                </svg>
                                                Metaverse
                                            </Link>
                                        </div>
                                        <div className='underfssbd fghfghfghfghfg'>
                                            <Link to="/e-learning-development" className="text-decoration-none">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#2638d9 " />
                                                </svg>eLearning
                                            </Link>

                                        </div>
                                        <div className='underfssbd fghfghfghfghfg'>
                                            <Link to="/digital-ecosystems" className="text-decoration-none">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#2638d9 " />
                                                </svg>Digital Ecosystems
                                            </Link>

                                        </div>
                                        <div className='underfssbd fghfghfghfghfg'>
                                            <Link to="/http://64.23.229.196:3000/apps-and-platform-development" className="text-decoration-none">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#2638d9 " />
                                                </svg>Apps & Platform Dev
                                            </Link>

                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div></div>
                    <hr className='w-998' />

                    <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                        <div onClick={toggleAccordion2} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                <div className='circlebefore'></div>
                                How we do it
                            </div>

                            <div>  {accordionOpen2 ? <FaMinus className='FaMinus2' /> : <FaPlus className='FaMinus2' />}</div>
                        </div>
                        <div style={{ height: accordionOpen2 ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                            <div className='mainadanfskjndfjsdjf'>
                            <div className='about-faq-textf'><b>We Believe</b> –  Business Growth is unlocked when Strategy & Technology is aligned with Brand Purpose.</div>
                            <div className='about-faq-textf'><b>Our Approach</b> –  integrates Brand Purpose upstream into your value proposition, and downstream into your execution</div>

                                <div className='maingrrtjk'></div>
                                <div>
                                    <img className="mainimagfgfgein-faq hiden" src={imgBkp} />
                                    <img className="mainimagfgfgein-faq2 ml-3 visdesk2" src={imgBkp2} />


                                    {accordionOpen2 && (


                                        <div className="button-container hiden">
                                            <div className="button-wrapper">
                                                <button className="hover-button fdgfngmfm">m</button>
                                                <div className="popup">
                                                    <span className='flkgflsgdf'>BK Strategy focus</span>
                                                    <br className='mt-2'></br>
                                                    Market Research
                                                    <br></br>
                                                    Digital Transformation
                                                    <br></br>
                                                    Go-to-market (future digital)
                                                </div>
                                            </div>
                                            <div className="button-wrapper">
                                                <button className="hover-button fdgfngmfm1">2</button>
                                                <div className="popup">
                                                    <span className='flkgflsgdf'>BK Tech focus</span>
                                                    <br className='mt-2'></br>
                                                    Solution
                                                    <br></br>
                                                    Architecture
                                                    <br></br>
                                                    Tech Development
                                                    <br></br>
                                                    Web 2.0 & Web 3.0
                                                </div>
                                            </div>
                                            <div className="button-wrapper fdgfngmfm2">
                                                <button className="hover-button">3</button>
                                                <div className="popup">
                                                    <span className='flkgflsgdf'>BK Reach focus</span>
                                                    <br className='mt-2'></br>
                                                    Content & Creative
                                                    <br></br>
                                                    Strategic Comms
                                                    <br></br>
                                                    Blockchain & Metaverse
                                                </div>
                                            </div>
                                            <div className="button-wrapper fdgfngmfm3">
                                                <button className="hover-button">4</button>
                                                <div className="popup">
                                                    <span className='flkgflsgdf'>BK Reach focus</span>
                                                    <br className='mt-2'></br>
                                                    Content & Creative
                                                    <br></br>
                                                    Strategic Comms
                                                    <br></br>
                                                    Blockchain & Metaverse
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </div>
                                {/* <div className='boxundefawq'>
                                    Pulvinar ultrices leo amet egestas tortor etiam lacus metus. Et enim bibendum ac etiam gravida id eget nisl. In a elementum fermentum pellentesque pulvinar eu vel tincidunt.<br /><span>More<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C13.5228 18 18 13.5228 18 8C18 2.47715 13.5228 -2 8 -2C2.47715 -2 -2 2.47715 -2 8C-2 13.5228 2.47715 18 8 18ZM13.7273 9.06066C14.0086 8.77936 14.1666 8.39783 14.1666 8C14.1666 7.60217 14.0086 7.22064 13.7273 6.93934L9.72727 2.93934C9.14148 2.35355 8.19174 2.35355 7.60595 2.93934C7.02016 3.52513 7.02016 4.47487 7.60595 5.06066L9.04529 6.5H3.33327C2.50485 6.5 1.83327 7.17157 1.83327 8C1.83327 8.82843 2.50485 9.5 3.33327 9.5H9.04529L7.60595 10.9393C7.02016 11.5251 7.02016 12.4749 7.60595 13.0607C8.19174 13.6464 9.14148 13.6464 9.72727 13.0607L13.7273 9.06066Z" fill="#656565" />
                                    </svg>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr className='w-998' />

                    <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                        <div onClick={toggleAccordion3} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                <div className='circlebefore'></div>
                                Who we do it for
                            </div>

                            <div>{accordionOpen3 ? <FaMinus className='FaMinus2' /> : <FaPlus className='FaMinus2' />}</div>
                        </div>
                        <div style={{ height: accordionOpen3 ? '140px' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                            <div className='tablecss'>
                                <div className='tablesection'>
                                    <ul className='about-faq-textf mt-5'>
                                        <li>
                                        We help futuristic startups achieve market resonance
                                        </li>
                                        <li>We help legacy enterprises bridge to Web 3.0
</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr className='w-998' />




                </section>




            </section>
        </>
    )
}

export default Faqs