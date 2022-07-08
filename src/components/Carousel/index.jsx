import Paw from "../../assets/pawsLogo.svg";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselContainer, SectionContainer } from "./style";

export const Carousel = () => {
  return (
    <>
      <SectionContainer>
        <CarouselContainer>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            modules={[Autoplay]}
            className="swiperContainer"
          >
            <SwiperSlide className="imgContainer">
              <div className="image cat">
                <h2>Azar mesmo é não ter esse carinho!</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="imgContainer" >
              <div className="image dog">
                <h2>Cachorro</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="imgContainer">
              <div className="image hamster">
                <h2>hamster</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      <img className="paws" src={Paw} alt="icone de pata" />
      </SectionContainer>
    </>
  );
};
