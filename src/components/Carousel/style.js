import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  /* max-width: 1161px; */
  height: 270px;
`;

export const CarouselContainer = styled.div`
  max-width: 1161px;
  height: 270px;
  max-height: 400px;

  .swiperContainer {
    width: 100%;
    height: 100%;

    .imgContainer {
      height: 100%;

      img {
      
      }

      h2 {
        
      }
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--petroleumBlue);

    .swiperContainer {
      width: 80%;
      height: 80%;
      border-radius: 30px;
      border: 4px solid var(--orange);
    }
  }
`;

export const PawsContainer = styled.div`
  width: 100%;
  height: 310px;
  max-height: 440px;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .paws {
    z-index: 9999;
    height: 105px;
  }
`;
