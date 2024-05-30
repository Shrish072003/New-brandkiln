import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/NirDhwani CaseStudy.png';
import NirDhwani from '../Images/Logo_s/Nirdhwani.png';

const caseStudies = [
  {
    title: 'Need: Shedding the Yoke of an Outdated Identity',
    content: 'Amidst this ambitious pivot, NirDhwani Technologies recognized that their existing brand identity had become a limiting factor. As their team focused on the technological evolution, they turned to Brand Kiln to address the broader picture: audience research, positioning, rebranding, testing, and a comprehensive go-to-market blueprint. This collaborative effort with Brand Kiln became the catalyst for reshaping NirDhwani\'s identity and market presence.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln Solution: Shaping NirDhwani 2.0',
    content: 'In close collaboration with NirDhwani\'s management, Brand Kiln worked meticulously in the crucible of change. From this partnership emerged NirDhwani 2.0 — a specialist organization that not only embraced the technology pivot but generated significant traction with industry stakeholders, government bodies, and academia. The strategic roadmap was swiftly followed by execution, encompassing rebranding, the development of brand collaterals, and the redesign of the company website.',
    video: 'https://youtu.be/98nlVUdgAMQ?si=vLu00lxx4EJp_rDl',
  },
  {
    title: 'Result: A Transformed NirDhwani',
    content: 'The final piece in the puzzle, the product sheets, and case studies, were meticulously crafted, marking the end of an intense period of reorientation and the dawn of a new era — NirDhwani 2.0. The organization now stood as a beacon in the specialized field, radiating a fresh identity and a compelling narrative.',
    image: '',
  },
  {
    title: 'Impact: Resonating with Industry, Government, and Academia',
    content: 'NirDhwani Technologies, now NirDhwani 2.0, witnessed tangible results of their transformation. The brand not only resonated with industry players but also garnered attention and trust from government bodies and academia. The success was not just in the execution of a technological pivot but in the holistic rebranding that positioned NirDhwani as a leading force in underwater technology, blue economy, national security, and research incubation.',
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
 <section className='d-flex gap-5 justify-content-center'>
      <div className='w-20 mt-5'>
          <img src={NirDhwani} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: NirDhwani Technologies</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: NirDhwani Technologies
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the realm of Underwater signal processing, NirDhwani Technologies had established itself as a specialist organization, collaborating with industry giants to provide innovative solutions. While being a solutions company served them well, NirDhwani Technologies envisioned a transformative shift — from solutions provider to a technology product company specializing in underwater ecosystems, blue economy projects, national security initiatives, and research incubation.
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
