import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import MRCImage from '../Images/Jadcom.png';
import Jadcom from '../Images/Logo_s/Jadcom.png';

const caseStudies = [
  {
    title: 'The Diverse Canvas of Jadcom\'s Portfolio',
    content: 'Jadcom had an eclectic clientele, spanning from beer brands to automotive and watercraft makers, all with a primary focus on US-based audiences. But that was not all; they also owned "Dementia Map," a platform with dementia cafes scattered across the USA and Europe. Each brand, including Dementia Map, sought curated content—blogs, articles, white papers, case studies—to resonate with their distinct audiences.',
    image: MRCImage,
  },
  {
    title: 'Brand Kiln\'s Global Brand Management Thrives on Challenge',
    content: 'In the face of this cultural and geographical diversity, Brand Kiln\'s global brand management experience was put to the test, and it not only met but exceeded expectations. The success rested on a clear process that guided the approach. The journey commenced with a sharp understanding of each brand—unraveling their ethos, personality, tonality, and target audiences. Next came extensive audience research to grasp the nuances and intricacies of each cultural context. Armed with this knowledge, the team meticulously planned the tonality, topics, and frequency of content delivery, creating a rolling calendar for each brand. Individual teams, led by a senior content leader from Brand Kiln and supported by visual and UI experts, were then assigned to curate content.',
    video: 'https://youtu.be/5QD3NHbkads?si=qexzyBYBuVA-zxpr',
  },
  {
    title: 'Encouraging Results: Traction and Brand Stickiness Soar',
    content: 'The results were nothing short of remarkable. Each brand, including Dementia Map, witnessed significant traction, with engagement and brand stickiness soaring within an impressive range of 80% to 250%. The Jadcom management expressed deep appreciation for the efforts, validating Brand Kiln\'s approach.',
    image: '',
  },
  {
    title: 'Confirmation of Feasibility: Global Deliveries with Culture-Specific Communication',
    content: 'For Brand Kiln, this project served as a confirmation that global deliveries and culture-specific communication are not just feasible but can thrive when guided by a clear process and a curated understanding of the audience. The experiment with Jadcom was not just a success—it was a story of how strategic collaboration and cultural sensitivity can turn communication challenges into triumphs, even from afar.',
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
          <img src={Jadcom} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: Jadcom Communications </div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: Jadcom Communications - A Cross-Cultural Communication Experiment
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            Once upon a time in Portland, USA, Jadcom Media, a visionary brand marketing firm, embarked on a social experiment in the realm of communication. The challenge posed was intriguing: Could remote collaboration, coupled with a profound understanding of culture and audience mindset, craft compelling communication for brands targeting specific cultures? This was the quest Portland-based Jadcom entrusted to the expertise of Brand Kiln.            </div>
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
