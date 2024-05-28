import React from 'react'

import Header from '../Component/header.js'
import CasestudyWeddingBells from '../Component/CasestudyWeddingBells.js'
import Particale from '../Component/Particale.js';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Casestudy = () => {
  return (
   <>
         <Header/>  
         <CasestudyWeddingBells/>  
         <section className='backgroundimagedf d-flex'>
                <div className='w-50 d-flex  sfghshjdj'>
                <FaRegArrowAltCircleRight className='dfkkkghfehgb'/>
       <span>Engage us for your<br/> Brand Positioning project</span> 
                </div>
                <div className='w-50 m-5'>
                    <div className='glassblack p-3 d-flex flex-column gap-3'>
                        <div className='form_id'>Name <input className='inputrir'/></div>
                        <div className='form_id'>Email_id <input className='inputrir'/></div>
                        <div className='form_id'>Mobile <input className='inputrir'/></div>
                        <div className='form_id'>Company <input className='inputrir'/></div>
                        <div className='form_id'>Designation <input className='inputrir'/></div>
                        <div className='form_id fjgkdfbtn'>Beam it up, Scottie!</div>

                    </div>
                </div>
            </section>
         <Particale />
   </>
  )
}

export default Casestudy