import styled from "styled-components";

export const ContainerVitrine = styled.div`
  ul {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }

  @media (min-width: 1000px) {
    width: 100%;
    ul {
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
