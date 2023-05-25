import React from "react";
import "./Header.scss";
import logo from "../../assets/mobile/logo.png";
import logoText from "../../assets/mobile/logo_text.png";
import headerImg from "../../assets/mobile/01.png";
import headerImgBackground from "../../assets/mobile/02.png";
import vector1 from "../../assets/mobile/vector_1.png";
import vector2 from "../../assets/mobile/vector_2.png";
import vector3 from "../../assets/mobile/vector_3.png";

export const Header = () => {
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
        <nav className="header__top-nav"></nav>
      </section>
      <section>
        <div className="header__img">
          <img src={headerImg} alt="01" className="header__img-img01" />
          <img
            src={headerImgBackground}
            alt="02"
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
          <button>
            <a href="#">
              Union St, Seattle, WA 98101, <br />
              United States
            </a>
          </button>
        </div>
      </section>
    </header>
  );
};
