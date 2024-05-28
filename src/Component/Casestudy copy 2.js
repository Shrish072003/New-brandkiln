import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/MRC CaseStudy.jpg';
import MRCvid from '../Images/IMG_3126.MOV';

const caseStudies = [
  {
    title: 'Need: A Brand Makeover for Global Impact',
    content: 'Despite its impressive lineup of experts and its significant contributions, MRC faced the challenge of conveying its attitude, values, and personality to a broader audience. At this crucial juncture, MRC turned to Brand Kiln, not just as a creative agency but as a continued mentor for their communications and marketing team. The goal was to establish a visual and tonal language that reflected MRCs capabilities and aspirations on the global stage.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln Solution: Tooling MRC’s Brand Personality',
    content: 'Brand Kiln embraced the challenge, starting with the creation of a new logo and brand colors that set the tone for MRCs renewed identity. Moving beyond aesthetics, Brand Kiln delved into visual applications, producing a comprehensive brand book that captured MRCs essence. Delighted with the initial results, MRC extended the mandate to reevaluate its strategic positioning, core messaging, go-to-market approach, and overall brand content.',
    video: MRCvid,
  },
  {
    title: 'Result: A Confident and Visionary MRC, Guided by Brand Kiln',
    content: 'Brand Kiln continued its role as a mentor, tinkering with and refreshing MRCs brand voice to align seamlessly with its capabilities and global aspirations. The transformation extended to a complete overhaul of digital collateral, including the website, white papers, case studies, and corporate marketing materials. The outcome was a revitalized MRC—an entity that not only looked the part but also spoke and engaged with a confidence befitting its aptitude and vision, all under the continued guidance of Brand Kiln.',
    image: '',
  },
  {
    title: 'Impact: Navigating Global Waters with Confidence',
    content: 'Today, the new avatar of MRC stands as a trusted advisor to every significant Indian body, guiding corporations and maritime organizations on matters of underwater resources and projects. MRC has earned recognition on the global stage, being sought after by influential entities such as IORA, UN, UNESCO, G20, and others for guidance and support.',
    image: '',
  },
  {
    title: 'Founder Director Quote',
    content: '"Brand Kiln has been instrumental in transforming our identity and positioning. The collaboration has not just given us a new approach. MRC now stands at the forefront, navigating the complex waters of maritime research with confidence and vision."<br>- Cdr. Dr. Arnab Das. Founder Director.',
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
            <div className='about-text mb-9'>CASE STUDY: Maritime Research Center (MRC)</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Maritime Research Center (MRC)
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
              In the vast sea of think tanks, the Maritime Research Center (MRC) stood as India's leading beacon, a hub for collaboration among luminaries in Maritime, Science and Technology, Underwater Research, and Blue Ocean Strategy. With a roster of experienced associates, including former ambassadors and naval experts, MRC had a solid foundation and sought to elevate its presence on both national and global stages.
            </div>
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
