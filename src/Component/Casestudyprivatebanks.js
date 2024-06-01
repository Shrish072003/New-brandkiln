import React, { useState } from 'react';
import Merce from '../Images/merce.png';
import { FaPlus, FaMinus, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import condif from '../Images/Logo_s/COnfidential.png';

const caseStudies = [
  {
    title: 'The Challenge: Humanizing Interactions and Actionable Insights',
    content: 'Faced with the imperative of staying relevant, the banking behemoth aimed to create a program that fostered human connections with customers and employees. Brand Kiln was entrusted to develop a web-enabled platform that not only consolidated feedback from diverse channels but also transformed it into actionable insights, generating CX scores across teams, branches, regions, and the national spectrum.',
    image: '',
  },
  {
    title: 'Brand Kiln\'s Solution: Tech-Driven CX Platform',
    content: 'The tech-enabled CX platform became the nexus for feedback consolidation, streaming into the CX tech funnel. It manifested as Net Promoter Scores (NPS) and aligned seamlessly with Key Performance Indicators (KPIs). Crucially, the platform tracked the time taken to close CX loops, fostering a customer-centric mindset from the frontline to the executive suite. An innovative feature involved capturing customer ideas for improvement directly from employees, amplifying the voice of the customer through the employee lens.',
    image: '',
  },
  {
    title: 'Collaborative Implementation: A Unified Workflow',
    content: 'Building the workflow became a collaborative effort within the bank, involving frontline staff, central teams, and product organizations. This integration of insights across various organizational tiers ensured a holistic approach to CX improvement.',
    image: '',
  },
  {
    title: 'Impactful Results: Empowering Frontline, Driving Continuous Improvement',
    content: 'Empowered by Brand Kiln\'s solution, the banking giant successfully captured and acted upon the voice of the customer through its employees. The journey focused on empowering the frontline, creating a seamless flow of ideas from frontline staff to problem solvers in central product organizations. This transformation culminated in a culture of continuous improvement and innovation.',
    image: '',
  },
  {
    title: 'Client Testimonial: A Successful Partnership',
    content: '"Our journey has been about empowering the frontline, generating a flow of ideas in the central product organization, and turning those ideas into continuous improvement. It has been successfully achieved with the partnership of Brand Kiln," expressed their project leader and CX head. This case study exemplifies how Brand Kiln\'s tech-driven CX solution revolutionized customer interactions, employee engagement, and overall operational efficiency for one of the world\'s largest private banks, setting new standards for customer-centric innovation and continuous improvement.',
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
          <img src={condif} />
          </div>         
        <div className='w-80'>
          <section className='about-faq-section'>
            <div className='about-text mb-9'>CASE STUDY: One of the largest private banks, globally</div>
            <div>
              <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                <div className='circlebefore'></div>
                Customer: One of the largest private banks, globally
              </div>
            </div>
            <div className='about-faq-textf ml-3 jhjhgjh'>
            In the dynamic landscape of today, success hinges on the ability to connect meaningfully with customers and employees. A global banking giant, powered by Brand Kiln, embarked on a transformative journey to enhance customer experience (CX) and employee engagement.            </div>
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
