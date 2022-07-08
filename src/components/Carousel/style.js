import styled from "styled-components";

import dogSM from "../../assets/dog370.png";
import dogLG from "../../assets/dogDesk.png";
import dogMD from "../../assets/dogMD.png";

import catLG from "../../assets/catDesk.png";
import catMD from "../../assets/catMD.png";
import catSM from "../../assets/catSM.png";

import hamLG from "../../assets/hamLG.png";
import hamMD from "../../assets/hamMD.png";
import hamSM from "../../assets/hamSM.png";


export const SectionContainer = styled.section`
  width: 100%;
  @media (min-width: 768px){
    padding: 2em;
  }
  
  @media (min-width: 425px) {
    height: fit-content;
    padding: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--petroleumBlue);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  
  .paws {
    position: absolute;
    top: 49%;
    right: 0;

    z-index: 1;
    width: 180px;
    height: auto;

    @media(min-width:425px) {  
      top: 75%;
    }


  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;

  .imgContainer {
    width: 100%;
    height: 300px;  
    margin: 0 auto;

    @media(min-width:425px) {  
      border: 4px solid var(--orange);
      border-radius: 30px;
      width: 95%;
    }
    @media(max-width:425px){
      border-top: 4px solid var(--orange);
      border-bottom: 4px solid var(--orange);
    }
  }

  .image{
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 2em;
    
    opacity: 0.8;

    background: no-repeat center; 
    background-size: cover;
    
    @media(min-width:425px) {  
      border-radius: 30px;
    }
    
    h2 {
      opacity: 1;
      color: var(--white);
      width: 300px;
      
      font-size: 48px;
      line-height: 58px;
      letter-spacing: 0.06em;

      text-shadow: 2px 2px 4px #000000;

      @media(max-width: 768px){
        font-size: 36px;
      }
    }

  }
  
  .cat{
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: end;

    background-image:  url(${catLG});
    
    @media(max-width:1024px){
      background-image: url(${catMD});
    }
    @media(max-width:425px){
      background-image: ${catSM};

    }
    h2{
      text-align: right;
    }
  }

  .dog {
    background-image:  url(${dogLG});
    
    @media(max-width:1024px){
      background-image: url(${dogMD});
    }

    @media(max-width:425px){
      background-position: right;
      background-image: ${dogSM};
    }
    
    h2{
      line-height: 44px;
      color: var(--orange);

      @media(min-width:768px) {
        width: 100%;
        font-weight: 700;
        font-size: 50px;
        line-height: 60px;
      }
    }

    h3{
      font-family: 'Fredoka';
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;

      color: #D4FEFF;
      text-shadow: 2px 2px 4px #000000;

      @media(min-width:768px) {
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
      }
    }

    p {
      margin: 1em 0;
      
      font-weight: 700;
      font-size: 16px;

      color: var(--white);

      width: 160px;

      @media(min-width:768px) {
        width: 60%;
        font-size: 22px;
        line-height: 25px;
      }
    }
  }
  
    .hamster{
      background-image:  url(${hamLG});

      @media(max-width:1024px){
        background-image: url(${hamMD});
      }
      
      @media(max-width:425px){
        background-image: ${hamSM};
        background-position: right;
      }
      h2 {
        width: 180px;
        font-weight: 700;
        line-height: 58px;
        font-size: 48px;
        
        @media(min-width:768px) {
        width: 30%;
        }
      }
      p{
        margin-top: 1em;

        font-weight: 700;
        font-size: 26px;
        line-height: 36px;
        letter-spacing: 0.06em;

        color: var(--orange);
      }
    }
`
