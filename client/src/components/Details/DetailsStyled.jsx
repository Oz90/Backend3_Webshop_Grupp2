import styled from 'styled-components';

const ListContainerStyled = styled.div`
  padding: 2rem;
  float: left;
  width: 30vw;
`;

const ListStyled = styled.div`
  width: 100%;
`;

const TextStyled = styled.p`
  width: 100%;
  border: 1px solid black;
  padding: .3rem;
  margin-bottom: 1rem;
`;

const ButtonStyled = styled.button`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
`;

const TitleStyled = styled.p`
  font-size: .9rem;
  color: #939393;
`;

const MiddleColumnStyled = styled.div`
  grid-column: 1/4;
`;

export {
  ListContainerStyled,
  ListStyled,
  TextStyled,
  ButtonStyled,
  TitleStyled,
  MiddleColumnStyled
};
