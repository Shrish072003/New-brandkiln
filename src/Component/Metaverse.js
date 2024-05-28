import React, { useState } from 'react';
import Bkblue from '../Images/bkblue.png'
import ScrollPlayVideo2 from './ScrollPlayVideo.js';
import Topbrands1 from '../Images/image1.png'
import Topbrands2 from '../Images/Metaverse2.png'
import Topbrands3 from '../Images/Metaverse3.png'
import { Link  } from 'react-router-dom';

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
                    <div className='d-flex gap-3 w-100 mt-4'>
                        <img className='sgdfgdg' src={Topbrands1}/>
                        <img className='sgdfgdg'  src={Topbrands2}/>
                        <img className='sgdfgdg'  src={Topbrands3}/>

                    </div>
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
                            Engage us for creating your Metaverse presence  
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
<path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474"/>
</svg></Link>
</div>


                </div>





            </section>
        </>
    )
}

export default Metaverse