import styled from 'styled-components';

const ContentContainerStyled = styled.div`
  display: grid;
  grid-column: 4/10;
  grid-row: 2;
  //height: 3000px;

  grid-template-columns: repeat(3,1fr);
  grid-gap: 5px;

   //background-color: #c1eec1;
`;

export { ContentContainerStyled };
