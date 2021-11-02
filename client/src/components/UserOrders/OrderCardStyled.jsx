import Colors from '../../styleAssets/Colors'
import styled from 'styled-components';


export const OrderCardStyled = styled.div`
    font-size: 1rem;
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};
  width: 100%;
  padding: .5rem;
  margin-bottom: 1rem;
  :hover {
      background-color: ${Colors.primary}, 0.7;
  }
`;
