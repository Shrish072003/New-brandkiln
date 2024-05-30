import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Azelis.jpg';
import Azelis from '../Images/Logo_s/Azelis.png';

const caseStudies = [
  {
    title: 'The Challenge: Clarifying Azelis\' Distinct Value',
    content: 'Azelis, going beyond a traditional distribution role, has invested heavily towards innovation and end-to-end customer solutions. Brand Kiln\'s task was to articulate Azelis\' unique value proposition, working closely with the APAC headquarters in Singapore to create digital assets and marketing examples that spoke directly to its diverse markets.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Approach: Crafting a Purposeful Narrative',
    content: 'Our collaboration extended across multiple channels, including collaterals and event-specific branding. Working hand-in-hand with Azelis\' APAC team, Brand Kiln delivered a refined brand direction that showcased Azelis as a dynamic partner, adept at meeting diverse market needs. "Our partnership with Brand Kiln helped us effectively communicate our distinct value proposition to our markets, showcasing Azelis as a partner that goes beyond traditional distribution," noted Mr. Dipan Dalal, Market Segment Director, at Azelis APAC.',
    video: 'https://youtu.be/-AADLRtFeWk?si=A7NVUbUMqDi_Bj2n',
  },
  {
    title: 'Result: Strengthening Market Engagement',
    content: 'The collaborative effort with Brand Kiln played a pivotal role in enhancing Azelis\' engagement with prospects and customers. The refined brand direction, combined with compelling digital assets, positioned Azelis as a forward-thinking partner, offering comprehensive solutions tailored to the unique needs of the APAC markets. This case study reflects the direct impact of strategic collaboration, where Brand Kiln\'s expertise and Azelis\' commitment to innovation converged to amplify Azelis\' market presence in the specialty chemicals and food ingredients sector.',
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
          <img src={Azelis} />
          </div> 
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Azelis</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Azelis - Amplifying Market Presence with Brand Kiln
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Azelis, the second-largest global distributor of specialty chemicals and food ingredients, approached Brand Kiln with a clear mission - to enhance its brand narrative and highlight its unique position. Headquartered in the US, our collaboration focused on the APAC region, with the goal of refining Azelis' brand direction and showcasing its capabilities through digital assets and targeted marketing tactics.            </div>
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
