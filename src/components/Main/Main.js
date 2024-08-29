import React from "react";
import { SwiperWhy } from "./SwiperWhy/SwiperWhy";
import { SwiperTechnologies } from "./SwiperTechnologies/SwiperTechnologies";
import { SwiperHow } from "./SwiperHow/SwiperHow";
import { useWindowSize } from "../Hooks/windowSize.js";

import "./Main.scss";

import mainImg from "../../assets/mobile/03.webp";
import technoImg from "../../assets/mobile/10.webp";
import technoImgDesk from "../../assets/desktop/10.webp";
import vector6 from "../../assets/desktop/vector_6.webp";
import vector7 from "../../assets/desktop/vector_7.webp";
import girl from "../../assets/desktop/04.webp";
import boy from "../../assets/desktop/05.webp";
import girlInBlack from "../../assets/desktop/09.webp";
import boyInBlack from "../../assets/desktop/06.webp";
import arrowDown from "../../assets/desktop/arrow-down.webp";
import unreal from "../../assets/mobile/14.webp";
import unity from "../../assets/mobile/12.webp";
import oculus from "../../assets/mobile/13.webp";
import vive from "../../assets/mobile/11.webp";
import vector8 from "../../assets/desktop/vector_8.webp";
import num01 from "../../assets/desktop/num01.webp";
import num02 from "../../assets/desktop/num02.webp";
import num03 from "../../assets/desktop/num03.webp";
import num04 from "../../assets/desktop/num04.webp";
import vector9 from "../../assets/desktop/vector_9.webp";

export const Main = () => {
  const windowWidth = useWindowSize();
  const isMobileResolution = windowWidth <= 768;

  return (
    <main className="main">
      <section class="main__introduction">
        <div className="main__introduction-title">
          <h2>INTRODUCTION</h2>
          <p>TO HYDRA VR</p>
        </div>
        {!isMobileResolution && (
          <>
            <p className="main__introduction-text-desk">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
            <div className="main__introduction-title-desk">
              <h2>ABOUT</h2>
              <p>HYDRA VR</p>
            </div>
            <img
              src={vector6}
              alt="vector 6"
              className="main__introduction-vector6"
            />
            <img
              src={vector7}
              alt="vector 7"
              className="main__introduction-vector7"
            />
          </>
        )}
        <img
          src={mainImg}
          alt="guy in virtual reality glasses looks to the left"
          className="main__introduction-img"
        />
        <p className="main__introduction-text">
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipisci ng at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat sem per
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudin tempor.
        </p>
        <div className="main__introduction-btn">
          <button className="main__introduction-btn-style">
            LET'S GET IN TOUCH
          </button>
        </div>
      </section>
      <section className="main__why">
        <div className="main__why-title">
          <h2>WHY BUILD</h2>
          <p>WITH HYDRA?</p>
        </div>
        {isMobileResolution ? (
          <div className="main__why-swiper">
            <SwiperWhy />
          </div>
        ) : (
          <>
            <p className="main__why-text">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
            <div className="main__why-desktop">
              <div className="main__why-desktop-card">
                <img
                  src={girl}
                  alt="blonde in virtual reality glasses"
                  className="main__why-desktop-card-img"
                />
                <h3 className="main__why-desktop-card-title">SIMULATION</h3>
                <div className="main__why-desktop-card-border"></div>
                <p className="main__why-desktop-card-text">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
                </p>
                <button className="main__why-desktop-card-btn">
                  TRY IT NOW
                </button>
              </div>
              <div className="main__why-desktop-card">
                <img
                  src={boy}
                  alt="guy in a red sweatshirt in virtual reality glasses"
                  className="main__why-desktop-card-img"
                />
                <h3 className="main__why-desktop-card-title">EDUCATION</h3>
                <div className="main__why-desktop-card-border"></div>
                <p className="main__why-desktop-card-text">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
                </p>
                <button className="main__why-desktop-card-btn">
                  TRY IT NOW
                </button>
              </div>
              <div className="main__why-desktop-card">
                <img
                  src={girlInBlack}
                  alt="girl in black wearing virtual reality glasses"
                  className="main__why-desktop-card-img"
                />
                <h3 className="main__why-desktop-card-title">SELF-CARE</h3>
                <div className="main__why-desktop-card-border"></div>
                <p className="main__why-desktop-card-text">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
                </p>
                <button className="main__why-desktop-card-btn">
                  TRY IT NOW
                </button>
              </div>
              <div className="main__why-desktop-card">
                <img
                  src={boyInBlack}
                  alt="guy in black wearing virtual reality glasses"
                  className="main__why-desktop-card-img"
                />
                <h3 className="main__why-desktop-card-title">OUTDOOR</h3>
                <div className="main__why-desktop-card-border"></div>
                <p className="main__why-desktop-card-text">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
                </p>
                <button className="main__why-desktop-card-btn">
                  TRY IT NOW
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      <section className="main__technologies">
        <picture className="main__technologies-img">
          <source media="(max-width: 767px)" srcset={technoImg} />
          <source media="(min-width: 768px)" srcset={technoImgDesk} />
          <img src={technoImg} alt="girl in virtual reality glasses" />
        </picture>
        <h2 className="main__technologies-title">TECHNOLOGIES & HARDWARE</h2>
        <p className="main__technologies-text">USED BY HYDRA VR.</p>
        {isMobileResolution ? (
          <div className="main__technologies-swiper">
            <SwiperTechnologies />
          </div>
        ) : (
          <>
            <img
              src={vector8}
              alt="vector 8"
              className="main__technologies-desk-vector"
            />
            <img
              src={arrowDown}
              alt="arrow down"
              className="main__technologies-desk-arrow"
            />
            <div>
              <img
                src={unreal}
                alt="unreal"
                className="main__technologies-desk-unreal"
              />
              <img
                src={unity}
                alt="unity"
                className="main__technologies-desk-unity"
              />
              <img
                src={oculus}
                alt="oculus"
                className="main__technologies-desk-oculus"
              />
              <img
                src={vive}
                alt="vive"
                className="main__technologies-desk-vive"
              />
            </div>
          </>
        )}
      </section>
      <section className="main__how">
        <div className="main__how-title">
          <h2>HOW WE BUILD</h2>
          <p>WITH HYDRA VR?</p>
        </div>
        {isMobileResolution ? (
          <div>
            <SwiperHow />
          </div>
        ) : (
          <>
            <p className="main__how-desk-text">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
            <img
              src={vector9}
              alt="vector 9"
              className="main__how-desk-vector"
            />
            <div>
              <div className="main__how-desk-card">
                <img
                  src={num01}
                  alt="circle"
                  className="main__how-desk-card-circle1"
                />
                <p className="main__how-desk-card-solutions1">
                  3D Conception <br /> & Design
                </p>
              </div>
              <div className="main__how-desk-card">
                <img
                  src={num02}
                  alt="circle"
                  className="main__how-desk-card-circle2"
                />
                <p className="main__how-desk-card-solutions2">
                  Interaction <br /> Design
                </p>
              </div>
              <div className="main__how-desk-card">
                <img
                  src={num03}
                  alt="circle"
                  className="main__how-desk-card-circle3"
                />
                <p className="main__how-desk-card-solutions3">
                  VR World <br /> User Testing
                </p>
              </div>
              <div className="main__how-desk-card">
                <img
                  src={num04}
                  alt="circle"
                  className="main__how-desk-card-circle4"
                />
                <p className="main__how-desk-card-solutions4">
                  Hydra VR <br /> Deploy
                </p>
              </div>
            </div>
          </>
        )}
      </section>
      <section>
        <form action="" method="post" className="main__form">
          <h2 className="main__form-title">JOIN HYDRA</h2>
          <div className="main__form-border"></div>
          {isMobileResolution ? (
            <p className="main__form-text">
              Let's Build <br /> Your VR Experience
            </p>
          ) : (
            <p className="main__form-text">Let's Build Your VR Experience</p>
          )}

          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="main__form-first-name"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="main__form-last-name"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="main__form-email"
          />
          <input
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            className="main__form-phone"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="main__form-subject"
          />
          <textarea
            name="tellUsSomething"
            placeholder="Tell Us Something..."
            className="main__form-tell-us-something"
          />
          <input
            name="submit"
            type="submit"
            value="SEND TO HYDRA"
            className="main__form-submit"
          />
        </form>
      </section>
    </main>
  );
};
