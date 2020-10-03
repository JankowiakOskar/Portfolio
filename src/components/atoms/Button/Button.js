import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.lightGreen};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  outline: none;
  border: 2px solid ${({ theme }) => theme.darkBlue};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.white};
    `}
  ${({ thirdiary }) =>
    thirdiary &&
    css`
      background-color: ${({ theme }) => theme.darkBlue};
      color: ${({ theme }) => theme.white};
    `};
`;
