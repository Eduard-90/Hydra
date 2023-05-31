import React from "react";

import "./Footer.scss";

import footerLogo from "../../assets/mobile/footer-logo.webp";
import vector4 from "../../assets/mobile/vector_4.webp";
import vector5 from "../../assets/mobile/vector_5.webp";
import facebook from "../../assets/mobile/facebook.webp";
import twitter from "../../assets/mobile/twitter.webp";
import linkedin from "../../assets/mobile/linkedin.webp";
import youtube from "../../assets/mobile/youtube.webp";
import instagram from "../../assets/mobile/instagram.webp";
import pinterest from "../../assets/mobile/pinterest.webp";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__img">
        <img src={footerLogo} alt="footer logo" className="footer__img-logo" />
        <img src={vector4} alt="vector" className="footer__img-vector1" />
        <img src={vector5} alt="vector" className="footer__img-vector2" />
      </div>
      <div className="footer__social">
        <h3 className="footer__social-title">SOCIALIZE WITH HYDRA</h3>
        <div className="footer__social-link">
          <a href="" target="_blank" className="footer__social-link-facebook">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="" target="_blank" className="footer__social-link-twitter">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="" target="_blank" className="footer__social-link-linkedin">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="" target="_blank" className="footer__social-link-youtube">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="" target="_blank" className="footer__social-link-instagram">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="" target="_blank" className="footer__social-link-pinterest">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
      <div>
        <button className="footer__btn">BUILD YOUR WORLD</button>
      </div>
      <div className="footer__border"></div>
      <div className="footer__copyright">
        <p>
          2023 © HYDRA LANDING PAGE <br /> BY ZINE. E. FALOUTI <br /> ALL RIGHTS
          RESERVED{" "}
        </p>
      </div>
    </footer>
  );
};
