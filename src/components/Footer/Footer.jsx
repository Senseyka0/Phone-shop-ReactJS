import React from "react";

import { NavLink } from "react-router-dom";

import { RiMastercardLine, RiPaypalLine } from "react-icons/ri";
import { SiVisa } from "react-icons/si";

import "./Footer.scss";

function Footer() {
   return (
      <div className="footer">
         <div className="footer-top">
            <div className="footer-top__links">
               <p>Links</p>
               <ul>
                  <NavLink to="/about">About us</NavLink>
                  <NavLink to="/news">News</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
               </ul>
            </div>
            <div className="footer-top__subscribe">
               <p>Be modern</p>
               <div className="footer-subscribe__email">
                  <p>Promotions, new products and sales. Directly to your inbox</p>
                  <input type="email" placeholder="Your email" />
                  <button>Subscribe</button>
               </div>
            </div>
         </div>
         <div className="footer-bottom">
            <div className="footer-bottom__copyright">Copyright © 2021 AlexM</div>
            <div className="footer-bottom__banks">
               <SiVisa />
               <RiMastercardLine />
               <RiPaypalLine />
            </div>
         </div>
      </div>
   );
}

export default Footer;
