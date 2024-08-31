import React, { useState, useEffect } from "react";
import "./Header.scss";
import { useWindowSize } from "../Hooks/windowSize.js";

import { Sidebar } from "./Sidebar/Sidebar";
import { SwiperHeader } from "./Swiper/Swiper";

import logo from "../../assets/mobile/logo.webp";
import logoText from "../../assets/mobile/logo_text.webp";
import headerImg from "../../assets/mobile/01.webp";
import headerImgBackground from "../../assets/mobile/02.webp";
import vector1 from "../../assets/mobile/vector_1.webp";
import vector2 from "../../assets/mobile/vector_2.webp";
import vector3 from "../../assets/mobile/vector_3.webp";
import vectorDesk1 from "../../assets/desktop/vector_1.webp";
import vectorDesk2 from "../../assets/desktop/vector_2.webp";
import vectorDesk3 from "../../assets/desktop/vector_3.webp";
import vectorDesk4 from "../../assets/desktop/vector_4.webp";
import vectorDesk5 from "../../assets/desktop/vector_5.webp";
import location from "../../assets/mobile/Location-Icon.webp";
import mail from "../../assets/mobile/mail.webp";
import phone from "../../assets/mobile/phone-call.webp";

export const Header = () => {
  const windowWidth = useWindowSize();
  const isMobileResolution = windowWidth <= 768;

  return (
    <header className="header">
      <section className="header__top">
        <div className="header__top-logo">
          <img src={logo} alt="logo" className="header__top-logo-img" />
          <img
            src={logoText}
            alt="logo_text"
            className="header__top-logo-text"
          />
        </div>
        <nav className="header__top-nav" id="outer-container">
          {isMobileResolution ? (
            <Sidebar />
          ) : (
            <div>
              <ul>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#services">SERVICES</a>
                </li>
                <li>
                  <a href="#technologies">TECHNOLOGIES</a>
                </li>
                <li>
                  <a href="#how">HOW TO</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        {!isMobileResolution && (
          <div className="header__top-btn">
            <button className="header__top-btn-contact">CONTACT US</button>
            <button className="header__top-btn-join">JOIN HYDRA</button>
          </div>
        )}
      </section>
      <section className="header__section">
        <div className="header__img">
          <img
            src={headerImg}
            alt="girl in virtual reality glasses on a pink background"
            className="header__img-img01"
          />
          <img
            src={headerImgBackground}
            alt="background"
            className="header__img-img02"
          />
          <picture className="header__img-vector1">
            <source media="(max-width: 767px)" srcset={vector1} />
            <source media="(min-width: 768px)" srcset={vectorDesk1} />
            <img src={vector1} alt="vector 1" />
          </picture>
          <picture className="header__img-vector2">
            <source media="(max-width: 767px)" srcset={vector2} />
            <source media="(min-width: 768px)" srcset={vectorDesk2} />
            <img src={vector2} alt="vector 2" />
          </picture>
          <picture className="header__img-vector3">
            <source media="(max-width: 767px)" srcset={vector3} />
            <source media="(min-width: 768px)" srcset={vectorDesk3} />
            <img src={vector3} alt="vector 3" />
          </picture>
          {!isMobileResolution && (
            <img
              src={vectorDesk4}
              alt="vector4"
              className="header__img-vector4"
            />
          )}
        </div>
        <div className="header__text">
          <p className="header__text-main">
            <span>Dive</span> Into The Depths <br /> Of{" "}
            <span>Virtual Reality</span>
          </p>
          <p className="header__text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
        </div>
        <div className="header__btn">
          <button className="header__btn-your-world">BUILD YOUR WORLD</button>
        </div>
        <div className="header__location">
          {isMobileResolution ? (
            <SwiperHeader />
          ) : (
            <div className="header__location-grid">
              <div className="header__location-grid-map">
                <a href="#">
                  Pay Us a Visit
                  <br />
                  <span>Union St, Seattle, WA 98101, United States</span>
                </a>
              </div>
              <div className="header__location-grid-phone">
                <a href="tel:(110) 1111-1010">
                  Give Us a Call
                  <br />
                  <span>(110) 1111-1010</span>
                </a>
              </div>
              <div className="header__location-grid-mail">
                <a href="mailto:contact@HydraVTech.com">
                  Send Us a Message
                  <br />
                  <span>Contact@HydraVTech.com</span>
                </a>
              </div>
              <img
                src={vectorDesk5}
                alt="vector 5"
                className="header__location-grid-vector1"
              />
              <img
                src={vectorDesk5}
                alt="vector 5"
                className="header__location-grid-vector2"
              />
            </div>
          )}
        </div>
      </section>
    </header>
  );
};
