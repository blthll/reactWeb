import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
       <Header />
    <div className="back_re">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <h2>İLETİŞİME GEÇİN</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  contact */}
    <div className="contact">
      <div className="container">
      <div className="row">
    <div className="col-md-6 padding_right0">
      <form id="request" className="main_form">
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
            <textarea className="textarea" placeholder="Mesajınız" type="type" message="Name" defaultValue={"Mesajınız"} />
          </div>
          <div className="col-md-12">
            <button className="send_btn">Gönder</button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-md-6 padding_left0">
      <div className="map_main">
        <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!4v1655036820067!6m8!1m7!1sDYingJFq7_4z5hHr48GVwA!2m2!1d40.88345796405595!2d29.34571066901848!3f164.5624969289642!4f5.551820202240094!5f0.7820865974627469" width={600} height={463} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
    <Footer />
  </div>
  
  )
}
