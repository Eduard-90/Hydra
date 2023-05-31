import React, { useState, useEffect } from "react";
import "./Header.scss";

import { Sidebar } from "./Sidebar/Sidebar";
import { SwiperHeader } from "./Swiper/Swiper";

import logo from "../../assets/mobile/logo.webp";
import logoText from "../../assets/mobile/logo_text.webp";
import headerImg from "../../assets/mobile/01.webp";
import headerImgBackground from "../../assets/mobile/02.webp";
import vector1 from "../../assets/mobile/vector_1.webp";
import vector2 from "../../assets/mobile/vector_2.webp";
import vector3 from "../../assets/mobile/vector_3.webp";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          ) : (
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
              </ul>
            </div>
          )}
        </nav>
      </section>
      <section>
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
          <img src={vector1} alt="vector 1" className="header__img-vector1" />
          <img src={vector2} alt="vector 2" className="header__img-vector2" />
          <img src={vector3} alt="vector 3" className="header__img-vector3" />
        </div>
        <div className="header__text">
          <p>
            <span>Dive</span> Into The Depths <br /> Of{" "}
            <span>Virtual Reality</span>
          </p>
        </div>
        <div>
          <button className="header__btn-your-world">BUILD YOUR WORLD</button>
        </div>
        <div className="header__location">
          <SwiperHeader />
        </div>
      </section>
    </header>
  );
};
