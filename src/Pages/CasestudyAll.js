import React from 'react'
import Header from '../Component/header'
import CaseStudyMost from '../Component/Casestudymost.js'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'
import './responsivenes.css';


const CasestudyAll = () => {
  return (
    <>
    <Header/>  
    <CaseStudyMost/>  
    <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>
</>
  )
}

export default CasestudyAll