import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/My Ideal Wedding.jpg';
import Myideal from '../Images/Logo_s/My Ideal Wedding.png';


const caseStudies = [
  {
    title: 'The Challenge: Enhancing Functionality and Customization',
    content: 'My Ideal Wedding embarked on a mission to redefine the wedding planning paradigm. Functionality-wise, it aimed to parallel the capabilities of contemporary platforms, aggregating diverse products and services cohesively. Simultaneously, the platform envisioned a higher degree of personalization for users, introducing individual microsites. The Brand Kiln team responded with a purpose-built drag-and-drop web page builder, enabling users to construct microsites effortlessly.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Technical Mastery: A Holistic Approach',
    content: 'Brand Kiln\'s approach was meticulous and strategic. Core functionalities were seamlessly integrated into My Ideal Wedding, providing a comprehensive suite of wedding planning services. The integration of venue floor plans, allowed users to intricately plan seating arrangements within the platform. Geofencing methodology optimized venue and provider searches, while the platform\'s capacity to create invitations, send invites, and automatically filter RSVPs into event stages added another layer of technological sophistication. The journey to this technical platform wasn\'t without its challenges. My Ideal Wedding had diligently scoured for over two years to find a robust solution provider until Brand Kiln emerged as the catalyst for their aspirations.',
    video: 'https://youtu.be/0ouxItSLyFY?si=n4C4_f0y3FHuBSRS',
  },
  {
    title: 'Result: Technological Innovation Unleashed',
    content: '"My Ideal Wedding epitomizes technological innovation. Brand Kiln not only comprehended our vision but elevated it with features we hadn\'t envisioned. The drag-and-drop builder and microsites have redefined our positioning while the advertiser options optimized scalability with revenue potential," commended Craig, the Founder and CEO of My Ideal Wedding. This collaboration between My Ideal Wedding and Brand Kiln transcends the conventional, representing a technical journey that transforms aspirations into digital realities. As My Ideal Wedding takes center stage in the Australian wedding planning realm, the partnership with Brand Kiln remains the linchpin of its technological innovation and customized offerings.',
    image: '',
  },
];


const Casestudy = () => {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleAccordion = (index) => {
    setOpenIndices(prevOpenIndices =>
      prevOpenIndices.includes(index)
        ? prevOpenIndices.filter(i => i !== index)
        : [...prevOpenIndices, index]
    );
  };

  return (
    <>
 <section className='d-flex gap-5 justify-content-center'>
      <div className='w-20 mt-5'>
          <img src={Myideal} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: My Ideal Wedding</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: My Ideal Wedding - A Technical Triumph with Brand Kiln
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the dynamic landscape of web-based wedding platforms, My Ideal Wedding, a visionary project hailing from Australia, stands as a testament to technical prowess and innovation. Collaborating with Brand Kiln, the platform not only met but strategically surpassed expectations by integrating essential functionalities with distinctive features that elevate its technological standing.            </div>
            <hr className='w-998' />

            {caseStudies.map((caseStudy, index) => (
              <React.Fragment key={index}>
                <div className='faqs'>
                  <div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: 'white' }}>
                    <div onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">
                      <div className='d-flex align-items-center'>
                        <div className='circlebefore'></div>
                        {caseStudy.title}
                      </div>
                      <div>{openIndices.includes(index) ? <FaMinus className='FaMinus' /> : <FaPlus className='FaMinus' />}</div>
                    </div>
                    <div style={{ height: openIndices.includes(index) ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                      <div className='mainadanfskjndfjsdjf'>
                        <div className='about-faq-textf ml-3 ' dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>
                        {caseStudy.image && <img className='mt-3 ml-3' src={caseStudy.image} alt={caseStudy.title} />}
                        {caseStudy.video && <video className="mt-3 ml-3 fghdjkfgjdg" src={caseStudy.video} controls />}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='w-998' />
              </React.Fragment>
            ))}

            <div className='d-flex justify-content-between w-998 mt-5 mb-5 align-items-center'>
              <div><FaCaretLeft /> PREVIOUS</div>
              <div>NEXT <FaCaretRight /></div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Casestudy;
