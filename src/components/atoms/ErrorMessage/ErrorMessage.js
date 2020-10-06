import styled from 'styled-components';

const ErrorMessage = styled.p`
  padding: 0;
  margin: 0;
  height: 22px;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.red};
  transition: all 0.2s ease-in-out;
`;

export default ErrorMessage;
