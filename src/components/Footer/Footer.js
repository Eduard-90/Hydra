import React from "react";
import { useWindowSize } from "../Hooks/windowSize";

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
import vectorDesk10 from "../../assets/desktop/vector_10.webp";
import vectorDesk11 from "../../assets/desktop/vector_11.webp";
import vectorDesk13 from "../../assets/desktop/vector_13.webp";

export const Footer = () => {
  const windowWidth = useWindowSize();
  const isMobileResolution = windowWidth <= 768;

  return (
    <footer className="footer">
      <div className="footer__img">
        <img src={footerLogo} alt="footer logo" className="footer__img-logo" />
        <picture className="footer__img-vector1">
          <source media="(max-width: 767px)" srcset={vector4} />
          <source media="(min-width: 768px)" srcset={vectorDesk10} />
          <img src={vector4} alt="vector 2" />
        </picture>
        <picture className="footer__img-vector2">
          <source media="(max-width: 767px)" srcset={vector5} />
          <source media="(min-width: 768px)" srcset={vectorDesk11} />
          <img src={vector5} alt="vector 2" />
        </picture>
      </div>
      {!isMobileResolution && (
        <>
          <img src={vectorDesk13} alt="border" className="footer__border1" />
          <nav className="footer__main-nav">
            <div>
              <ul>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">TECHNOLOGIES</a>
                </li>
                <li>
                  <a href="#">HOW TO</a>
                </li>
                <li>
                  <a href="#">JOIN HYDRA</a>
                </li>
              </ul>
            </div>
          </nav>
          <img src={vectorDesk13} alt="border" className="footer__border2" />
          <nav className="footer__help-nav">
            <ul>
              <li>
                <a href="#">F.A.Q</a>
              </li>
              <li>
                <a href="#">SITEMAP</a>
              </li>
              <li>
                <a href="#">CONDITIONS</a>
              </li>
              <li>
                <a href="#">LICENSES</a>
              </li>
            </ul>
          </nav>
          <img src={vectorDesk13} alt="border" className="footer__border3" />
        </>
      )}
      <div className="footer__social">
        <h3 className="footer__social-title">SOCIALIZE WITH HYDRA</h3>
        <div className="footer__social-link">
          <a
            href="https://www.facebook.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="footer__social-link-facebook"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://twitter.com/"
            target="_blank"
            className="footer__social-link-twitter"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/"
            target="_blank"
            className="footer__social-link-linkedin"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.youtube.com/"
            target="_blank"
            className="footer__social-link-youtube"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.instagram.com/"
            target="_blank"
            className="footer__social-link-instagram"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.pinterest.ca/"
            target="_blank"
            className="footer__social-link-pinterest"
          >
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
      <div>
        <button className="footer__btn">BUILD YOUR WORLD</button>
      </div>
      <div className="footer__border"></div>
      <div className="footer__copyright">
        {isMobileResolution ? (
          <p>
            2024 © HYDRA LANDING PAGE <br /> BY ZINE. E. FALOUTI <br /> ALL
            RIGHTS RESERVED
          </p>
        ) : (
          <p>
            2024 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED
          </p>
        )}
      </div>
    </footer>
  );
};
