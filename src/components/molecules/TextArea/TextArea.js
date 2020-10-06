import React from 'react';
import styled, { css } from 'styled-components';
import { useField } from 'formik';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Label from 'components/atoms/Label/Label';

const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  transform: translate(10px, -90px);
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 5px;
  border: 3px solid ${({ theme, error }) => (error ? theme.red : theme.white)};
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.small};
  z-index: ${({ theme }) => theme.zIndex.level7};
  resize: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.white};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
  }

  &:focus ~ label {
    transform: translate(0px, -130px);
  }

  &:focus ~ ${ErrorMessage} {
    transform: translate(0px, -130px);
  }

  ${({ value }) =>
    value.length &&
    css`
      & ~ label {
        transform: translate(0, -130px);
      }

      & ~ ${ErrorMessage} {
        transform: translate(0, -130px);
      }
    `}
`;

const StyledLabel = styled(Label)`
  z-index: ${({ theme }) => theme.zIndex.level6};
  transform: translate(10px, -90px);
`;

const TextAreaElement = (props) => {
  const [field, meta] = useField(props);
  const { name, label } = props;
  const isError = meta.error && meta.touched;
  const errorMsg = meta.error;

  return (
    <StyledInputElement>
      <TextArea {...props} {...field} spellCheck="false" error={isError} />
      {isError ? <StyledErrorMessage>{errorMsg}</StyledErrorMessage> : <StyledLabel name={name}>{label}</StyledLabel>}
    </StyledInputElement>
  );
};

export default TextAreaElement;
