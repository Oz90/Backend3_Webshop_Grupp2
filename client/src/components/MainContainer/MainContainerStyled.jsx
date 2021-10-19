import styled from 'styled-components';

const MainContainerStyled = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 6rem 1fr;
`;

export { MainContainerStyled };
