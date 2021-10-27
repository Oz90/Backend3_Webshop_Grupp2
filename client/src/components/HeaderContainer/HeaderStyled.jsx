import styled from 'styled-components';
import Colors from "../../styleAssets/Colors";

const HeaderStyled = styled.div`
  display: grid;
  grid-column: 1/11;
  grid-row: 1;
  background: ${Colors.primary};
  background: radial-gradient(circle, ${Colors.primary} 0%, rgba(173,163,236,1) 100%);
`;

export { HeaderStyled };
