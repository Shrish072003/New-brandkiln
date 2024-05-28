import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Home yoga guru.jpg';

const caseStudies = [
  {
    title: 'The Challenge: Navigating Complex Digital Needs',
    content: 'HomeYogaGuru faced a multifaceted challenge: they needed a digital platform that could seamlessly integrate live video sessions, booking systems, eCommerce functionalities, and interactive blogging—all while catering to a global audience. Previous attempts with other providers had fallen short, highlighting the complexity of their requirements.',
    image:MRCImage,
  },
  {
    title: 'Technical Precision: Building a Foundation for Success',
    content: 'Addressing HomeYogaGuru\'s intricate needs demanded a meticulous approach to development. Brand Kiln leveraged WordPress as the foundation, employing a blend of template-based designs and custom code to achieve the desired functionalities. Customized APIs facilitated seamless integration with external systems, ensuring smooth communication between the website, booking system, and eCommerce platform.'
    ,video:'https://youtu.be/g5es7om_GV8?si=_-XDcSnUlAMJBbMm',
  },
  {
    title: 'Innovative Solution: Customization and Integration',
    content: 'Brand Kiln\'s innovative solution went beyond off-the-shelf offerings, providing a tailor-made platform that met HomeYogaGuru\'s unique requirements. By combining pre-designed templates with bespoke coding, the team crafted a digital ecosystem that seamlessly blended aesthetics with functionality. This approach enabled synchronized booking, eCommerce transactions, and interactive blogging while maintaining a user-friendly interface.'
  },
  {
    title: 'Outcome: Empowering Holistic Wellness on a Global Scale',
    content: 'Following six months of development, Brand Kiln delivered a world-class, award-winning platform for HomeYogaGuru. Backed by robust technical infrastructure, the platform empowered the client to deliver services globally, even representing India at World Yoga Day events organized by Indian embassies worldwide. HomeYogaGuru\'s business leader, Sujata Nerurkar, praised Brand Kiln for their solution-oriented approach and hands-on involvement throughout the project.'
  },
  {
    title: 'Conclusion: Driving Digital Transformation in Wellness',
    content: 'In the era of digital transformation, HomeYogaGuru\'s partnership with Brand Kiln exemplifies the power of innovation in driving holistic wellness solutions. By seamlessly integrating technology with traditional practices, the platform has not only revolutionized the delivery of wellness services but also empowered individuals worldwide to embark on their journey to holistic well-being.'
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
            <div className='about-text mb-9'>CASE STUDY: HomeYogaGuru</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: HomeYogaGuru: Delivering Holistic Wellness, digitally
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the wake of the COVID-19 pandemic, the global demand for holistic health solutions surged, with yoga, meditation, and therapy gaining renewed prominence. Seizing this opportunity, HomeYogaGuru emerged as a beacon of wellness, offering curated one-on-one sessions delivered by a team of 20 globally trained therapists and yoga instructors. However, their vision extended beyond traditional practices—they aimed to revolutionize holistic wellness through digital innovation.            </div>
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
