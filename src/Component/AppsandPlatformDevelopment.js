import React, { useState } from 'react';
import Bkblue from '../Images/BK_6/app.png'
import Topbrands from '../Images/BrPosnBigPic1.png'
import Topbrands1 from '../Images/6be866d916556256102e788c3a512bc5.png'
import Topbrands2 from '../Images/bb3d5ead3434e17ac956be6b4183238f.png'
import Topbrands3 from '../Images/ee9335a863d33c9fb59fa9930711f1fd.png'
import { Link  } from 'react-router-dom';
import Bkblue2 from '../Images/BK_6/BrandPositioningmobil2.png'

import FormEngage from './formengage.js';



const Metaverse = () => {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };



    const faqData = [
        {
            id: 1,
            question: "Asia’s no.1 motoring channel RMH MotorOctane",
            answer: "What does Asia’s no.1 motoring channel and Brand Kiln have in common? The ability to “drive”! The former drives passion, and the latter drives growth. Read more about the seamless integration of passion and growth through technology and supreme ",
            caseStudyLink: "/case-study/MotorOctane" // Correct link
        },
        {
            id: 2,
            question: "App & Platform Development and Experience Innovation: A Global Leader in Private Banking",
            answer: "A Companion You can “Bank” on: How does a bank become more than just a facilitator of funds to a whole-scale digital financial companion that prioritizes customer interactions and drives growth? With Brand Kiln’s help of course! Read more on the journey here. ",
            caseStudyLink: "/case-study/private-banks" // Correct link
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


                    <div className='bluetitel'>Apps and Platform Development</div>
                    <div className='text-styles mt-4'>
                        <ul>
                            <li>
                            
                            Expertise in developing complex applications that support specialized users, manage large datasets, and enable advanced analysis, ensuring seamless collaboration and risk mitigation                            </li>
                                <li>We utilize a five-layer complexity framework to address integration, information, intention, environment, and institutional challenges for holistic and effective solutions</li>
                        </ul>
                    </div>
                    <div className='text-styles mt-4'>
                    Are your application needs complex? Do you support highly trained users with specialized knowledge? Do they navigate vast datasets and require advanced analysis tools? Are their workflows are nonlinear and involve multiple roles, tools, and platforms. If your stakes are high— and mistakes can lead to significant revenue loss or worse, we are the right choice for you.  </div>
                    <div className='text-styles mt-3'>
                    At Brand Kiln, we specialize in developing applications that tackle these complexities head-on. We define complex applications as those supporting broad, unstructured goals and nonlinear workflows. Our approach addresses five layers of complexity: integration, information, intention, environment, and institution.     
                    </div>
                    <div className='text-styles mt-3'>
                    How We Do It: We start with the core—technology platforms and data. We then consider the variable goals and environments of the users, and finally, the institutionalized ways of working within specific cultures. This structure allows us to address complex business problems holistically while ensuring each module of complexity is delivered uncompromisingly.     
                    </div>
                                  <div className='d-flex gap-3 w-100 mt-4'>
                        <img className='sgdfgdg' src={Topbrands1}/>
                        <img className='sgdfgdg'  src={Topbrands2}/>
                        <img className='sgdfgdg'  src={Topbrands3}/>

                    </div>
                    <div className='text-styles mt-3'>
                    Whether you're developing software applications, enterprise-wide apps, or API integrations, you can rely on our experience and technical expertise. We create workflows that are not only effective but also adaptable to the unique challenges of your domain. Trust Brand Kiln to deliver solutions that are driven by clear processes and supported by skilled technical knowledge. We ensure that your complex application needs are met with precision and excellence.                                                           
                     </div>
                    

                     <div
                            className='bluebigobutton mt-3'
                            onClick={handleClick}
                        >
                            Engage us for creating your App and Product Development  
                        </div>

                        <div className={`form-container ${showForm ? 'show' : ''}`}>
                            <FormEngage sometext="App and Product Development" />
                        </div>
                                            <img className='bkblue mt-5 mb-4' src={Topbrands} />

                    <div className='text-styles '>See how we have leveraged <span>App and Platform development</span> for:</div>



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
                    <Link to="/Brand-strategy"> <span>: Brand Strategy</span> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill="#747474"/>
</svg></Link> 
</div>


                </div>





            </section>
        </>
    )
}

export default Metaverse