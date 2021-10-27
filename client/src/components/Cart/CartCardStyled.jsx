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

const AmountInput = styled.input`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
`;

const AmountSubmit = styled.input`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
`;

export { 
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
  AmountForm,
  AmountInput,
  AmountSubmit,
  CartCardContainerBorder
};
