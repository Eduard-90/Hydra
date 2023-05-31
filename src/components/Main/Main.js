import React from "react";
import { SwiperWhy } from "./SwiperWhy/SwiperWhy";
import { SwiperTechnologies } from "./SwiperTechnologies/SwiperTechnologies";
import { SwiperHow } from "./SwiperHow/SwiperHow";

import "./Main.scss";

import mainImg from "../../assets/mobile/03.webp";
import technoImg from "../../assets/mobile/10.webp";

export const Main = () => {
  return (
    <main className="main">
      <section class="main__introduction">
        <div className="main__introduction-title">
          <h2>INTRODUCTION</h2>
          <p>TO HYDRA VR</p>
        </div>
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
        <div>
          <button className="main__introduction-btn">LET'S GET IN TOUCH</button>
        </div>
      </section>
      <section className="main__why">
        <div className="main__why-title">
          <h2>WHY BUILD</h2>
          <p>WITH HYDRA?</p>
        </div>
        <div className="main__why-swiper">
          <SwiperWhy />
        </div>
      </section>
      <section className="main__technologies">
        <img
          src={technoImg}
          alt="girl in virtual reality glasses"
          className="main__technologies-img"
        />
        <h2 className="main__technologies-title">TECHNOLOGIES & HARDWARE</h2>
        <p className="main__technologies-text">USED BY HYDRA VR.</p>
        <div className="main__technologies-swiper">
          <SwiperTechnologies />
        </div>
      </section>
      <section className="main__how">
        <div className="main__how-title">
          <h2>HOW WE BUILD</h2>
          <p>WITH HYDRA VR?</p>
        </div>
        <div>
          <SwiperHow />
        </div>
      </section>
      <section>
        <form action="" method="post" className="main__form">
          <h2 className="main__form-title">JOIN HYDRA</h2>
          <div className="main__form-border"></div>
          <p className="main__form-text">
            Let's Build <br /> Your VR Experience
          </p>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="main__form-firstName"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="main__form-lastName"
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
            className="main__form-tellUsSomething"
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
