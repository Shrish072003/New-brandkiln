import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Supreme petro chem.jpg';
import suprime from '../Images/Logo_s/Supreme Petrochem.png';


const caseStudies = [
  {
    title: 'The Challenge: Strategic Communication for Circular Economy Initiatives',
    content: 'Supreme Petrochem\'s formidable circular economy initiatives needed a strategic communication overhaul. While their programs were impactful, the challenge lay in articulating a clear strategy for the short, mid, and long term and effectively communicating this vision to a wider audience. Brand Kiln stepped in to collaborate with Supreme Petrochem\'s leadership, providing strategic insights and refining the communication approach to showcase the holistic vision.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Contribution: Crafting a Clear Narrative',
    content: 'Brand Kiln worked closely with Supreme Petrochem\'s leaders to brainstorm and refine their circular economy vision. The collaboration resulted in a clear structure that effectively communicated the company\'s commitment to a circular economy. The pivotal moment came when Supreme Petrochemicals entrusted Brand Kiln to represent them at the prestigious APM CIPET, a pinnacle event attended by policymakers, opinion leaders, and academia from national and international forums. Brand Kiln\'s founder presented Supreme Petrochemicals\' circular economy approach, receiving an overwhelming response.',
    video:'https://youtu.be/DGML0YdcEKg?si=2lxAmJXwNIWAyfZ9',
  },
  {
    title: 'Result: Widely Appreciated Circular Economy Advocacy',
    content: '"Brand Kiln demonstrated maturity, empathy, and precise articulation - aspects that encouraged us to entrust them with delivering our message of Circular Economic initiatives across the wider community. The result has been widely appreciated - thanks to Brand Kiln," remarked Mr. Rangarajan Raghavachari, Vice President of Supreme Petrochem Ltd. This case study exemplifies the successful collaboration between Supreme Petrochem Ltd and Brand Kiln, where strategic communication and precise articulation elevated the company\'s circular economy initiatives, fostering wider community understanding and appreciation.',
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
          <img src={suprime} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Supreme Petrochem Ltd</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Supreme Petrochem Ltd - Crafting a Circular Economy Narrative with Brand Kiln
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Supreme Petrochem Ltd, the leading producer and exporter of polystyrene polymer in India, reached out to Brand Kiln to refine and communicate their vision for circular economy initiatives. Based in Mumbai, Maharashtra, Supreme Petrochem commands over 50% market share in India and is the largest exporter of PS from the country, reaching over 93 countries globally. The collaboration aimed to strategically position and communicate Supreme's impactful conservation and awareness programs that resonated across diverse sections of Indian society.            </div>
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
