import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_35yhjsn', 'template_yh5d5zg', form.current, 'yr990UP90DuAfVpG-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="col-md-6 padding_right0">
    <form ref={form} className="main_form" onSubmit={sendEmail}>
    <div className="row">
    <div className="col-md-12 ">
      <input className="contactus" placeholder="İsim" type="type" name="Name" />
    </div>
    <div className="col-md-12">
      <input className="contactus" placeholder="Telefon" type="type" name="Phone" />
    </div>
    <div className="col-md-12">
      <input className="contactus" placeholder="Email" type="type" name="Email" />
    </div>
    <div className="col-md-12">
      <textarea className="textarea" placeholder="Mesajınız" type="type" name="Message"/>
    </div>
    <div className="col-md-12">
      <input className='send_btn' type="submit" value="Gönder" />
    </div>
    </div>
    </form>
    </div>
  );
};

