import styled from 'styled-components';

const CartCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vw;
`;

const CartCardImage = styled.img`
  height:calc(100%-1rem);
  margin: 0.5rem;
`;

const CartCardInfo = styled.div`
  padding: 2rem;
`;

export { CartCardContainer, CartCardImage, CartCardInfo };
