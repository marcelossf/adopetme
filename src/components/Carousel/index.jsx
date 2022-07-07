import React from "react";

import Slide1 from "../../assets/slide1.png";
import Foca from "../../assets/slide2.png";
import Lontra from "../../assets/slide3.png";
import Paw from "../../assets/pawsLogo.svg";
import { CarouselContainer, PawsContainer, SectionContainer } from "./style";
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
            className="swiperContainer"
            pagination={{ type: "progressbar" }}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide className="imgContainer">
              <h2>asdfasdf</h2>
              <img src={Slide1} alt="" />
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
      <PawsContainer>
        <img className="paws" src={Paw} alt="" />
      </PawsContainer>
    </>
  );
};
