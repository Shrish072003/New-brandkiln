import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/PInktum AG- Metaverse.jpg';

const caseStudies = [
  {
    title: 'The Challenge: Unleashing the Power of Metaverse Training',
    content: 'Pinktum\'s leadership, fueled by curiosity and a commitment to innovation, identified the untapped potential of the Metaverse. Brand Kiln, with its deep understanding of the Metaverse domain and founder Manas Dewan\'s pioneering PhD work in the field, became the natural choice. With tech capabilities, immersive pedagogy insights, and a penchant for unconventional thinking, Brand Kiln emerged as Pinktum\'s ideal partner for their Metaverse training debut.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Mastery: Crafting Conflict Resolution in the Metaverse',
    content: 'Teaming up with Covince as the platform partner, Pinktum and Brand Kiln embarked on a groundbreaking journey into the Metaverse. The chosen subject was "Conflict Resolution for the 21st Century." Although Pinktum possessed specialized eTraining material, the challenge lay in adapting it for a truly immersive experience. Weeks of brainstorming birthed a unique storyline, seamlessly blending fantasy with reality, infusing existing training material with immersive contexts that resonated globally. Positive audience tests propelled the team forward, leading to the application of no less than 12 learning theories in the immersive context-building process. The outcome was a Metaverse eTraining experience that transcended boundaries. Participants could navigate chaos, absorb conflict resolution theories, and ultimately "save the world" through negotiation in a stunning VR Metaverse. The experience was enriched with AI assistants, leaderboards, and AI-based feedback, incorporating voice analysis and coursework hints.',
    image: 'https://youtu.be/4ESKmwGTndc?si=ajJXfqTQq0RNLSku',
  },
  {
    title: 'Impact: Metaverse Mastery Unleashed',
    content: '"Our debut into Metaverse eTraining could not have been better planned. We understand the potential of this domain and how it must be integrated into our business milestones," emphasized Wolf-Bertram Von Bismark, CEO of Pinktum. The Metaverse training, a perfect blend of innovation, immersion, and gamification, marked a new milestone for Pinktum AG, showcasing the transformative power of strategic collaboration with Brand Kiln.',
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
            <div className='about-text mb-9'>CASE STUDY: Pinktum AG</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Pinktum AG - Mastering Conflict Resolution in the Metaverse
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the bustling tech hub of Munich, Pinktum AG, a trailblazing eTraining provider, stands as one of Europe's fastest-growing firms. Acknowledged globally for its quality and pedagogy, Pinktum's visionary leadership sought to push boundaries. The goal was clear: harness emerging technologies for unparalleled training efficiency. Virtual Reality (VR) training emerged as the beacon, promising a revolutionary frontier. As Pinktum set its sights on the Metaverse, the uncharted territory of new tech, AI, and internet-based delivery, they found a trusted guide in Brand Kiln.            </div>
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
