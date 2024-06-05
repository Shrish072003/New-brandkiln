import React, { useState } from 'react';
import Bkblue from '../Images/BK_6/Content.png'
import Topbrands from '../Images/BrPosnBigPic1.png'
import Topbrands1 from '../Images/Contentsvc1.png'
import Topbrands2 from '../Images/Contentsvc2.png'
import Topbrands3 from '../Images/Contentsvc3.png'
import { Link } from 'react-router-dom';
import Bkblue2 from '../Images/BK_6/BrandPositioningmobil.png'


import FormEngage from './formengage.js';



const Strategy = () => {


    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };


    const faqData = [
        {
            id: 1,
            question: "Pinktum AG",
            answer: "By delivering an immersive Metaverse for learning and collaboration.",
            caseStudyLink: "/case-study/Maritime" // Correct link
        },
        {
            id: 2,
            question: "MotorOctane",
            answer: "Asia's number 1 motoring channel with 4 million subscribers and 2.5 million monthly website traffic.",
            caseStudyLink: "/case-study/NirDhwani" // Correct link
        },
        {
            id: 3,
            question: "Underwater Signal processing start-up Nirdhwani Technologies",
            answer: "to help them break clutter and achieve resonance and engagement with niche audience.",
            caseStudyLink: "/case-study/Purnartha" // Correct link
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

                    <div className='bluetitel' style={{ color: '#E14E94' }}>Content Services</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>

                                Your narrative, our storytelling: an unbeatable combination. We are skilled wordsmiths and have curated brand voice and strategic content for global brands across industries </li>
                            <li>We embrace diversity in format and platform while ensuring consistency in brand voice. SEO optimized narratives… that’s a given!</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                        Content isn't just information; it's the voice that shapes perceptions, builds relationships, and compels action. At Brand Kiln, we understand the power of storytelling in crafting captivating narratives that leave an indelible mark on the minds of your audience. Our content services are designed to help you navigate the complexities of creating engaging, informative, and SEO-optimized content that drives tangible business results.                    </div>
                    <div className='text-styles mt-3'>
                        With our "your narrative, our storylines" approach, we become an extension of your brand, collaborating closely to understand your unique voice and vision. We translate your brand essence into captivating stories that resonate with your target audience on an emotional level, fostering deeper connections and driving meaningful engagement. From blog posts to videos, social media content to website copy, we embrace diversity in format and platform to cater to the preferences of your audience while ensuring consistency in brand voice across all touchpoints.</div>
                    <div className='d-flex gap-3 w-100 mt-4'>
                        <img className='sgdfgdg' src={Topbrands1} />
                        <img className='sgdfgdg' src={Topbrands2} />
                        <img className='sgdfgdg' src={Topbrands3} />

                    </div>
                    <div className='text-styles mt-3'>
                        SEO is seamlessly woven into the fabric of our storytelling, ensuring your narratives are not only captivating but also discoverable, maximizing your brand's visibility and reach. Most importantly, we meticulously maintain your unique brand voice throughout all content, creating a unified and recognizable brand identity that sets you apart in a crowded digital landscape. Partner with Brand Kiln and let us help you tell your story in a way that captivates, resonates, and drives results.                    </div>

                    <div>
                        <div
                            className='bluebigobutton mt-3'
                            style={{ backgroundColor: '#E14E94' }}
                            onClick={handleClick}
                        >
                            Engage us for your Content needs
                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="Content Creation" />
                        </div>
                    </div>

                    <img className='bkblue mt-5 mb-4' src={Topbrands} />

                    <div className='text-styles '>See how we have leveraged <span>Content Services </span> for:</div>



                    <div>
                        {faqData.map((faq, index) => (
                            <div key={faq.id}>
                                <h2 onClick={() => toggleAnswer(index)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#DB086B" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.0606 13.0607C20.3419 12.7794 20.4999 12.3978 20.4999 12C20.4999 11.6022 20.3419 11.2206 20.0606 10.9393L14.0606 4.93934C13.4748 4.35355 12.5251 4.35355 11.9393 4.93934C11.3535 5.52513 11.3535 6.47487 11.9393 7.06066L15.3786 10.5L4.99994 10.5C4.17151 10.5 3.49994 11.1716 3.49994 12C3.49994 12.8284 4.17151 13.5 4.99994 13.5L15.3786 13.5L11.9393 16.9393C11.3535 17.5251 11.3535 18.4749 11.9393 19.0607C12.5251 19.6464 13.4748 19.6464 14.0606 19.0607L20.0606 13.0607Z" fill="#DB086B" />
                                    </svg>
                                    <span className='main-textpink' style={{ color: '' }}>{faq.question}</span>
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
                        <Link to="/metaverse">  <span>: Metaverse Services</span> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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