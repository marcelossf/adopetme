import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1300px;
  height: 270px;

  background-color: var(--petroleumBlue);
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
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1161px;
  height: 270px;
  max-height: 400px;
  border: 4px solid var(--orange);

  .imgContainer {
    width: 100%;
    height: 100%;

    img {
      height: 260px;
    }
  }
`;
