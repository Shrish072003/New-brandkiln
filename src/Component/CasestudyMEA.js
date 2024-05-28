import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';

const caseStudies = [
  {
    title: 'The Challenge: Efficient Training Across Borders',
    content: "MEA's diverse landscape demanded streamlined training for brand stores and dealerships. The existing model was logistically complex, requiring trainers to travel extensively."
  },
  {
    title: 'Brand Kiln Steps In: Practical Training Transformation',
    content: 'To overcome geographical constraints, Brand Kiln proposed a pragmatic solution aimed at reducing costs and enhancing training effectiveness.'
  },
  {
    title: 'Intervention: Tech-Driven Upgrade',
    content: 'Brand Kiln introduced a tech tool using employee IDs for seamless access. Various assessment types, from essays to voice-based questions, were implemented for comprehensive evaluation. The backend housed finely tuned question banks, covering brand details, product knowledge, and customer assessments. Dynamic test paper generation provided tailored assessments.'
  },
  {
    title: 'Organizational Efficiency: Tailored Learning Paths',
    content: 'Employees were categorized based on HR data, and the platform auto-assigned content tailored to roles, functions, and specific brands.'
  },
  {
    title: 'Practical Outcomes: Cost-Efficiency and Real-Time Insights',
    content: 'The online platform emerged as a cost-effective solution, improving training accuracy and significantly reducing travel costs. The real-time dashboard became a practical tool for trainers, offering insights through interactive tables and charts. Coaches and supervisors leveraged detailed reports for timely feedback and continuous improvement.'
  },
  {
    title: 'Conclusion: Practical Transformation and Savings',
    content: "Brand Kiln's intervention bridged geographical gaps and achieved significant cost savings, emphasizing that impactful training could be achieved with a pragmatic blend of innovation and expertise."
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
            <div className='about-text mb-9'>CASE STUDY: Luxury Car Brand in MEA</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Driving Training Efficiency for a Luxury Car Brand in MEA
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Facing the challenge of training dispersed teams across 26 MEA countries, a global luxury car brand sought an efficient solution.
                       </div>
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
