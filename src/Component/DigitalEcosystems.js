import React, { useState } from 'react';
import Bkblue from '../Images/BK_6/eco.png'
import Topbrands from '../Images/bktop4.png'
import Topbrands1 from '../Images/0e0780cec5095b930a6e5043d683ec03.png'
import Topbrands2 from '../Images/aeed529d1fb9cb86b80d06596492a86c.png'
import Topbrands3 from '../Images/d074b1609fce1911d064f9052957dba4.png'
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
            question: "My Ideal Wedding, Australia",
            answer: "Wedding planning is never easy. But it could be, if done with right set of tools. Learn how Brand Kiln helped countless Australians to better plan their weddings, seating arrangements, send and filter invites, and much more by supporting the development of My Ideal Wedding!",
            caseStudyLink: "/case-study/My-Ideal-Wedding" // Correct link
        },
        {
            id: 2,
            question: "Jadcom Communications, USA",
            answer: "It may be a small world, but our cultures and beliefs are vast and diverse. Read how Brand Kiln is working towards creating value through collaborative, curated, and process driven approach to solidify the brand’s position. ",
            caseStudyLink: "/case-study/Jadcom" // Correct link
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

                    <div className='bluetitel'>Digital Ecosystems</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>We build cohesive digital ecosystems, seamlessly integrated with mobile, web, applications, POS interfaces, eCommerce platforms, and enterprise backend applications                            </li>
                                <li>We help you bridge into Web 3.0 thereby ensuring seamless integration, empowerment, and readiness for future digital innovations, including blockchain, AI, and Metaverse elements</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                    Is your digital landscape is fragmented? Do you struggle to maintain consistent interaction between various fragmented front end channels and your backend  digital processes? With Web 3.0 on the horizon, are you feeling overwhelmed with blockchain, AI, and Metaverse further adding to your tech-complexity? If the answer to any of the above questions is “Yes”, then It’s time we speak.
                       </div>
                    <div className='text-styles mt-3'>
                    At Brand Kiln, we specialize in assessing complex digital landscapes- and solving problems. We build digital ecosystems that bring everything together. Our expertise spans both Web 2.0 and Web 3.0. We've delivered digital infrastructures for enterprises, ensuring seamless integration and readiness for future technologies.
                                        </div>
                                  <div className='d-flex gap-3 w-100 mt-4'>
                        <img className='sgdfgdg' src={Topbrands1}/>
                        <img className='sgdfgdg'  src={Topbrands2}/>
                        <img className='sgdfgdg'  src={Topbrands3}/>

                    </div>
                    <div className='text-styles mt-3'>
                    Whether it's a customer-facing infrastructure, an ERP, or a fully-integrated digital setup, you can count on us. We make sure your digital experience is consistent and efficient across all platforms. Let us help you navigate and simplify the complex digital world, so you can focus on growth and innovation.
                                                            </div>
                

                                                            <div
                            className='bluebigobutton mt-3'
                            onClick={handleClick}
                        >
                            Engage us for creating your Digital Ecosystem  
                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="Digital Ecosystem" />
                        </div>
                    <img className='bkblue mt-5 mb-4' src={Topbrands} />

                    <div className='text-styles '>Learn how we delivered end to end <span>digital ecosystems</span></div>



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
                    <Link to="/apps-and-platform-development"> <span>: Apps and Platform Development</span> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474"/>
</svg></Link> 
</div>


                </div>





            </section>
        </>
    )
}

export default Metaverse