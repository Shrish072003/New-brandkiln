import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';

const caseStudies = [
  {
    title: 'The Challenge: Inefficiencies in Traditional Real Estate Sales',
    content: 'Traditional real estate sales heavily rely on customers visiting the site for property screening, initiating a prolonged sales funnel. The initial screening stage, consuming 60% of the deal time, leads to delays and added stress for realtors, facing high project capital borrowing rates.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Insight: Realty Metaverse Solution',
    content: 'Brand Kiln\'s Realty Metaverse Solution aimed to redefine the real estate sales process by introducing immersive metaverse experiences. Realtors can now showcase ready properties through 360-degree videos and offer creative renders for upcoming projects. Leveraging AI, virtual assistants, and live metaverse interactions, the solution enables blended property tours, accurate information sharing, and effective positioning of premium projects.',
  },
  {
    title: 'Impactful Results: Shortening Sales Time and Reducing Borrowing Costs',
    content: 'The Realty Metaverse solution drastically reduces the initial site visit and screening time from weeks to a matter of hours or a day, as the property experience now gets delivered to the customer via VR headsets at the comfort of their homes. This not only addresses hot leads promptly but was also found to accelerate the sales cycle by up to 50%. The shortened sales time meant faster release of borrowed capital, resulting in savings between 10-14% of the total project cost for real estate builders.',
    image: '',
  },
  {
    title: 'Client Testimonial: A Game-Changer in Real Estate',
    content: '"The Brand Kiln Metaverse Solution is pathbreaking. It eases the stress on the customer, saves money for the builder, and enhances the brand halo for the project," affirmed Mr. Kabir Rawat, Chief Revenue Officer at one of India\'s top real estate firms. Brand Kiln\'s Realty Metaverse Solution offering unprecedented efficiency, cost savings, and a superior customer experience. It is successfully reshaping traditional practices and setting a new standard for immersive property showcases.',
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
            <div className='about-text mb-9'>CASE STUDY: Realty Metaverse</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Realty Metaverse - Revolutionizing Real Estate Sales
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In an industry steeped in tradition, real estate faces significant inefficiencies, resulting in revenue loss for realtors due to prolonged sales cycles and high borrowing costs. Brand Kiln stepped into this landscape with an innovative solution to transform the real estate ecosystem.            </div>
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
