import styled from 'styled-components';

const Input = styled.input`
   padding: 6px 10px;
   border-bottom: 3px solid ${({ theme }) => theme.white};
   color: ${({ theme }) => theme.white};
   border-radius: 5px;
   background: transparent;
   transition: all 0.2s ease-in-out;

   &:focus {
      border-color: ${({ theme }) => theme.lightGreen};
   }
   &::placeholder {
      color: ${({ theme }) => theme.white};
   }
`;

export default Input;
