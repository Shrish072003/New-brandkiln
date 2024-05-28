import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/BMW.png';

const caseStudies = [
  {
    title: 'The Challenge: Driving Digital Distinction',
    content: 'Torres Group, a conglomerate spanning television, media, and hospitality, aimed for digital excellence for its auto trio. The challenge was seismic - a shift to the digital norm. Brand Kiln, chosen for tech acumen and global auto brand prowess, took the reins.',
    image: MRCImage,
  },
  {
    "title": "Brand Kiln's Playbook: Transformative Waves",
    "content": "<ul>\n    <li><strong>Discover:</strong> Unveiling brand essence, audience metrics, and products.</li>\n    <li><strong>Define:</strong> Precise expectations and outcomes set the stage.</li>\n    <li><strong>Design:</strong> Ideating new processes and documentation.</li>\n    <li><strong>Develop:</strong> Crafting strategies and workflows.</li>\n    <li><strong>Deploy:</strong> Initiating with pilots and extending transformations.</li>\n</ul>",
    "video": ""
  },
  {
    title: 'Detailed Plan, Organizational Revamp',
    content: 'Brand Kiln and Torres Group charted a detailed plan. Simultaneously, KRAs and KPIs were mapped, and reorganization efforts commenced. The result? A sleek structure, robust KPIs, and streamlined reporting formats. The team upskilled, joined by new talents to bridge gaps.',
    image: '',
  },
  {
    title: 'Transformation in Motion: A Marketing Revolution',
    content: '"The transformation made a real difference to our marketing for our three gems in Mexico," shared Braulio Medina, central coordinator. Under Brand Kiln\'s guidance, Torres Group not only embraced the digital shift but redefined its marketing playbook, marking a new era for Torres Nissan, BMW, and Mini in Mexico\'s dynamic automotive scene.',
    image: '',
  },
  {
    title: 'Founder Director Quote',
    content: '"Brand Kiln played a pivotal role in our metamorphosis. Their expertise in research, positioning, and rebranding has been transformative. Today, we stand not just as a technology product company but as a recognized specialist, and Brand Kiln has partnered our journey."<br>- Mr. Shridhar P, Director.',
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
      <section className='d-flex align-items-center justify-content-center'>
        
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Torres Automotive Group</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Torres Automotive Group - Navigating Digital Triumph
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In Mexico, Torres Nissan, BMW, and Mini, part of the thriving Torres Group, were synonymous with in-person excellence. Yet, as the digital wave swept post-pandemic, Torres faced a pivotal choice: adapt or fade. Here, in the vibrant heart of Mexico, Brand Kiln stepped in as the strategic guide.            </div>
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
