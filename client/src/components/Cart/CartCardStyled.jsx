import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const CartCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vw;
`;
const CartCardContainerBorder = styled.div`
  display: flex;
  width: 100%;
  height: 20vw;
  border: 3px solid ${Colors.primary};
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

const CartCardImage = styled.img`
  height:calc(100%-1rem);
  margin: 0.5rem;
`;

const CartCardInfo = styled.div`
  padding: 2rem;
`;


const AmountForm = styled.form`
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: .5rem;
  }
`;


export { 
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
  AmountForm,
  CartCardContainerBorder,
  FlexRow
};
