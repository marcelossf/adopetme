import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 1300px;
  gap: 2rem 0;

  @media (min-width: 1024px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

export const SloganContainer = styled.div`
  background: #83b200;
  height: 192px;
  width: 408px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
  transform: matrix(0.96, 0.22, -0.27, 0.97, 0, 0);
`;
