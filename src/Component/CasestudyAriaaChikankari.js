import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';
// import Ariaa from '../Images/Logo_s/';

const caseStudies = [
  {
    title: 'Challenges:',
    content: 'In a market flooded with mass-produced imitations, the challenge lay in differentiating Ariaa Chikankari and authentically representing its rich heritage. Brand Kiln was tasked with formulating the brand identity, defining its unique positioning, and transforming Ariaa into a digital business poised to captivate global consumers.',
    image: '',
  },
  {
    title: 'Our Role:',
    content: 'Brand Kiln embarked on a comprehensive journey, delving into category research, conducting interviews with stakeholders, and immersing ourselves in the Chikankari ecosystem. From these insights emerged the distinctive brand attributes that would set Ariaa apart in the market.',
    image: '',
  },
  {
    title: 'Solution:',
    content: 'With a deep understanding of the brand ethos, we meticulously crafted the brand identity and tonal texture of Ariaa, culminating in the creation of the brand book. This served as the foundation for shaping Ariaa\'s communication tonality and messaging structures, giving birth to the new "Brand Ariaa"—distinctive, articulate, and with a clear voice.',
    image: '',
  },
  {
    title: 'Shopify Website with deep tech:',
    content: 'The journey towards digital transformation continued with the development of Ariaa\'s Shopify website with 15000+ SKUs. Our team orchestrated professional product and fashion shoots to showcase the beauty of Chikankari, while our design and content experts worked collaboratively to craft immersive website interfaces and compelling content modules.',
    image: '',
  },
  {
    title: 'Innovation and Execution:',
    content: 'Opting for Shopify allowed us to channel our focus on ecommerce and business enablement, while custom development and integration ensured seamless functionality and enhanced user experience. The website design seamlessly blended sensuality with functionality, embodying the essence of Ariaa\'s craftsmanship.',
    image: '',
  },
  {
    title: 'Outcome:',
    content: 'Within a span of 6 months, Ariaa Chikankari successfully transitioned into a digital business, poised to enchant Chikankari enthusiasts worldwide. The meticulously crafted brand identity and digital infrastructure now serve as powerful tools for Ariaa\'s journey towards global recognition.',
    image: '',
  },
  {
    title: 'Testimonial:',
    content: '"I understand fabric, but the rest of the brand ideation and digital planning, I blindly trusted Brand Kiln. I have not been disappointed!" - Akshita Rastogi, Founder of Ariaa Chikankari.',
    image: '',
  },
  {
    title: 'Conclusion:',
    content: 'With Brand Kiln\'s expertise, Ariaa Chikankari has not only preserved a timeless tradition but has also embraced digital innovation to reach new heights of success in the global marketplace.',
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
        <div className='w-20'>
          {/* <img src={Ariaa} /> */}
          </div>        
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Ariaa Chikankari</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Ariaa Chikankari: Crafting Tradition, Digitally
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Ariaa Chikankari, founded by Ms. Akshita Rastogi, is dedicated to preserving and promoting the exquisite art of Chikankari—a traditional handcrafted threadwork on premium cotton muslin fabric. With a rich family lineage in this craft, Ms. Rastogi aimed to reintroduce the authentic essence of Chikankari to global audiences.            </div>
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
