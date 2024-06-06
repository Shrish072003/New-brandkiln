import React from 'react'

import Header from '../Component/header'
import Faqs from '../Component/Faqs'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'


const About = () => {
  return (
    <>
      <Header/>  
      <Faqs/>  
      <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>
       
    </>
  )
}

export default About