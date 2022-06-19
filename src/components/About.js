import React from 'react'
import Header from './Header';
import Footer from './Footer';
export default function About() {
  return (
    <div>
       <Header />
  {/* header */}
  <div className="back_re">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h2>HAKKINDA</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about */}
  <div className="about">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-7">
          <div className="titlepage">
            <h2>Şirketimiz Hakkında</h2>
            <span>Alper İş Makinaları, Birmes Sanayi Sitesi'nde kurulmuş, her nevi iş makinaları bakım & onarım & revizyon & alım & satım işlerinde uzmanlığı ile bilinen bir iş makinası servisidir. Bünyesinde 2 adet torna tezgahı, 1 adet radyal matkapın yanı sıra ; onarım / bakım için gereken tüm orjinal ve yedek parçaları da bulundurmakta ve/veya teminini sağlamaktadır.  Hidrolik alanında uzmanlaşmış olan ALPER İŞ MAKİNALARI kuruluşundan beri sayısız hidrolik çözümleri hanesine yazdırmıştır.  Alper İş Makinaları kurucuları Selim Alper ve Batuhan Alper ilk günkü azimle günümüzde de tüm sektör firmalarına hizmet vermeye devam etmektedir.</span>
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
  <Footer />
</div>

  );
}
