import React, { useState } from 'react';
import Bkblue from '../Images/bkblue.png'
import ScrollPlayVideo2 from './ScrollPlayVideo.js';
import Topbrands1 from '../Images/image1.png'
import Topbrands2 from '../Images/Metaverse2.png'
import Topbrands3 from '../Images/Metaverse3.png'
import { Link } from 'react-router-dom';
import Bkblue2 from '../Images/BK_6/BrandPositioningmobil2.png'
import Carousel from 'react-bootstrap/Carousel';

import FormEngage from './formengage.js';



const Metaverse = () => {

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };


    const faqData = [
        {
            id: 1,
            question: "eLearning for Pinktum AG",
            answer: "What happens when a global leader e-Training- Pinktum AG, leverages Brand Kiln’s Metaverse capabilities and content prowess to transform their business solutions?",
            caseStudyLink: "/case-study/Pinktum"
        },
        {
            id: 2,
            question: "Real estate sales",
            answer: "This is the story of how Physical Real Estate sales can be positioned towards global, remote customers? ",
            caseStudyLink: "/case-study/covince-innovation"
        },
        {
            id: 3,
            question: "Hyper-real corporate Metaverse",
            answer: "Know more about the Brand Kiln metaverse that is used by leading corporates for virtual collaboration, innovation as well as for trade fairs, meetings and conferences. ",
            caseStudyLink: "/case-study/Realty-Metaverse"
        },
    ];



    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <section className='about-faq-section-new'>
                <div className=''>

                    <div className='text-styles'>
                        Business Growth is unlocked when Creativity and Technology are aligned with your Brand
                        Purpose - delivering consistent results with no excuses or defaults. We bring forth the
                        Mission-critical results catering to a diverse clientele, from start ups to global giants.
                    </div>
                    <div className='d-flex kfgjhdfgkjhdg'>
                        <div className='fkjgmngfdgb '>

                            <Link to='/Brand-strategy' className='brandstasrt'></Link>
                            <Link to='/brand-positioning' className='brandstasrt'></Link>
                            <Link to='/brand-innovation' className='brandstasrt'></Link>
                            <Link to='/content-services' className='brandstasrt'></Link>

                        </div>
                        <div className='fkjgmngfdgb' style={{ marginLeft: '30rem' }}>

                            <Link to='/metaverse' className='brandstasrt'></Link>
                            <Link to='/e-learning-development' className='brandstasrt'></Link>
                            <Link to='/digital-ecosystems' className='brandstasrt'></Link>
                            <Link to='/apps-and-platform-development' className='brandstasrt'></Link>

                        </div>



                    </div>
                    <img className='bkblue mt-5 mb-9' src={Bkblue} />
                    <img className='mt-5 mb-5 mobileimgaest' src={Bkblue2} />
                    <div className='flex-column dkfdkfkdgkg2 mobileimgaest'>
                        <hr />
                        <Link to='/metaverse'><div className='d-flex align-items-center justify-content-between'>Metaverse Services<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1094 7.99979C15.1094 6.59334 14.6923 5.21848 13.9109 4.04906C13.1296 2.87965 12.019 1.9682 10.7196 1.42998C9.42018 0.891753 7.99038 0.750929 6.61096 1.02531C5.23153 1.2997 3.96446 1.97696 2.96995 2.97147C1.97544 3.96598 1.29817 5.23306 1.02379 6.61248C0.749407 7.9919 0.890231 9.4217 1.42845 10.7211C1.96668 12.0205 2.87813 13.1311 4.04754 13.9125C5.21696 14.6938 6.59182 15.1109 7.99826 15.1109C9.88425 15.1109 11.693 14.3617 13.0266 13.0281C14.3602 11.6945 15.1094 9.88577 15.1094 7.99979ZM8.18938 11.5553C8.07319 11.4366 8.00813 11.277 8.00813 11.1109C8.00813 10.9448 8.07319 10.7852 8.18938 10.6665L10.2205 8.62201L3.93604 8.62201C3.77102 8.62201 3.61275 8.55645 3.49607 8.43976C3.37938 8.32307 3.31382 8.16481 3.31382 7.99979C3.31382 7.83476 3.37938 7.6765 3.49607 7.55981C3.61275 7.44312 3.77102 7.37756 3.93604 7.37756L10.1583 7.37756L8.18938 5.40868C8.0715 5.2908 8.00528 5.13093 8.00528 4.96423C8.00528 4.79753 8.0715 4.63766 8.18938 4.51979C8.30725 4.40191 8.46712 4.33569 8.63382 4.33569C8.80052 4.33569 8.96039 4.40191 9.07826 4.51979L12.576 8.03534L9.06938 11.5553C9.0116 11.6131 8.943 11.659 8.8675 11.6902C8.79201 11.7215 8.71109 11.7376 8.62938 11.7376C8.54766 11.7376 8.46674 11.7215 8.39125 11.6902C8.31575 11.659 8.24716 11.6131 8.18938 11.5553Z" fill="#2F50C7" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/e-learning-development'><div className='d-flex align-items-center justify-content-between'>eLearning Development<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1094 7.99979C15.1094 6.59334 14.6923 5.21848 13.9109 4.04906C13.1296 2.87965 12.019 1.9682 10.7196 1.42998C9.42018 0.891753 7.99038 0.750929 6.61096 1.02531C5.23153 1.2997 3.96446 1.97696 2.96995 2.97147C1.97544 3.96598 1.29817 5.23306 1.02379 6.61248C0.749407 7.9919 0.890231 9.4217 1.42845 10.7211C1.96668 12.0205 2.87813 13.1311 4.04754 13.9125C5.21696 14.6938 6.59182 15.1109 7.99826 15.1109C9.88425 15.1109 11.693 14.3617 13.0266 13.0281C14.3602 11.6945 15.1094 9.88577 15.1094 7.99979ZM8.18938 11.5553C8.07319 11.4366 8.00813 11.277 8.00813 11.1109C8.00813 10.9448 8.07319 10.7852 8.18938 10.6665L10.2205 8.62201L3.93604 8.62201C3.77102 8.62201 3.61275 8.55645 3.49607 8.43976C3.37938 8.32307 3.31382 8.16481 3.31382 7.99979C3.31382 7.83476 3.37938 7.6765 3.49607 7.55981C3.61275 7.44312 3.77102 7.37756 3.93604 7.37756L10.1583 7.37756L8.18938 5.40868C8.0715 5.2908 8.00528 5.13093 8.00528 4.96423C8.00528 4.79753 8.0715 4.63766 8.18938 4.51979C8.30725 4.40191 8.46712 4.33569 8.63382 4.33569C8.80052 4.33569 8.96039 4.40191 9.07826 4.51979L12.576 8.03534L9.06938 11.5553C9.0116 11.6131 8.943 11.659 8.8675 11.6902C8.79201 11.7215 8.71109 11.7376 8.62938 11.7376C8.54766 11.7376 8.46674 11.7215 8.39125 11.6902C8.31575 11.659 8.24716 11.6131 8.18938 11.5553Z" fill="#2F50C7" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/digital-ecosystems'><div className='d-flex align-items-center justify-content-between'>Digital Ecosystems<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1094 7.99979C15.1094 6.59334 14.6923 5.21848 13.9109 4.04906C13.1296 2.87965 12.019 1.9682 10.7196 1.42998C9.42018 0.891753 7.99038 0.750929 6.61096 1.02531C5.23153 1.2997 3.96446 1.97696 2.96995 2.97147C1.97544 3.96598 1.29817 5.23306 1.02379 6.61248C0.749407 7.9919 0.890231 9.4217 1.42845 10.7211C1.96668 12.0205 2.87813 13.1311 4.04754 13.9125C5.21696 14.6938 6.59182 15.1109 7.99826 15.1109C9.88425 15.1109 11.693 14.3617 13.0266 13.0281C14.3602 11.6945 15.1094 9.88577 15.1094 7.99979ZM8.18938 11.5553C8.07319 11.4366 8.00813 11.277 8.00813 11.1109C8.00813 10.9448 8.07319 10.7852 8.18938 10.6665L10.2205 8.62201L3.93604 8.62201C3.77102 8.62201 3.61275 8.55645 3.49607 8.43976C3.37938 8.32307 3.31382 8.16481 3.31382 7.99979C3.31382 7.83476 3.37938 7.6765 3.49607 7.55981C3.61275 7.44312 3.77102 7.37756 3.93604 7.37756L10.1583 7.37756L8.18938 5.40868C8.0715 5.2908 8.00528 5.13093 8.00528 4.96423C8.00528 4.79753 8.0715 4.63766 8.18938 4.51979C8.30725 4.40191 8.46712 4.33569 8.63382 4.33569C8.80052 4.33569 8.96039 4.40191 9.07826 4.51979L12.576 8.03534L9.06938 11.5553C9.0116 11.6131 8.943 11.659 8.8675 11.6902C8.79201 11.7215 8.71109 11.7376 8.62938 11.7376C8.54766 11.7376 8.46674 11.7215 8.39125 11.6902C8.31575 11.659 8.24716 11.6131 8.18938 11.5553Z" fill="#2F50C7" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/apps-and-platform-development'><div className='d-flex align-items-center justify-content-between'>Apps and Platform Development <svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1094 7.99979C15.1094 6.59334 14.6923 5.21848 13.9109 4.04906C13.1296 2.87965 12.019 1.9682 10.7196 1.42998C9.42018 0.891753 7.99038 0.750929 6.61096 1.02531C5.23153 1.2997 3.96446 1.97696 2.96995 2.97147C1.97544 3.96598 1.29817 5.23306 1.02379 6.61248C0.749407 7.9919 0.890231 9.4217 1.42845 10.7211C1.96668 12.0205 2.87813 13.1311 4.04754 13.9125C5.21696 14.6938 6.59182 15.1109 7.99826 15.1109C9.88425 15.1109 11.693 14.3617 13.0266 13.0281C14.3602 11.6945 15.1094 9.88577 15.1094 7.99979ZM8.18938 11.5553C8.07319 11.4366 8.00813 11.277 8.00813 11.1109C8.00813 10.9448 8.07319 10.7852 8.18938 10.6665L10.2205 8.62201L3.93604 8.62201C3.77102 8.62201 3.61275 8.55645 3.49607 8.43976C3.37938 8.32307 3.31382 8.16481 3.31382 7.99979C3.31382 7.83476 3.37938 7.6765 3.49607 7.55981C3.61275 7.44312 3.77102 7.37756 3.93604 7.37756L10.1583 7.37756L8.18938 5.40868C8.0715 5.2908 8.00528 5.13093 8.00528 4.96423C8.00528 4.79753 8.0715 4.63766 8.18938 4.51979C8.30725 4.40191 8.46712 4.33569 8.63382 4.33569C8.80052 4.33569 8.96039 4.40191 9.07826 4.51979L12.576 8.03534L9.06938 11.5553C9.0116 11.6131 8.943 11.659 8.8675 11.6902C8.79201 11.7215 8.71109 11.7376 8.62938 11.7376C8.54766 11.7376 8.46674 11.7215 8.39125 11.6902C8.31575 11.659 8.24716 11.6131 8.18938 11.5553Z" fill="#2F50C7" />
                        </svg>
                        </div></Link>
                        <hr />



                    </div>

                    <div className='bluetitel'>Metaverse Services</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>

                                We strategize, develop, and manage hyper-real corporate metaverses for global brands, powered by pioneering PhD research of our founder </li>
                            <li>Our comprehensive Metaverse solutions include strategy, user journey optimization, immersive VR development, and deployment of corporate metaverse environments</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                        Our Metaverse innovation is powered personally by the insights of our founder, Mr. Manas Dewan and his ongoing PhD research on Metaverse and didactics. This deep expertise enables us to strategize, develop, and manage hyper-real corporate metaverses for global brands, delivering unparalleled user experiences and business results. Our award-winning processes encompass every aspect of Metaverse strategy, from user journey optimization to cutting-edge design and development.
                    </div>
                    <div className='text-styles mt-3'>
                        Future-forward brands recognize the transformative potential of the Metaverse as a tool for brand positioning and audience engagement. By partnering with BrandKiln, brands have unlocked new business models, revenue streams, and accelerated their Web 3.0 pivot. </div>
                    <div className='gap-3 w-100 mt-4 imagesback'>
                        <img className='sgdfgdg' src={Topbrands1} />
                        <img className='sgdfgdg' src={Topbrands2} />
                        <img className='sgdfgdg' src={Topbrands3} />

                    </div>

                    <Carousel className='mobileimgaest mt-3'>
                        <Carousel.Item interval={3000}>
                            <img className="d-block sgdfgdg" src={Topbrands1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img className="d-block sgdfgdg" src={Topbrands2} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img className="d-block sgdfgdg" src={Topbrands3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>




                    <div className='text-styles mt-3'>
                        In addition to our bespoke Metaverse services, BrandKiln has deployed its own Corporate Metaverse, which is available for meetings, events, virtual worlds, and digital twin projects. This platform features conversational AI avatars, social zones, meeting halls, and project management leaderboards, offering a comprehensive environment for virtual collaboration and innovation. With Covince Labs AG as our platform partners, we remain focused on creating impactful experiences that deliver memorable user journeys and desired outcomes. Join us and explore the future of brand engagement in the Metaverse.
                    </div>
                    {/* <div className='text-styles mt-4'>
                    See how we have leveraged Metaverse services for streamlining:
                                        </div>
                                        
                                        <div className='text-styles mt-2'>
                                        <ol>
  <li><b>eLearning for Pinktum AG:</b> What happens when a global leader e-Training- Pinktum AG, leverages Brand Kiln’s Metaverse capabilities and content prowess to transform their business solutions? <a href="link_to_more_info">Read more  .</a></li>
  <li><b>Real estate sales:</b> This is the story of how Physical Real Estate sales can be positioned towards global, remote customers? <Link to="link_to_more_info">Read more  .</Link></li>
  <li><b>Hyper-real corporate Metaverse:</b> Know more about the Brand Kiln metaverse that is used by leading corporates for virtual collaboration, innovation as well as for trade fairs, meetings and conferences. <a href="link_to_more_info">Read more  .</a></li>
</ol>

                                        </div> */}

                    <div>
                        <div
                            className='bluebigobutton mt-3'
                            onClick={handleClick}
                        >
                            Engage us for creating your Metaverse presence <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0755 22.2428L20.1965 24.3638L26.5625 17.9993L20.198 11.6348L18.077 13.7573L20.8175 16.4993L9.512 16.4993V19.4993L20.8175 19.4993L18.0755 22.2428Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.667 29.667C36.111 23.223 36.111 12.777 29.667 6.333C23.223 -0.111 12.777 -0.111 6.333 6.333C-0.111 12.777 -0.111 23.223 6.333 29.667C12.777 36.111 23.223 36.111 29.667 29.667ZM27.546 27.546C30.0778 25.0142 31.5001 21.5804 31.5001 18C31.5001 14.4196 30.0778 10.9858 27.546 8.454C25.0142 5.92224 21.5804 4.49992 18 4.49992C14.4196 4.49992 10.9858 5.92224 8.454 8.454C5.92224 10.9858 4.49992 14.4196 4.49992 18C4.49992 21.5804 5.92224 25.0142 8.454 27.546C10.9858 30.0778 14.4196 31.5001 18 31.5001C21.5804 31.5001 25.0142 30.0778 27.546 27.546Z" fill="white"/>
</svg>

                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="Metaverse" />
                        </div>
                    </div>

                    <ScrollPlayVideo2 videoUrl="https://www.youtube.com/watch?v=VASyND1VL2U" />

                    <div className='text-styles '>See how we have leveraged <span>Metaverse</span> services for streamlining:</div>



                    <div>
                        {faqData.map((faq, index) => (
                            <div key={faq.id}>
                                <h2 onClick={() => toggleAnswer(index)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#2857EF" />
                                    </svg>
                                    <span className='main-textpink' style={{ color: '#2857EF' }}>{faq.question}</span>
                                </h2>
                                {activeIndex === index && (
                                    <div>
                                        <div className='text-style'>{faq.answer}</div>
                                        <div className='sfdhktghbderf'>
                                            <Link to={faq.caseStudyLink}>
                                                VIEW THE CASE STUDY
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM18.0606 11.0607C18.3419 10.7794 18.4999 10.3978 18.4999 10C18.4999 9.60217 18.3419 9.22064 18.0606 8.93934L12.0606 2.93934C11.4748 2.35355 10.5251 2.35355 9.93928 2.93934C9.3535 3.52513 9.3535 4.47487 9.93928 5.06066L13.3786 8.5L2.99994 8.5C2.17151 8.5 1.49994 9.17157 1.49994 10C1.49994 10.8284 2.17151 11.5 2.99994 11.5L13.3786 11.5L9.93928 14.9393C9.3535 15.5251 9.3535 16.4749 9.93928 17.0607C10.5251 17.6464 11.4748 17.6464 12.0606 17.0607L18.0606 11.0607Z" fill="#747474" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='text-styles mt-5 mb-5'>Read Next
                        <Link to="/e-learning-development">  <span>: e -Training</span> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474" />
                        </svg></Link>
                    </div>


                </div>





            </section>
        </>
    )
}

export default Metaverse