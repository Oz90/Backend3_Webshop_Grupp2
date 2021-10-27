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
    max-width: 60vw;
    transition: all .2s ease-in-out;
    :hover {
        opacity: 0.7;
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
        opacity: 0.7;
    }
`;

const InputSecondary = styled(InputPrimary)`
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};

  :hover {
      background-color: ${Colors.primary};
      color: ${Colors.white};
      opacity: 1;
  }
`;

const ButtonSecondary = styled(ButtonPrimary)`
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};

  :hover {
      background-color: ${Colors.primary};
      color: ${Colors.white};
      opacity: 1;
  }
`;

const ButtonDanger = styled(ButtonPrimary)`
  border: 3px solid ${Colors.danger};
  color: ${Colors.danger};
  background-color: ${Colors.white};

  :hover {
      background-color: ${Colors.danger};
      color: ${Colors.white};
  }
`;

const ButtonSuccess = styled(ButtonPrimary)`
  color: ${Colors.white};
  background-color: ${Colors.success};

  :hover {
      background-color: ${Colors.success}, 0.7;
  }
`;

export {
    ButtonPrimary,
    InputPrimary,
    InputSecondary,
    ButtonSecondary, 
    ButtonDanger,
    ButtonSuccess
};
