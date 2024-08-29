import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "./SwiperWhy.scss";

import girl from "../../../assets/mobile/04.webp";
import boy from "../../../assets/mobile/05.webp";
import girlInBlack from "../../../assets/mobile/09.webp";
import boyInBlack from "../../../assets/mobile/06.webp";
import imgBackground from "../../../assets/mobile/07.webp";
import arrowLeft from "../../../assets/mobile/big-chevron-circle-left.webp";
import arrowRight from "../../../assets/mobile/big-chevron-circle-right.webp";
import arrowBackground from "../../../assets/mobile/08.webp";

export const SwiperWhy = () => {
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
      <SwiperSlide className="swiper__why-slide">
        <div>
          <img
            src={girl}
            alt="blonde in virtual reality glasses"
            className="swiper__why-img"
          />
          <img
            src={imgBackground}
            alt="blonde in virtual reality glasses background"
            className="swiper__why-img-bg"
          />
        </div>
        <div>
          <h3 className="swiper__why-title">SIMULATION</h3>
          <div className="swiper__why-border"></div>
          <p className="swiper__why-text">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
        </div>
        <div>
          <button className="swiper__why-btn">TRY IT NOW</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper__why-slide">
        <div>
          <img
            src={boy}
            alt="guy in a red sweatshirt in virtual reality glasses"
            className="swiper__why-img"
          />
          <img
            src={imgBackground}
            alt="guy in a red sweatshirt in virtual reality glasses background"
            className="swiper__why-img-bg"
          />
        </div>
        <div>
          <h3 className="swiper__why-title">EDUCATION</h3>
          <div className="swiper__why-border"></div>
          <p className="swiper__why-text">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
        </div>
        <div>
          <button className="swiper__why-btn">TRY IT NOW</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper__why-slide">
        <div>
          <img
            src={girlInBlack}
            alt="girl in black wearing virtual reality glasses"
            className="swiper__why-img"
          />
          <img
            src={imgBackground}
            alt="girl in black wearing virtual reality glasses background"
            className="swiper__why-img-bg"
          />
        </div>
        <div>
          <h3 className="swiper__why-title">SELF-CARE</h3>
          <div className="swiper__why-border"></div>
          <p className="swiper__why-text">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
        </div>
        <div>
          <button className="swiper__why-btn">TRY IT NOW</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper__why-slide">
        <div>
          <img
            src={boyInBlack}
            alt="guy in black wearing virtual reality glasses"
            className="swiper__why-img"
          />
          <img
            src={imgBackground}
            alt="guy in black wearing virtual reality glasses background"
            className="swiper__why-img-bg"
          />
        </div>
        <div>
          <h3 className="swiper__why-title">OUTDOOR</h3>
          <div className="swiper__why-border"></div>
          <p className="swiper__why-text">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
        </div>
        <div>
          <button className="swiper__why-btn">TRY IT NOW</button>
        </div>
      </SwiperSlide>
      <div className="swiper-button-next">
        <img
          src={arrowRight}
          alt="arrowRight"
          className="swiper__why-arrow-right"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__why-arrow-bg-right"
        />
      </div>
      <div className="swiper-button-prev">
        <img
          src={arrowLeft}
          alt="arrowLeft"
          className="swiper__why-arrow-left"
        />
        <img
          src={arrowBackground}
          alt="arrow background"
          className="swiper__why-arrow-bg-left"
        />
      </div>
    </Swiper>
  );
};
