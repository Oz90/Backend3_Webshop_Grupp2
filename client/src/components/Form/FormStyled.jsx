import styled from 'styled-components';

const FormContainerStyled = styled.div`
  padding: 2rem;
  float: left;
  width: 30vw;
`;

const FormStyled = styled.form`
  width: 100%;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid black;
  padding-left: 1rem;
  margin-bottom: 1rem;
`;

const SubmitStyled = styled.input`
  height: 2rem;
  border: 1px solid black;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
`;

const ErrorMessageStyled = styled.p`
  color: red;
`;

export {
  FormContainerStyled,
  FormStyled,
  InputStyled,
  SubmitStyled,
  ErrorMessageStyled,
};
