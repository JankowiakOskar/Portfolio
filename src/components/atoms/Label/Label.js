import styled from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.grey200};
  font-size: ${({ theme }) => theme.font.size.small};
  transition: all 0.2s ease-in-out;
`;

export default Label;
