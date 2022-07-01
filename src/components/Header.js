import React from 'react'

import { Link } from "react-router-dom";


export default function Header() {
  return (
   <header>
   {/* header inner */}
   <div className="header">
     <div className="header_top">
       <div className="container">
         <div className="row">
           <div className="col-md-3">
             <ul className="contat_infoma">
               <li><a href="Javascript:void(0)"><i className="fa fa-phone" aria-hidden="true" /> Telefon : +90 555 555 55 55 </a></li>
             </ul>
           </div>
           <div className="col-md-6">
             <ul className="social_icon_top text_align_center  ">
               <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
             </ul>
           </div>
           <div className="col-md-3">
             <ul className="contat_infoma text_align_right">
               <li><a href="Javascript:void(0)"> <i className="fa fa-envelope" aria-hidden="true" /> alperhidrolik@hotmail.com </a></li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div className="container">
       <div className="row">
         <div className="col-md-12">
           <div className="header_bottom">
             <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                 <div className="full">
                   <div className="center-desk">
                     <div className="logo">
                       <a href="index.html">ALPER İŞ MAKİNALARI</a>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                 <nav className="navigation navbar navbar-expand-md navbar-dark ">
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon" />
                   </button>
                   <div className="collapse navbar-collapse" id="navbarsExample04">
                     <ul className="navbar-nav mr-auto">
                       <li className="nav-item ">
                       <Link className={"nav-link"} exact activeClassName="active" to="/">Anasayfa</Link>
                       </li>
                       <li class="nav-item">
                        <Link className={"nav-link"} exact activeClassName="active" to="/about">Hakkında</Link>
                         </li>
                        <li class="nav-item">
                        <Link className={"nav-link"} exact activeClassName="active" to="/project">Projeler</Link>
                        </li>
                        <li class="nav-item">
                        <Link className={"nav-link"} exact activeClassName="active" to="/contact">İLETİŞİM</Link>
                        </li>
                        </ul>
                   </div> {/*
                   <ul className="search">
                     <li><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true" /></a></li>
                   </ul>
                   */}
                 </nav>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* end header inner */}
   {/* end header */}
   {/* banner */}
 </header>
 
  )
}
