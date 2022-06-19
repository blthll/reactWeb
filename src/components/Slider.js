import React from 'react'

export default function Slider() {
  return (
    <div className='full_bg'>
    <section className="banner_main">
    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption  banner_po">
              <div className="row">
                <div className="col-md-9">
                  <div className="build_box">
                    <h1>Alper İş Makinaları </h1>
                    <p>Güven veren hizmet kalitesi <br /> Kalıcı Çözümler</p>
                    <a className="read_more conatct_btn" href="contact.html" role="button">İletişime Geçin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption banner_po">
              <div className="row">
                <div className="col-md-9">
                  <div className="build_box">
                    <h1>Alper İş Makinaları </h1>
                    <p>Güven veren hizmet kalitesi<br /> Kalıcı Çözümler</p>
                    <a className="read_more conatct_btn" href="contact.html" role="button">İletişime Geçin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption banner_po">
              <div className="row">
                <div className="col-md-9">
                  <div className="build_box">
                    <h1>Alper İş Makinaları </h1>
                    <p>Güven veren hizmet kalitesi<br /> Kalıcı Çözümler</p>
                    <a className="read_more conatct_btn" href="contact.html" role="button">İletişime Geçin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <i className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Önceki</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Sonraki</span>
      </a>
    </div>
  </section>
  </div>
  )
}
