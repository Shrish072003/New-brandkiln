import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const FormEngage = ({ sometext }) => {
  return (
    <section className='backgroundimagedf d-flex'>
      <div className='w-50 d-flex sfghshjdj'>
        <FaRegArrowAltCircleRight className='dfkkkghfehgb'/>
        <span>Engage us for your<br/> {sometext} project</span> 
      </div>
      <div className='w-50 m-5'>
        <div className='glassblack p-3 d-flex flex-column gap-3'>
          <div className='form_id'>Name <input className='inputrir'/></div>
          <div className='form_id'>Email_id <input className='inputrir'/></div>
          <div className='form_id'>Mobile <input className='inputrir'/></div>
          <div className='form_id'>Company <input className='inputrir'/></div>
          <div className='form_id'>Message <input className='inputrir'/></div>
          <div className='form_id fjgkdfbtn'>Beam it up, Scottie!</div>
        </div>
      </div>
    </section>
  )
}

export default FormEngage
