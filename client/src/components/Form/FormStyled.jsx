import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const FormContainerStyled = styled.div`
  padding: 2rem;
  float: left;
  width: 70vw;
`;
const FormContainerStyledWide = styled.div`
  width: 80%;
`;

const FormStyled = styled.form`
  width: 100%;
`;

const InputStyled = styled.input`
  font-size: 1rem;
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};
  width: 100%;
  height: 2.6rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  :focus {
      outline:none;
  }
  ::placeholder {
    color: ${Colors.primary};
  }
`;

const SubmitStyled = styled.input`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
`;

const ButtonStyled = styled.button`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
`;

const LabelStyled = styled.label`
  font-size: .9rem;
  color: #939393;
`;

export {
  FormContainerStyled,
  FormContainerStyledWide,
  FormStyled,
  InputStyled,
  SubmitStyled,
  ButtonStyled,
  LabelStyled
};
