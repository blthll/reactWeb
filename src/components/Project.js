import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Project() {
  return (
    <div>
       <Header />
  <div className="back_re">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h2>PROJELERİMİZ</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* projects */}
  <div className="projects">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <span>Şuana kadar tamamlanan işler ve projeleri aşağıda görebilirsiniz.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="proj" className="carousel slide projects_ban" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#proj" data-slide-to={0} className="active" />
              <li data-target="#proj" data-slide-to={1} />
              <li data-target="#proj" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img1.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img2.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img2.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img1.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img2.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="project">
                          <div className="project_img">
                            <figure><img src="assets/images/project_img1.png" alt="#" /></figure>
                          </div>
                          <div id="pro_ho" className="project_text">
                            <h3>Reader will be<br /> distracted by the readable</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#proj" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#proj" role="button" data-slide="next">
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
  );
}
