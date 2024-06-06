import React, { useState } from 'react';
import Bkblue from '../Images/imagepink.png'
import Bkblue2 from '../Images/BK_6/BrandPositioningmobil.png'

import Topbrands1 from '../Images/profiles/BrStrat1.png'
import Topbrands2 from '../Images/profiles/BrStrat2.png'
import Topbrands3 from '../Images/profiles/BrStrat3.png'
import { Link } from 'react-router-dom';
import FormEngage from './formengage.js';
import ScrollPlayVideo from './ScrollPlayVideo.js';
import Carousel from 'react-bootstrap/Carousel';



const Strategy = () => {

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };



    const faqData = [
        {
            id: 1,
            question: "India’s leading thinktank: Maritime Research Center",
            answer: "A complete overhaul of Brand language followed by strategic digital and reach initiatives propelled MRC to numero uno position among Indian thinktanks and global recognitions. ",
            link: "/case-study/Maritime"
        },
        {
            id: 2,
            question: "Circular economy showcase for India’s largest polystryrene producer (Petrochem category)",
            answer: "This is the story of how strategic communication paved the way for industry-wide appreciation of Supreme Petrochem for its circular economy initiatives.",
            link: "/case-study/NirDhwani"
        },
        {
            id: 3,
            question: "Retail positioning and launch of B2C chocolate brand",
            answer: "How a premium French chocolate brand found market resonance as Brand Kiln strategized their brand positioning, branding, and packaging design to make a bold statement.",
            link: "/case-study/Supreme-Petrochem"
        }
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
                    <div className='flex-column dkfdkfkdgkg mobileimgaest'>
                        <hr />
                        <Link to='/Brand-strategy'><div className='d-flex align-items-center justify-content-between'>Brand Strategy<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6094 7.99979C14.6094 6.59334 14.1923 5.21848 13.4109 4.04906C12.6296 2.87965 11.519 1.9682 10.2196 1.42998C8.92018 0.891753 7.49038 0.750929 6.11096 1.02531C4.73153 1.2997 3.46446 1.97696 2.46995 2.97147C1.47544 3.96598 0.798175 5.23306 0.523791 6.61248C0.249407 7.9919 0.390231 9.4217 0.928454 10.7211C1.46668 12.0205 2.37813 13.1311 3.54754 13.9125C4.71696 14.6938 6.09182 15.1109 7.49826 15.1109C9.38425 15.1109 11.193 14.3617 12.5266 13.0281C13.8602 11.6945 14.6094 9.88577 14.6094 7.99979ZM7.68938 11.5553C7.57319 11.4366 7.50813 11.277 7.50813 11.1109C7.50813 10.9448 7.57319 10.7852 7.68938 10.6665L9.72049 8.62201L3.43604 8.62201C3.27102 8.62201 3.11275 8.55645 2.99607 8.43976C2.87938 8.32307 2.81382 8.16481 2.81382 7.99979C2.81382 7.83476 2.87938 7.6765 2.99607 7.55981C3.11275 7.44312 3.27102 7.37756 3.43604 7.37756L9.65826 7.37756L7.68938 5.40868C7.5715 5.2908 7.50528 5.13093 7.50528 4.96423C7.50528 4.79753 7.5715 4.63766 7.68938 4.51979C7.80725 4.40191 7.96712 4.33569 8.13382 4.33569C8.30052 4.33569 8.46039 4.40191 8.57826 4.51979L12.076 8.03534L8.56938 11.5553C8.5116 11.6131 8.443 11.659 8.3675 11.6902C8.29201 11.7215 8.21109 11.7376 8.12938 11.7376C8.04766 11.7376 7.96674 11.7215 7.89125 11.6902C7.81575 11.659 7.74716 11.6131 7.68938 11.5553Z" fill="#BD125E" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/brand-positioning'><div className='d-flex align-items-center justify-content-between'>Brand Positioning<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6094 7.99979C14.6094 6.59334 14.1923 5.21848 13.4109 4.04906C12.6296 2.87965 11.519 1.9682 10.2196 1.42998C8.92018 0.891753 7.49038 0.750929 6.11096 1.02531C4.73153 1.2997 3.46446 1.97696 2.46995 2.97147C1.47544 3.96598 0.798175 5.23306 0.523791 6.61248C0.249407 7.9919 0.390231 9.4217 0.928454 10.7211C1.46668 12.0205 2.37813 13.1311 3.54754 13.9125C4.71696 14.6938 6.09182 15.1109 7.49826 15.1109C9.38425 15.1109 11.193 14.3617 12.5266 13.0281C13.8602 11.6945 14.6094 9.88577 14.6094 7.99979ZM7.68938 11.5553C7.57319 11.4366 7.50813 11.277 7.50813 11.1109C7.50813 10.9448 7.57319 10.7852 7.68938 10.6665L9.72049 8.62201L3.43604 8.62201C3.27102 8.62201 3.11275 8.55645 2.99607 8.43976C2.87938 8.32307 2.81382 8.16481 2.81382 7.99979C2.81382 7.83476 2.87938 7.6765 2.99607 7.55981C3.11275 7.44312 3.27102 7.37756 3.43604 7.37756L9.65826 7.37756L7.68938 5.40868C7.5715 5.2908 7.50528 5.13093 7.50528 4.96423C7.50528 4.79753 7.5715 4.63766 7.68938 4.51979C7.80725 4.40191 7.96712 4.33569 8.13382 4.33569C8.30052 4.33569 8.46039 4.40191 8.57826 4.51979L12.076 8.03534L8.56938 11.5553C8.5116 11.6131 8.443 11.659 8.3675 11.6902C8.29201 11.7215 8.21109 11.7376 8.12938 11.7376C8.04766 11.7376 7.96674 11.7215 7.89125 11.6902C7.81575 11.659 7.74716 11.6131 7.68938 11.5553Z" fill="#BD125E" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/brand-innovation'><div className='d-flex align-items-center justify-content-between'>Experience Innovation<svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6094 7.99979C14.6094 6.59334 14.1923 5.21848 13.4109 4.04906C12.6296 2.87965 11.519 1.9682 10.2196 1.42998C8.92018 0.891753 7.49038 0.750929 6.11096 1.02531C4.73153 1.2997 3.46446 1.97696 2.46995 2.97147C1.47544 3.96598 0.798175 5.23306 0.523791 6.61248C0.249407 7.9919 0.390231 9.4217 0.928454 10.7211C1.46668 12.0205 2.37813 13.1311 3.54754 13.9125C4.71696 14.6938 6.09182 15.1109 7.49826 15.1109C9.38425 15.1109 11.193 14.3617 12.5266 13.0281C13.8602 11.6945 14.6094 9.88577 14.6094 7.99979ZM7.68938 11.5553C7.57319 11.4366 7.50813 11.277 7.50813 11.1109C7.50813 10.9448 7.57319 10.7852 7.68938 10.6665L9.72049 8.62201L3.43604 8.62201C3.27102 8.62201 3.11275 8.55645 2.99607 8.43976C2.87938 8.32307 2.81382 8.16481 2.81382 7.99979C2.81382 7.83476 2.87938 7.6765 2.99607 7.55981C3.11275 7.44312 3.27102 7.37756 3.43604 7.37756L9.65826 7.37756L7.68938 5.40868C7.5715 5.2908 7.50528 5.13093 7.50528 4.96423C7.50528 4.79753 7.5715 4.63766 7.68938 4.51979C7.80725 4.40191 7.96712 4.33569 8.13382 4.33569C8.30052 4.33569 8.46039 4.40191 8.57826 4.51979L12.076 8.03534L8.56938 11.5553C8.5116 11.6131 8.443 11.659 8.3675 11.6902C8.29201 11.7215 8.21109 11.7376 8.12938 11.7376C8.04766 11.7376 7.96674 11.7215 7.89125 11.6902C7.81575 11.659 7.74716 11.6131 7.68938 11.5553Z" fill="#BD125E" />
                        </svg>
                        </div></Link>
                        <hr />
                        <Link to='/content-services'><div className='d-flex align-items-center justify-content-between'>Content Services <svg width="30" height="30" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6094 7.99979C14.6094 6.59334 14.1923 5.21848 13.4109 4.04906C12.6296 2.87965 11.519 1.9682 10.2196 1.42998C8.92018 0.891753 7.49038 0.750929 6.11096 1.02531C4.73153 1.2997 3.46446 1.97696 2.46995 2.97147C1.47544 3.96598 0.798175 5.23306 0.523791 6.61248C0.249407 7.9919 0.390231 9.4217 0.928454 10.7211C1.46668 12.0205 2.37813 13.1311 3.54754 13.9125C4.71696 14.6938 6.09182 15.1109 7.49826 15.1109C9.38425 15.1109 11.193 14.3617 12.5266 13.0281C13.8602 11.6945 14.6094 9.88577 14.6094 7.99979ZM7.68938 11.5553C7.57319 11.4366 7.50813 11.277 7.50813 11.1109C7.50813 10.9448 7.57319 10.7852 7.68938 10.6665L9.72049 8.62201L3.43604 8.62201C3.27102 8.62201 3.11275 8.55645 2.99607 8.43976C2.87938 8.32307 2.81382 8.16481 2.81382 7.99979C2.81382 7.83476 2.87938 7.6765 2.99607 7.55981C3.11275 7.44312 3.27102 7.37756 3.43604 7.37756L9.65826 7.37756L7.68938 5.40868C7.5715 5.2908 7.50528 5.13093 7.50528 4.96423C7.50528 4.79753 7.5715 4.63766 7.68938 4.51979C7.80725 4.40191 7.96712 4.33569 8.13382 4.33569C8.30052 4.33569 8.46039 4.40191 8.57826 4.51979L12.076 8.03534L8.56938 11.5553C8.5116 11.6131 8.443 11.659 8.3675 11.6902C8.29201 11.7215 8.21109 11.7376 8.12938 11.7376C8.04766 11.7376 7.96674 11.7215 7.89125 11.6902C7.81575 11.659 7.74716 11.6131 7.68938 11.5553Z" fill="#BD125E" />
                        </svg>
                        </div></Link>
                        <hr />

                       

                    </div>

                    <div className='bluetitel' style={{ color: '#E14E94' }}>Brand Strategy</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>
                                For Web3.0 businesses we strategize go-to-market roadmap </li>
                            <li>For traditional brands we articulate Web 3.0 opportunities and audiences</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                        In today's ever-evolving business landscape, adaptation is paramount for success. Here at Brand Kiln, we specialize in crafting bespoke brand strategies that propel businesses to the forefront of the Web 3.0 era.                    </div>
                    <div className='text-styles mt-3'>
                        For new age brands navigating the intricacies of Web 3.0, we excel in deciphering its nuances, ensuring your brand doesn't just participate but leads the way. We outlay new opportunities, synergies and articulate your brand vision.
                    </div>
                    <div className='text-styles mt-3'>
                        Traditional businesses looking to seamlessly integrate legacy strengths with emerging technologies rely on our counsel too. We partner their transformation journey, enabling brands to pivot towards new audiences and opportunities unraveled by the emergent tech-driven ecosystem.                         </div>
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
                        Our award-winning framework considers your business nuances, values, and unique positioning within the market to deliver a GTM strategy that breaks clutter and achieves resonance with your audiences.                           </div>


                    <div>
                        <div
                            className='bluebigobutton mt-3'
                            style={{ backgroundColor: '#E14E94' }}
                            onClick={handleClick}
                        >
                            Engage us for creating your Brand Strategy <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0755 22.2428L20.1965 24.3638L26.5625 17.9993L20.198 11.6348L18.077 13.7573L20.8175 16.4993L9.512 16.4993V19.4993L20.8175 19.4993L18.0755 22.2428Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.667 29.667C36.111 23.223 36.111 12.777 29.667 6.333C23.223 -0.111 12.777 -0.111 6.333 6.333C-0.111 12.777 -0.111 23.223 6.333 29.667C12.777 36.111 23.223 36.111 29.667 29.667ZM27.546 27.546C30.0778 25.0142 31.5001 21.5804 31.5001 18C31.5001 14.4196 30.0778 10.9858 27.546 8.454C25.0142 5.92224 21.5804 4.49992 18 4.49992C14.4196 4.49992 10.9858 5.92224 8.454 8.454C5.92224 10.9858 4.49992 14.4196 4.49992 18C4.49992 21.5804 5.92224 25.0142 8.454 27.546C10.9858 30.0778 14.4196 31.5001 18 31.5001C21.5804 31.5001 25.0142 30.0778 27.546 27.546Z" fill="white"/>
</svg>

                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="Brand Strategy" />
                        </div>
                    </div>

                    <ScrollPlayVideo videoUrl="https://www.youtube.com/watch?v=JJ8wwbUoI0g" />


                    <div className='text-styles '>See how we have leveraged <span>Brand Strategy </span>for:</div>



                    <div>
                        {faqData.map((faq, index) => (
                            <div key={faq.id}>
                                <h2 onClick={() => toggleAnswer(index)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DB086B" />
                                    </svg>
                                    <span className='main-textpink' style={{ color: '' }}>{faq.question}</span>
                                </h2>
                                {activeIndex === index && (
                                    <div>
                                        <div className='text-style'>{faq.answer}</div>
                                        <div className='sfdhktghbderf'>
                                            <Link to={faq.link}>
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
                    <div className='text-styles mt-5 mb-5'>
                        Read Next
                        <Link to="/brand-positioning">
                            <span>: Brand Positioning</span>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474" />
                            </svg>
                        </Link>
                    </div>


                </div>





            </section>
        </>
    )
}

export default Strategy