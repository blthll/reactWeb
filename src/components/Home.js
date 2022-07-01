import React,{form} from 'react'
import Slider from './Slider';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { ContactUs } from './ContactUs';

export default function Home() {
  return (
       
           <div>
             <Header />
             <Slider/>
      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div id="text_hover" className="const text_align_center">
                <i><img src="assets/images/ser1.png" alt="#" /></i>
                <span>ALIM SATIM</span>
              </div>
            </div>
            <div className="col-md-3">
              <div id="text_hover" className="const text_align_center">
                <i><img src="assets/images/ser2.png" alt="#" /></i>
                <span>KİRALAMA</span>
              </div>
            </div>
            <div className="col-md-3">
              <div id="text_hover" className="const text_align_center">
                <i><img src="assets/images/ser3.png" alt="#" /></i>
                <span>BÜYÜK ÇAPLI ONARIMLAR-REVİZYONLARI</span>
              </div>
            </div>
            <div className="col-md-3">
              <div id="text_hover" className="const text_align_center">
                <i><img src="assets/images/ser3.png" alt="#" /></i>
                <span>YEDEK PARÇA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end three_box */}
      {/* about */}
      <div className="about">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-7">
              <div className="titlepage">
                <h2>Şirketimiz Hakkında</h2>
                <span>Alper İş Makinaları, Birmes Sanayi Sitesi'nde kurulmuş, her nevi iş makinaları bakım & onarım & revizyon & alım & satım işlerinde uzmanlığı ile bilinen bir iş makinası servisidir. Bünyesinde 2 adet torna tezgahı, 1 adet radyal matkapın yanı sıra ; onarım / bakım için gereken tüm orjinal ve yedek parçaları da bulundurmakta ve/veya teminini sağlamaktadır...</span>
                
                <Link to="/About" className="read_more">Devam Et</Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="about_img">
                <figure><img src="assets/images/about.png" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* projects */}
      <div className="projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Projelerimiz</h2>
                <span>Şuana kadar tamamlanan işler ve projelere buradan ulaşabilirsiniz.</span>
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
      {/* end projects */}
      {/* choose */}
      <div className="choose">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ">
              <div className="titlepage">
                <h2>Bizi Tercih Edin</h2>
                <p>1990 yılından beri %100 müşteri memnuniyeti esaslı yaptığımız tüm işlerin arkasındayız. Sizlere en başarılı, kalıcı ve sağlam çözümleri bütçenize en uygun şekilde vermeyi görevimiz biliriz. Siz de yapılamaz denen tüm işler için ALPER İŞ MAKİNALARI'nın nasıl yaptığını izlemelisiniz...</p>
                <div className="award">
                  <div id="awa_ho" className="award_icon text_align_center">
                    <i><img src="assets/images/ch1.png" alt="#" />
                    </i>
                    <strong>%100 MÜŞTERİ MEMNUNİYETİ</strong>
                  </div>
                  <div id="awa_ho" className="award_icon text_align_center">
                    <i><img src="assets/images/ch2.png" alt="#" /></i>
                    <strong>KALICI ÇÖZÜMLER</strong>
                  </div>
                  <div id="awa_ho" className="award_icon text_align_center">
                    <i><img src="assets/images/ch3.png" alt="#" /></i>
                    <strong>32 YILLIK FORKLİFT İŞ MAKİNALARI TECRÜBESİ</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end choose */}
      {/* staff */}
       {/* 
      <div className="staff_main">
        <div className="container_staff">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Expert Staff</h2>
                <span>There are many variations of passages of Lorem Ipsum available, but the </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <i><img src="assets/images/man.png" alt="#" /></i>
                </div>
                <div className="social_icon_main">
                  <h4>Available</h4>
                  <ul className="social_icon_staff text_align_center  ">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <i><img src="assets/images/man.png" alt="#" /></i>
                </div>
                <div className="social_icon_main">
                  <h4>Available</h4>
                  <ul className="social_icon_staff text_align_center  ">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <i><img src="assets/images/man.png" alt="#" /></i>
                </div>
                <div className="social_icon_main">
                  <h4>Available</h4>
                  <ul className="social_icon_staff text_align_center  ">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <i><img src="assets/images/man.png" alt="#" /></i>
                </div>
                <div className="social_icon_main">
                  <h4>Available</h4>
                  <ul className="social_icon_staff text_align_center  ">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <a className="read_more" href="Javascript:void(0)"> See More</a>
            </div>
          </div>
        </div>
      </div>
         */}
      {/* end staff */}
   
      {/*  contact */}
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Bizimle İletişime Geçin</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <ContactUs />
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
      {/* end contact */}
      <div className="truck">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 jkhgkj">
              <div className="truck_img1">
                <img src="assets/images/truck.png" alt="#" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="truck_img1">
                <img src="assets/images/jcb.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* clients */}
      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Müşteri Yorumları</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="testimo_ban_bg">
                <div id="testimo" className="carousel slide testimo_ban" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#testimo" data-slide-to={0} className="active" />
                    <li data-target="#testimo" data-slide-to={1} />
                    <li data-target="#testimo" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container parile0">
                        <div className="carousel-caption relative2">
                          <div className="row d_flex">
                            <div className="col-md-12">
                              <i><img className="qusright" src="assets/images/t.png" alt="#" /><img src="assets/images/tes.png" alt="#" /><img className="qusleft" src="assets/images/t.png" alt="#" /></i>
                              <div className="consect">
                                <span>Aset Boya</span>
                                <p>Özverili ve tüm acil durumlarda hazır durumda olan ALPER İŞ MAKİNALARI'na güvenimiz sayesinde işlerimizi tereddütsü yürütüyoruz. Böyle bir çalışma ahlakı için kendilerine teşekkür ederiz.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container parile0">
                        <div className="carousel-caption relative2">
                          <div className="row d_flex">
                            <div className="col-md-12">
                              <i><img className="qusright" src="assets/images/t.png" alt="#" /><img src="assets/images/tes.png" alt="#" /><img className="qusleft" src="assets/images/t.png" alt="#" /></i>
                              <div className="consect">
                              <span>Aset Boya</span>
                                <p>Özverili ve tüm acil durumlarda hazır durumda olan ALPER İŞ MAKİNALARI'na güvenimiz sayesinde işlerimizi tereddütsü yürütüyoruz. Böyle bir çalışma ahlakı için kendilerine teşekkür ederiz.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                      <i className="fa fa-arrow-left" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end clients */}
      {/* Javascript files*/}
      {/* sidebar */}
      <Footer />
    </div>
          );
        }
   

