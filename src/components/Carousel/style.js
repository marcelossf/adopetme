import styled from "styled-components";

import dogSM from "../../assets/dog370.png";
import dogLG from "../../assets/dogDesk.png";
import dogMD from "../../assets/dogMD.png";

import hamLG from "../../assets/hamLG.png";
import hamMD from "../../assets/hamMD.png";
import hamSM from "../../assets/hamSM.png";

import catLG from "../../assets/catDesk.png";
import catMD from "../../assets/catMD.png";
import catSM from "../../assets/catSM.png";


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

  }

    
    /* border-top: 4px solid var(--orange);
    border-bottom: 4px solid var(--orange);
     */

  .imgContainer {
    width: 100%;
    height: 250px;  
    
    /* position: relative; */
    /* overflow: hidden; */
    @media(min-width:1024px) {
      margin: 0 auto;
      width: 80%;
    }
  }
  .image{
    height: 100%;
    max-width: 100%;
    
    background: no-repeat center; 
    background-size: cover;
    
    @media(min-width:1024px) {
      margin: 0 auto;
      border-radius: 30px;
      width: 80%;
    }

  }
  
  .cat{
    background-image:  url(${catLG});
    @media(max-width:1024px){
      background-image: url(${catMD});
    }
    @media(max-width:425px){
      background-image: ${catSM};
    }
  }

  .dog {
    background-image:  url(${dogLG});
    
    @media(max-width:1024px){
      background-image: url(${dogMD});
    }

    @media(max-width:425px){
      background-image: ${dogSM};
    }
  }
    .hamster{
      background-image:  url(${hamLG});



      @media(max-width:1024px){
        background-image: url(${hamMD});
      }
      
      @media(max-width:425px){
        background-image: ${hamSM};
      }
    }
`
