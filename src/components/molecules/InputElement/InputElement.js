import React from 'react';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Label from 'components/atoms/Label/Label';
import { useField } from 'formik';

const StyledWrapper = styled.div`
   max-height: 80px;
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const StyledErrorMessage = styled(ErrorMessage)`
   transform: translate(10px, -40px);
`;

const StyledInput = styled(Input)`
   z-index: ${({ theme }) => theme.zIndex.level7};
   border-color: ${({ error, theme }) => error && theme.red};

   &:focus {
      border-color: ${({ error, theme }) => error && theme.red};
   }

   &:focus ~ label {
      transform: translate(0px, -70px);
   }

   &:focus ~ ${ErrorMessage} {
      transform: translate(0px, -70px);
   }

   ${({ value }) =>
      value.length &&
      css`
         & ~ label {
            transform: translate(0, -70px);
         }
         & ~ ${ErrorMessage} {
            transform: translate(0px, -70px);
         }
      `}
`;

const StyledLabel = styled(Label)`
   z-index: ${({ theme }) => theme.zIndex.level6};
   transform: translate(10px, -40px);
`;

const InputElement = (props) => {
   const [field, meta] = useField(props);
   const { name, label } = props;
   const isError = meta.error && meta.touched;
   const errorMsg = meta.error;
   return (
      <StyledWrapper>
         <StyledInput {...props} {...field} error={isError} />
         {isError ? <StyledErrorMessage>{errorMsg}</StyledErrorMessage> : <StyledLabel name={name}>{label}</StyledLabel>}
      </StyledWrapper>
   );
};

export default InputElement;
