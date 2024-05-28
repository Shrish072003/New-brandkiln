import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Motor Octane.jpg';

const caseStudies = [
  {
    title: 'Need: Architecting a Digital Brand DNA',
    content: 'MotorOctane sought to weave a complete digital business infrastructure that prioritized customer-centric principles of transparency, accountability, and engagement, while being guided by clear processes across every business function. Despite previous attempts by prominent technology firms, the complexity of the undertaking persisted. Enter Brand Kiln.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln Solution: A Brand-Tech Transformation',
    content: 'Leveraging its expertise in business consulting and digital transformation delivery, Brand Kiln embarked on a multifaceted approach. The journey began with mapping and optimization of existing business functions, followed by the creation of digital workflow frameworks. Thereafter, solution architecture, version planning, and tech stack were meticulously defined. Then followed the intricate process of UI creation, emanating their brand personality—future forward, authentic, and sharp. The result was a digital DNA that was creative, evocative, and functional in nature, implemented with deep insights.',
    video: '',
  },
  {
    title: 'Result: Award Winning App for Tech and Design',
    content: 'Throughout the long and intense engagement, Brand Kiln successfully delivered every milestone on time, showcasing their commitment to excellence. The initial development milestone involved the launch of the app and the website—both of which went on to break records in stickiness, depth, and technical prowess. The journey continues further as Brand Kiln now focuses on deeper business integrations while working on Web 3.0 technology evaluations.',
    image: '',
  },
  {
    title: 'Impact: Exclusive Technology Development Partner for the Long Term',
    content: 'Rachit Hirani, Founder Director of MotorOctane: "We needed a partner that was as immersed in our world as we were. When Brand Kiln took over that mantle, we never had to look back. Today they are our exclusive technology development partner for the long term—someone who advises our strategic decisions going far beyond tech as well."',
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
            <div className='about-text mb-9'>CASE STUDY: RMH MotorOctane</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: RMH MotorOctane
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            MotorOctane, Asia's number 1 motoring channel with 4 million subscribers and 2.5 million monthly website traffic, had been crowned India's No 1. auto influencer for 2024 by NDTV. Pioneering was their DNA- they started the Vlogging genere in India almost a decade and a half earlier- and also were the first to introduce Hinglish to appeal to a wide audience base. MotorOctane is a name almost synonymous with the automotive community. As their engagement and influence grew, MotorOctane recognized the need to embrace technology for future scalability and to enhance their interactions.            </div>
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
