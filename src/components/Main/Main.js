import React from "react";
import { SwiperWhy } from "./SwiperWhy/SwiperWhy";
import { SwiperTechnologies } from "./SwiperTechnologies/SwiperTechnologies";
import { SwiperHow } from "./SwiperHow/SwiperHow";

import "./Main.scss";

import mainImg from "../../assets/mobile/03.png";
import technoImg from "../../assets/mobile/10.png";

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
        <div className="main__how-swiper">
          <SwiperHow />
        </div>
      </section>
    </main>
  );
};
