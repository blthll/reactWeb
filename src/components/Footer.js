import React from 'react'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class=" col-lg-3 col-md-6">
                    <h1 style={{color: "white"}}>Alper İş Makinaları</h1>
                     <p class="many">
                     1990 yılından beri %100 müşteri memnuniyeti esaslı yaptığımız tüm işlerin arkasındayız.
                     </p>
                  </div>
                  <div class="col-lg-2 offset-lg-1 col-md-6">
                     <h3>Hızlı Erişim Linkleri</h3>
                     <ul class="link_menu">
                     <li>
                       <NavLink exact activeClassName="active" to="/">Anasayfa</NavLink>
                       </li>
                       <li >
                        <NavLink exact activeClassName="active" to="/about">Hakkında</NavLink>
                         </li>
                        <li >
                        <NavLink exact activeClassName="active" to="/project">Projeler</NavLink>
                        </li>
                        <li >
                        <NavLink  exact activeClassName="active" to="/contact">İletişim</NavLink>
                        </li>
                        </ul>
                  </div>
                  <div class=" col-lg-3 col-md-6">
                     <h3>INSTAGRAM Paylaşımları</h3>
                     <ul class="insta text_align_left">
                        <li><img src="assets/images/inst1.png" alt="#"/></li>
                        <li><img src="assets/images/inst2.png" alt="#"/></li>
                        <li><img src="assets/images/inst3.png" alt="#"/></li>
                        <li><img src="assets/images/inst4.png" alt="#"/></li>
                     </ul>
                  </div>
                  <div class=" col-lg-3 col-md-6 ">
                     <h3>Kampanyalar ile ilgili bilgi almak için kaydolun </h3>
                     <form class="bottom_form">
                        <input class="enter" placeholder="Email adresiniz girin" type="text" name="Enter your email"/>
                        <button class="sub_btn">Kaydol</button>
                     </form>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-8 offset-md-2">
                        <p>© 2022 Tüm hakları korunmaktadır.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  )
}
