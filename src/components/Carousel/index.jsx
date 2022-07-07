import React from "react";

import Capivara from "../../assets/capivara.jpg";
import Foca from "../../assets/foquinha.jpg";
import Lontra from "../../assets/lontrinha.jpg";
import Paw from "../../assets/pawsLogo.svg";
import { CarouselContainer, SectionContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carousel = () => {
  return (
    <>
      <SectionContainer>
        <CarouselContainer>
          <Swiper
            pagination={{ type: "progressbar" }}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiperContainer"
          >
            <SwiperSlide className="imgContainer">
              <img src={Capivara} alt="" />
            </SwiperSlide>
            <SwiperSlide className="imgContainer">
              <img src={Foca} alt="" />
            </SwiperSlide>
            <SwiperSlide className="imgContainer">
              <img src={Lontra} alt="" />
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      </SectionContainer>
      <img className="paws" src={Paw} alt="" />
    </>
  );
};
