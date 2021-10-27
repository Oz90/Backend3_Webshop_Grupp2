import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const StyledLink = styled.a`
  background-color: inherit;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: ${Colors.primary};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  
  `
const StyledUl = styled.ul`
  display: flex;
  align-items:center;
  flex-flow: column;
  margin-top: 2rem;

  `

const StyledLi = styled.li`
  margin-top: 2rem;
  list-style: none;
  transition: all .2s ease-in-out;
  color: ${Colors.darkGrey};
      &:hover {
          transform: scale(1.1);
          font-weight: 600;
      }
  `

const SearchContainer = styled.div`
  border: 3px solid ${Colors.darkGrey};
  display: flex;
  align-items: center;
  margin: 2rem 1rem 0 1rem;
  padding: .5rem;
  svg {
    color: ${Colors.darkGrey};
    margin-right: .3rem;
  }
`
const Input = styled.input`
  border: none;
  background: none;
  color: ${Colors.lightGrey};
  font-size: 1rem;
  letter-spacing: 1.2px;
  :focus {
      outline: none;
      background: none;
      height: 100%;
  }
  ::placeholder {
    color: ${Colors.lightGrey};
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
