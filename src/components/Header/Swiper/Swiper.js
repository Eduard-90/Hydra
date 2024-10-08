import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "./Swiper.scss";

import arrowLeft from "../../../assets/mobile/chevron-circle-left.webp";
import arrowRight from "../../../assets/mobile/chevron-circle-right.webp";
import location from "../../../assets/mobile/Location-Icon.webp";
import mail from "../../../assets/mobile/mail.webp";
import phone from "../../../assets/mobile/phone-call.webp";

export const SwiperHeader = () => {
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
      <SwiperSlide className="swiper-slide">
        <img src={location} alt="location" className="img" />
        <a href="#" className="text">
          {" "}
          Union St, Seattle, WA 98101, <br />
          United States
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={mail} alt="mail" className="img" />
        <a href="mailto:contact@HydraVTech.com" className="text">
          Contact@HydraVTech.com
        </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={phone} alt="phone" className="img" />
        <a href="tel:(110) 1111-1010" className="text">
          (110) 1111-1010
        </a>
      </SwiperSlide>
      <div className="swiper-button-next">
        <img src={arrowRight} alt="arrowRight" />
      </div>
      <div className="swiper-button-prev">
        <img src={arrowLeft} alt="arrowLeft" />
      </div>
    </Swiper>
  );
};
