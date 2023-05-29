import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "./SwiperHow.scss";

import circle from "../../../assets/mobile/15.png";
import arrowLeft from "../../../assets/mobile/big-chevron-circle-left.png";
import arrowRight from "../../../assets/mobile/big-chevron-circle-right.png";
import arrowBackground from "../../../assets/mobile/08.png";

export const SwiperHow = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide className="swiper__how">
        <img src={circle} alt="circle" className="swiper__how-img" />
        <p className="swiper__how-num">01</p>
        <p className="swiper__how-text">
          3D Conception <br /> & Design
        </p>
      </SwiperSlide>
      <SwiperSlide className="swiper__how">
        <img src={circle} alt="circle" className="swiper__how-img" />
        <p className="swiper__how-num">02</p>
        <p className="swiper__how-text">
          Interaction <br /> Design
        </p>
      </SwiperSlide>
      <SwiperSlide className="swiper__how">
        <img src={circle} alt="circle" className="swiper__how-img" />
        <p className="swiper__how-num">03</p>
        <p className="swiper__how-text">
          VR World <br /> User Testing
        </p>
      </SwiperSlide>
      <SwiperSlide className="swiper__how">
        <img src={circle} alt="circle" className="swiper__how-img" />
        <p className="swiper__how-num">04</p>
        <p className="swiper__how-text">
          Hydra VR <br /> Deploy
        </p>
      </SwiperSlide>
      <div className="swiper-button-next">
        <img
          src={arrowRight}
          alt="arrowRight"
          className="swiper__how-arrow-right"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__how-arrow-bg-right"
        />
      </div>
      <div className="swiper-button-prev">
        <img
          src={arrowLeft}
          alt="arrowLeft"
          className="swiper__how-arrow-left"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__how-arrow-bg-left"
        />
      </div>
    </Swiper>
  );
};
