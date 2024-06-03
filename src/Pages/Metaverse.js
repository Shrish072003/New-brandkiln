import React from 'react'

import Header from '../Component/header'
import MainBody from '../Component/Metaverse.js'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'
import './responsivenes.css';

const Metaverse = () => {
  return (
    <>
          <Header/> 
          <MainBody /> 
          <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>

    </>
  )
}

export default Metaverse