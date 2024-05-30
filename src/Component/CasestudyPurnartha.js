import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Punartha CaseStudy.jpg';
import purnatha from '../Images/Logo_s/Purnarhta.png';

const caseStudies = [
  {
    title: 'Need: A Strategic Entry into the US Market',
    content: 'With a stellar track record in India, Purnartha aimed to make a mark in the developed US market. Recognizing the shift in their target audience from retail investors to sophisticated US investment houses, Purnartha sought the expertise of Brand Kiln to reconstruct their brand philosophy and craft a compelling value proposition. The goal was to resonate with the mindset of US investment houses and establish a strong foothold in the competitive landscape.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln Solution: Crafting the Arctic Tern Narrative',
    content: 'Brand Kiln rose to the challenge, immersing themselves in Purnartha\'s brand philosophy and gaining a deep understanding of the US investment landscape. With meticulous attention to detail, Brand Kiln stitched together a compelling value proposition that would captivate the US audience. The corporate dossier, featuring the "Arctic Tern" narrative, emerged as a perfect tool to carry Purnartha\'s message symbolizing precision, agility, and strategic navigation, with the global audience.',
    video: 'https://youtu.be/SnLyw73UfPE?si=PYD2LI5eo1n8ih1n',
  },
  {
    title: 'Result: Successfully Navigating Global Waters',
    content: 'Brand Kiln delivered on its promise, successfully aligning Purnartha\'s positioning with the expectations and nuances of the US market. The crafted value proposition resonated with investment houses, setting Purnartha on a path to establish a significant presence in the competitive US financial landscape. The corporate dossier, featuring the "Arctic Tern Narrative," became a cornerstone of Purnartha\'s communication strategy, effectively conveying their expertise and commitment.',
    image: '',
  },
  {
    title: 'Impact: A Testament to Professionalism and Timely Delivery',
    content: 'Deepak Soman, Marketing Director at Purnartha, expressed his satisfaction, stating, "It was an absolute pleasure working together with Brand Kiln. I am particularly pleased that we could meet the timelines that we had agreed on without any compromise on the quality or the sharpness of delivery. A thoroughly professional team we would rely on for all future mission-critical projects!"',
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
          <img src={purnatha} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Purnartha Investment advisors</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Purnartha Investment advisors
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Purnartha, a distinguished firm specializing in Portfolio Management Services, had achieved resounding success in the Indian market through their focus on research and in-depth data analysis to drive business results. However, as they set their sights on the developed US market, a need arose for a strategic reconstruction of their positioning and value. This pivotal task led them to partner with Brand Kiln.            </div>
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
