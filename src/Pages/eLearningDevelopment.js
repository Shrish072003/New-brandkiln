import React from 'react'

import Header from '../Component/header.js'
import LearningDevelopment from '../Component/eLearningDevelopment.js'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'
import './responsivenes.css';

const ELearningDevelopment = () => {
  return (
    <>
          <Header/> 
          <LearningDevelopment /> 
          <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>

    </>
  )
}

export default ELearningDevelopment