import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const StyledLink = styled.a`
  background-color: inherit;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: ${Colors.primary};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  
  `
const StyledUl = styled.ul`
  display: flex;
  align-items:center;
  flex-flow: column;

  `

const StyledLi = styled.li`
  margin-top: 2rem;
  list-style: none;
  transition: all .2s ease-in-out;
  color: ${Colors.primary};
      &:hover {
          transform: scale(1.1);
          font-weight: 600;
      }
  `

const SearchContainer = styled.div`
  border: 3px solid ${Colors.primary};
  display: flex;
  align-items: center;
  margin: 2rem 1rem 0 1rem;
  padding: .5rem;
  svg {
    color: ${Colors.primary};
    margin-right: .3rem;
  }
`
const Input = styled.input`
  border: none;
  background: none;
  color: ${Colors.primary};
  font-size: 1rem;
  letter-spacing: 1.2px;
  :focus {
      outline: none;
      background: none;
      height: 100%;
  }
  ::placeholder {
    color: ${Colors.primary};
  }
`

const SideBarStyled = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-row: 2;
`;

export {  
  SideBarStyled, 
  Input, 
  SearchContainer,
  StyledLink,
  StyledUl,
  StyledLi
 };
