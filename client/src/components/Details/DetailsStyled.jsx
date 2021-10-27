import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';


const ListContainerStyledWide = styled.div`
  padding: 2rem;
  margin: auto;
  width: 80%;
`;

const ListStyled = styled.div`
  width: 100%;
`;

const TextStyled = styled.p`
  font-size: 1rem;
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};
  width: 100%;
  height: 2.6rem;
  padding: .5rem;
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
const CardStyled = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: .3rem;
  margin-bottom: 1rem;
`;

const MiddleColumnStyled = styled.div`
  display: grid;
  grid-column: 1/11;
  width: 100%;
  margin: auto;
`;

export {
  ListContainerStyledWide,
  ListStyled,
  TextStyled,
  ButtonStyled,
  TitleStyled,
  MiddleColumnStyled,
  CardStyled
};
