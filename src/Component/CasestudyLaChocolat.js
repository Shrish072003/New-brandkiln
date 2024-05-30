import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';
import Lachoco from '../Images/Logo_s/La Chocolat.png';

const caseStudies = [
  {
    title: 'The Challenge: Fusing French Elegance with Indian Tastes',
    content: 'La Chocolat, after a successful niche debut, aimed to penetrate the Indian market with an extended product line. The challenge was to infuse European elegance into packaging that resonates with Indian consumers.'
  },
  {
    title: 'Navigating Complexity: Harmonizing Colors and Flavors',
    content: 'Choosing colors that not only highlighted the product but also aligned with chocolate tones required meticulous research. With multiple variants in cocoa percentage, each flavor had to complement others, creating a cohesive product family.'
  },
  {
    title: 'Typography Dilemma: Clarity and Aesthetics',
    content: 'Selecting a font for product details and icons that was both clear and visually appealing was crucial. The challenge was to ensure that all information on the back of the packaging was presented crisply.'
  },
  {
    title: 'Strategic Solution: Research and Positioning',
    content: 'Brand Kiln conducted competitive analysis and strategically positioned La Chocolat within the Indian market category. The limited packaging space was optimized to showcase the complete process, ensuring consumer engagement.'
  },
  {
    title: 'Aesthetic Precision: Colors and Design',
    content: 'Brand Kiln carefully selected attractive and complementary color tones that highlighted the product\'s essence. The packaging design incorporated a convenient format for icons and details, creating an aesthetically pleasing visual impact.'
  },
  {
    title: 'Execution Brilliance: Sharp and Memorable',
    content: 'The brand logo was crafted with precision, enhancing consumer recall value and ensuring quick recognition on shelves. The collaterals accordingly reflected the brand persona and the ethos of premium confectionary.'
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
 <section className='d-flex gap-5 justify-content-center'>
      <div className='w-20 mt-5'>
          <img src={Lachoco} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: La Chocolat</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Elevating La Chocolat: A Branding Odyssey
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            La Chocolat, a premium chocolate brand with a rich French lineage, partnered with Brand Kiln for brand positioning, branding, and packaging design to make a bold statement in the expanding Indian market.            </div>
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
