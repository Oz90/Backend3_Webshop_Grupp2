import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const ButtonPrimary = styled.button`
    height: 2.6rem;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.2px;
    color: white;
    background-color: ${Colors.primary};
    padding: .5rem 1.5rem;
    min-width: 8rem;
    transition: all .2s ease-in-out;
    :hover {
        background-color: ${Colors.secondary};
    }
`;

const InputPrimary = styled.input`
    height: 2.6rem;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.2px;
    color: white;
    background-color: ${Colors.primary};
    padding: .5rem 1.5rem;
    min-width: 8rem;
    transition: all .2s ease-in-out;
    :hover {
        background-color: ${Colors.secondary};
    }
`;

const InputSecondary = styled(InputPrimary)`
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};

  :hover {
      background-color: ${Colors.primary};
      color: ${Colors.white};
  }
`;

export {
    ButtonPrimary,
    InputPrimary,
    InputSecondary
};
