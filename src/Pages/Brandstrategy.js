import React from 'react'

import Header from '../Component/header.js'
import Brandstrategy from '../Component/Brandstrategy.js'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'
import './responsivenes.css';



const Strategy = () => {
  return (
    <>
      <Header/>  
      <Brandstrategy />
      <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>
      



    </>
  )
}

export default Strategy