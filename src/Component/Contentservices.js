import React, { useState } from 'react';
import Bkblue from '../Images/BK_6/Content.png'
import Topbrands from '../Images/BrPosnBigPic1.png'
import Topbrands1 from '../Images/Contentsvc1.png'
import Topbrands2 from '../Images/Contentsvc2.png'
import Topbrands3 from '../Images/Contentsvc3.png'
import { Link  } from 'react-router-dom';

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
                    

                    <div className='bluetitel' style={{color:'#E14E94'}}>Content Services</div>
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
                        <img className='sgdfgdg' src={Topbrands1}/>
                        <img className='sgdfgdg'  src={Topbrands2}/>
                        <img className='sgdfgdg'  src={Topbrands3}/>

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
<path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474"/>
</svg>
</Link>
</div>


                </div>





            </section>
        </>
    )
}

export default Strategy