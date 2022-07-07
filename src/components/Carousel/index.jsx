// import Paw from "../../assets/pawsLogo.svg";

import { Autoplay, Navigation, Pagination } from "swiper";
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
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiperContainer"
          >
            <SwiperSlide className="imgContainer">
              <div className="image cat">
                <h1>Gato</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="imgContainer" >
              <div className="image dog">
                <h1>Cachorro</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="imgContainer">
              <div className="image hamster">
                <h1>hamster</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </CarouselContainer>
      </SectionContainer>
      {/* <img className="paws" src={Paw} alt="" /> */}
    </>
  );
};
