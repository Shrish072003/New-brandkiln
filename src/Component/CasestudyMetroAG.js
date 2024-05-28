import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';

const caseStudies = [
  {
    title: 'Challenges:',
    content: 'As part of their commitment to sustainability, METRO sought to implement a comprehensive training program across their vast network of partners and operations. The challenge lay in developing a digital infrastructure capable of delivering sustainability training to over 10,000 partners across 30 countries.',
    image: '',
  },
  {
    title: 'Our Role:',
    content: 'Brand Kiln was entrusted with the task of conceptualizing, developing, and deploying the digital training infrastructure for METRO\'s sustainability initiatives. Leveraging our expertise in eTraining practices and digital ecosystems, we embarked on creating the internal sustainability awareness platform for METRO Group.',
    image: '',
  },
  {
    title: 'Solution:',
    content: 'Our journey began by defining clear learning objectives and delivery strategies in collaboration with METRO. Building upon existing training materials, we meticulously crafted content that addressed every aspect of sustainability in the restaurant value chain. Through iterative remote sessions, we fine-tuned the content and visualization, ensuring alignment with METRO\'s objectives and values.',
    image: '',
  },
  {
    title: 'Innovation and Execution:',
    content: 'Brand Kiln\'s innovative approach extended to the design and deployment of a robust digital delivery infrastructure. With dedicated IT resources, we brought METRO\'s Sustainable Restaurant platform to life, covering a wide range of topics including ingredient sourcing, energy management, waste disposal, and customer awareness.',
    image: '',
  },
  {
    title: 'Outcome:',
    content: 'The successful launch of the METRO Sustainable Restaurant platform marked a milestone in sustainability training across the hospitality industry. By empowering partners with knowledge and resources to adopt sustainable practices, METRO has reinforced its commitment to responsible business operations.',
    image: '',
  },
  {
    title: 'Testimonial:',
    content: '"Brand Kiln\'s efficiency and expertise were instrumental in navigating the complexities of our sustainability project. From learning strategy to digital deployment, the team demonstrated empathy and efficiency every step of the way." - Shoebahmed Shaikh, Principal Coordinator, METRO AG.',
    image: '',
  },
  {
    title: 'Conclusion:',
    content: 'With Brand Kiln\'s support, METRO AG has set a new standard for sustainability training in the food wholesale industry. As they continue to lead by example, their commitment to responsible business practices serves as a beacon for the global community.',
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
            <div className='about-text mb-9'>CASE STUDY: Metro AG</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Metro AG: Pioneering Sustainability Training Across 30 Countries
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            METRO AG stands as a global leader in food wholesale, serving the HoReCa (Hotel, Restaurant, and Catering) sector and traders. Operating in 30 countries with 650 stores, METRO is committed to fostering sustainability and responsible business practices.            </div>
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
