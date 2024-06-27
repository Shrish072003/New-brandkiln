import React, { useRef } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { TbBackground } from 'react-icons/tb';

const FormEngage = ({ sometext }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before sending
      emailjs.sendForm('service_qscog4f', 'template_xbcde4g', form.current, 'xH9Zd3s9xb0Va6m0Z')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully');
          window.location.reload(); // Reload the page upon successful send
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message');
        });
      }

  return (
    <section className='backgroundimagedf d-flex'>
      <div className='w-50 d-flex sfghshjdj'>
        <FaRegArrowAltCircleRight className='dfkkkghfehgb' />
        <span>Engage us for your<br /> {sometext} project</span>
      </div>
      <div className='w-50 m-5'>
        <form ref={form} onSubmit={handleSubmit} className='glassblack p-3 d-flex flex-column gap-3'>
          <div className='form_id'>Name <input className='inputrir' name="user_name" required /></div>
          <div className='form_id'>Email <input className='inputrir' name="user_email" type="email" required /></div>
          <div className='form_id'>Mobile <input className='inputrir' name="user_mobile" type="tel" required /></div>
          <div className='form_id'>Company <input className='inputrir' name="user_company" required /></div>
          <div className='form_id'>Message <input className='inputrir' name="message" required></input></div>
          <div className='form_id fjgkdfbtn'><button style={{ background: 'transparent', border:'none', color:'white'}} type="submit">Beam it up, Scottie!</button></div>
        </form>
      </div>
    </section>
  );
}

export default FormEngage;
