import styled from "styled-components";


export const ContainerVitrine = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5rem;
margin: 2rem 0;
  ul {
    width: 100%;

    display: flex;
    
    flex-direction: row;


    gap: 20px;

    overflow-x: auto;
    

  }

  .fraseVitrine{
    
    color: var(--black);
    font-family: 'Fredoka';
    font-size: 48px;
    text-align: center;
    font-weight: 500;
  }

  @media (max-width: 999px) {
    ul {
      margin-left: 3vw;
    }
  }

  @media (min-width: 1000px) {
    width: 100%;
    max-height: 700px;
    ul {
      justify-content: center;

      margin: auto;

      flex-wrap: wrap;
    }
  }
`;


export const ContainerOng = styled.div`
  width: 90%;
`
export const AbaSolicitacoes = styled.div`
  box-sizing: border-box;
  padding: 15px 10px 20px 10px;

  width: 120px;
  height: 19px;
  color: #FFFFFF;
  background-color: #3B8788;

  border-radius: 20px 20px 0 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  font-size: 16px;
  font-family: 'Freedoka';
  font-weight: 400;


`
export const DivSolicitacoes = styled.div`
  width: 346px;
  height: 276px;
  background-color: var(--petroleumBlue);

  border-radius: 0 15px 15px 15px;
`

export const ButtonsLeftRight = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 3vw;
  button {
    background-color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

