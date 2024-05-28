import React, { useState } from 'react';
import Bkblue from '../Images/BK_6/BrandPositioning.png'
import Topbrands from '../Images/BrPosnBigPic1.png'
import Topbrands1 from '../Images/Marcomm-consulting.png.webp'
import Topbrands2 from '../Images/Immersive-storytelling.png.webp'
import Topbrands3 from '../Images/Creative-Services.png'
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
            question: "Fintech firm Purnartha",
            answer: "who successfully navigated EU and Americas market buoyed by our communication advisory and the “Arctic Tern” brand story. ",
            caseStudyLink: "/case-study/Maritime" // Corrected link
        },
        {
            id: 2,
            question: "World’s largest specialty ingredients distributor",
            answer: "helping them articulate their brand pivot and deliver market resonance across APAC region. ",
            caseStudyLink: "/case-study/NirDhwani" // Corrected link
        },
        {
            id: 3,
            question: "Underwater signal processing firm Nirdhwani Technologies",
            answer: "helping them shed the yoke of an outdated brand identity and embrace their new avatar",
            caseStudyLink: "/case-study/Purnartha" // Corrected link
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
                    

                    <div className='bluetitel' style={{color:'#E14E94'}}>Brand Positioning</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>
                            
                            As an organization, you have changed and adopted. Does your brand positioning convey the new you? That’s where we come into the picture </li>
                                <li>We place your Brand Purpose at the heart of our ideation seamlessly connect it with your beliefs and actions</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                    In today's saturated marketplace, differentiation is no longer enough. True brand leadership requires a symphonic understanding of three key elements: your target audience, your brand's unique essence, and the ever-evolving competitive landscape.                    </div>
                    <div className='text-styles mt-4'>
                    That's where brand positioning comes in. It's not just about creating a catchy tagline or logo; it's about strategically defining your unique value proposition and securing a distinct space in the minds of your target audience.                     </div>
                    <div className='text-styles mt-4'>
                    The market is dynamic, and so is your brand. We don't just establish a position; we continuously monitor, adapt, and evolve it to stay relevant in the ever-changing business landscape.  This process goes beyond mere product features; it's about defining your brand's essence, values, and promise.                     </div>
                    <div className='d-flex gap-3 w-100 mt-4'>
                        <img className='sgdfgdg' src={Topbrands1}/>
                        <img className='sgdfgdg'  src={Topbrands2}/>
                        <img className='sgdfgdg'  src={Topbrands3}/>

                    </div>
                    <div className='text-styles mt-3'>
                    We delve beyond surface-level features to unearth the unique qualities, persona, ethos, and values that truly differentiate your brand. We don't just understand your product; we understand your brand's aspirations and the underlying market dynamics that shape them.</div>
                    <div className='text-styles mt-3'>
                    We delve beyond surface-level features to unearth the unique qualities, persona, ethos, and values that truly differentiate your brand. We don't just understand your product; we understand your brand's aspirations and the underlying market dynamics that shape them.                    </div>


                    <div>
                        <div
                            className='bluebigobutton mt-3'
                            style={{ backgroundColor: '#E14E94' }}
                            onClick={handleClick}
                        >
                            Engage us for creating your Brand Positioning 
                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="Brand Positioning" />
                        </div>
                    </div>
                    
                    
                                        <img className='bkblue mt-5 mb-4' src={Topbrands} />

                    <div className='text-styles '>See how we have leveraged <span>Brand Strategy </span> for:</div>



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
                    <div className='text-styles mt-5 mb-5'>Read Next <Link to="/brand-innovation">
                        <span>: Experience Innovation</span> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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