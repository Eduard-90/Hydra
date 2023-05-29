import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "./SwiperTechnologies.scss";

import vive from "../../../assets/mobile/11.png";
import unity from "../../../assets/mobile/12.png";
import oculus from "../../../assets/mobile/13.png";
import unreal from "../../../assets/mobile/14.png";
import arrowLeft from "../../../assets/mobile/big-chevron-circle-left.png";
import arrowRight from "../../../assets/mobile/big-chevron-circle-right.png";
import arrowBackground from "../../../assets/mobile/08.png";

export const SwiperTechnologies = () => {
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
      <SwiperSlide className="swiper__technologies">
        <img src={vive} alt="vive" className="swiper__technologies-img" />
      </SwiperSlide>
      <SwiperSlide className="swiper__technologies">
        <img src={unreal} alt="unreal" className="swiper__technologies-img" />
      </SwiperSlide>
      <SwiperSlide className="swiper__technologies">
        <img src={unity} alt="unity" className="swiper__technologies-img" />
      </SwiperSlide>
      <SwiperSlide className="swiper__technologies">
        <img src={oculus} alt="oculus" className="swiper__technologies-img" />
      </SwiperSlide>
      <div className="swiper-button-next">
        <img
          src={arrowRight}
          alt="arrowRight"
          className="swiper__technologies-arrow-right"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__technologies-arrow-bg-right"
        />
      </div>
      <div className="swiper-button-prev">
        <img
          src={arrowLeft}
          alt="arrowLeft"
          className="swiper__technologies-arrow-left"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__technologies-arrow-bg-left"
        />
      </div>
    </Swiper>
  );
};
