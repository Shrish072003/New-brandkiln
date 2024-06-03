import React from 'react'

import Header from '../Component/header.js'
import AppsandPlatformDevelopment from '../Component/AppsandPlatformDevelopment.js'
import Particale from '../Component/Particale.js';
import CaseStudyMobil from '../Component/CaseStudyMobil.js'
import './responsivenes.css';



const Metaverse = () => {
  return (
    <>
          <Header/> 
          <AppsandPlatformDevelopment /> 
          <div  className='hiden' ><Particale/></div>
      <div  className='visdesk2' ><CaseStudyMobil/></div>
    </>
  )
}

export default Metaverse