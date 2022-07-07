import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;

  /* 
  .paws {
    position: relative;
    top: -60px;
    right: -250px;
    z-index: 9999;
    width: 141px;
    height: 105px;

    @media (min-width: 768px) {
      right: -600px;
    }
  } */
  @media (min-width: 1024px) {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--petroleumBlue);
    box-shadow: 0px 0px 40px px var(--petroleumBlue);
    -webkit-box-shadow: 0px 0px 40px 22px var(--petroleumBlue);
    -moz-box-shadow: 0px 0px 40px 22px var(--petroleumBlue);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;

  .swiperContainer {
    width: 100%;
    height: 300px;
    border: 4px solid var(--orange);
    border-radius: 30px;
  }

  .imgContainer {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 300px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 90%;
  }
`;
