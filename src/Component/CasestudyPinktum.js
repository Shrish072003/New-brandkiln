import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Pinktum.jpg';

const caseStudies = [
  {
    "title": "The Challenge: A Global Reach for 21st Century Skills",
    "content": "Pinktum, renowned for pioneering eTraining in Europe, set its sights on global expansion. To achieve this, they needed more than a partner; they needed a collaborator who could meet their standards in training excellence. Brand Kiln, known for its prowess in pedagogy and development, became the chosen one.",
    "image": MRCImage
  },
  {
    "title": "Brand Kiln's Mastery: Crafting a Global eTraining Arsenal",
    "content": "Over 18 transformative months, Brand Kiln didn't just develop new courses; they embarked on a journey of collaboration, working closely with Pinktum's internal coursework team. The partnership spanned Instructional Design, Graphic Design, and Programmatic Design, resulting in the creation of over 45 hours of training content through Level-3 modules. But the collaboration didn't stop there. Brand Kiln went a step further, supporting the localization of existing Pinktum modules into Mandarin, Spanish, English, and Portuguese languages.",
  },
  {
    "title": "Result: A Global Offensive with 21st Century Skills",
    "content": "Brand Kiln's meticulous approach ensured Pinktum's market expansion was fortified with a cutting-edge arsenal of training modules, blending new-age pedagogy with global reach. The multi-language training modules are now empowering corporate workforces across diverse geographies, elevating Pinktum's stature as a global leader in 21st-century skills training.",
    "image": ""
  },
  {
    "title": "Impact: A Testimonial from the Helm",
    "content": "\"We needed a partner with the right blend of quality, responsiveness, and pedagogy. Brand Kiln delivered all that and more,\" shared Dr. Wolf-Bertram Von Bismark, CEO of Pinktum. In this collaborative venture, Brand Kiln didn't just meet expectations; they exceeded them, shaping a success story of global eTraining excellence for Pinktum AG.",
    "image": ""
  }
  
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
      <section className='d-flex align-items-center justify-content-center'>
        
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Pinktum AG</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Pinktum AG - Revolutionizing Global eTraining with Brand Kiln
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the dynamic landscape of European eTraining, Pinktum AG emerged as a trailblazer, focusing on 21st-century skills through transformative courses in soft skills, negotiation, management, time management, and team building. Seeking to expand into the global arenas of China, Portugal, Spain, and the USA, Pinktum required a partner matching their rigor in training pedagogy and development quality. Enter Brand Kiln, their exclusive training module development partner.            </div>
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
