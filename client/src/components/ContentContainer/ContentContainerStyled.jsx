import styled from 'styled-components';

const ContentContainerStyled = styled.div`
  display: grid;
  grid-column: 3/11;
  grid-row: 2;
  //height: 3000px;
  overflow: scroll;
  padding: 2rem 4rem 0 0;

  grid-template-columns: repeat(3,1fr);
  grid-gap: 5px;

   //background-color: #c1eec1;
`;

export { ContentContainerStyled };
