import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/My Ideal Wedding.jpg';
import wedding from '../Images/Logo_s/Wedding Bells.png';


const caseStudies = [
  {
    title: 'The Challenge: Unifying the Wedding Planning Experience',
    content: 'Wedding Bells aimed to revolutionize wedding planning by creating an ecommerce app that streamlined the entire process. The vision was grand: a one-stop-shop for venues, photographers, caterers, dressmakers, and more. The challenge lay in seamlessly integrating diverse products and services under the Wedding Bells banner, sparing users the hassle of switching between multiple apps.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Mastery: Crafting Simplicity with Precision',
    content: 'Brand Kiln, known for its ability to marry aesthetics with functionality, took on the challenge with zeal. The app, designed for launch across multiple countries, not only aggregated a multitude of services but also operated in five different languages. Advanced features like budget calculators, customizable dashboards, messaging, calling, automated to-dos, request quotes, and secure transaction gateways were seamlessly integrated. Separate apps for Android and iOS catered to both vendors and customers. The customer app even boasted an e-wallet for swift payments, enhancing the overall user experience.',
  },
  {
    title: 'Result: Simplifying Wedding Management',
    content: '"We wanted to simplify the complexity around wedding management. Therefore, the app needed to look welcoming, behave intuitively, and deliver everything with precision and speed," shared Taufiq, the project leader of Wedding Bells. Brand Kiln not only met but exceeded these expectations, delivering a user-friendly, feature-rich app within the committed time and budget. As Wedding Bells gears up for its grand launch, the partnership with Brand Kiln is poised to continue evolving. The team at Wedding Bells looks to Brand Kiln for ongoing enrichment, further enhancing the app with deeper functionalities and ensuring that every couple\'s journey to their perfect day is marked by simplicity, precision, and the magic of Wedding Bells.',
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
          <img src={wedding} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Wedding Bells</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Wedding Bells - Unveiling the Perfect Day with Brand Kiln
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the realm of event planning, where dreams and details intertwine, Wedding Bells emerged as a groundbreaking marketplace app, transcending borders to deliver seamless wedding planning experiences. The brainchild of a visionary team, Wedding Bells envisioned a unified platform bringing together product suppliers and service providers from across the globe under one virtual roof. Their journey took a transformative turn when they partnered with Brand Kiln.            </div>
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
