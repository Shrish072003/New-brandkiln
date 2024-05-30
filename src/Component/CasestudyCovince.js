import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Covince.png';
import Covince from '../Images/Logo_s/Covince.png';

const caseStudies = [
  {
    title: 'The Challenge: Pioneering the Metaverse Revolution',
    content: 'While Covince\'s tech wizards focused on developing a cutting-edge Metaverse platform, they sought something more—something beyond technology. They craved the infusion of experience innovation. With multiple brands eager to be early Metaverse entrants, they needed a partner who could seamlessly blend storytelling with technological prowess in immersive environments. Enter Brand Kiln.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Mastery: A Fusion of Metaverse and Experience Innovation',
    content: 'Brand Kiln\'s founder, Manas Dewan, a pioneer in the Metaverse realm, is actively pursuing one of the earliest PhDs in the field. His research delves into decision-making within immersive environments, weaving together learning theories to craft holistic experiences. A natural synergy evolved between Covince and Brand Kiln, each contributing unique strengths. Over months of collaboration, this dynamic combination of experiences and technology has been harnessed by global majors to create immersive journeys that deliver brand outcomes.',
    video: 'https://youtu.be/hQ_OoHunPzA?si=rFDA0aD4aIkME9_U',
  },
  {
    title: 'Result: Synergy Unleashed in the Metaverse',
    content: '"Every brand has expectations from their immersive journeys—we need a robust tech platform, and equally important is a research-oriented approach to experience strategy. This is where the synergy between Brand Kiln and Covince has delivered strong value," expressed Richard Van Tillborg. The collaboration between Covince and Brand Kiln is not merely a partnership; it\'s a convergence of visionaries redefining the Metaverse landscape. As Utrecht continues to shine on the tech map, the immersive experiences crafted by this dynamic alliance are not just immersive—they are transformative, setting the stage for the next frontier in digital evolution.',
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
          <img src={Covince} />
          </div> 
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Covince Innovation BV</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Covince Innovation BV - Redefining Immersive Experiences in the Metaverse
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the enchanting Austrian town of Utrecht, surrounded by the majestic Alps and known for its vibrant university life, Covince Innovation BV has quietly been scripting a tech tale. Led by the dynamic duo of Richard Van Tillborg, a seasoned technocrat, and Melanie Van Haltern, blending tech acumen with marketing savvy, Covince has carved a niche as a powerful Metaverse platform. This is where our story unfolds, with Utrecht becoming a beacon in the European tech landscape.            </div>
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
