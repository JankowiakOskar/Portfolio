import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ArrowUp from 'assets/svg/ArrowUp.svg';
import { useDetectScroll } from 'hooks/useDetectScroll';

const StyledButton = styled(Button)`
  position: fixed;
  top: 85%;
  right: 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ scrollY }) => (scrollY >= 150 ? 'true' : 'hidden')};
  opacity: ${({ scrollY }) => (scrollY >= 150 ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;

const StyledArrowUp = styled(ArrowUp)`
  width: 50px;
  height: 50px;
`;

const ButtonArrowUp = () => {
  const [scrollY] = useDetectScroll();
  return (
    <StyledButton scrollY={scrollY} onClick={() => scrollTo('#wrapperLayout')}>
      <StyledArrowUp />
    </StyledButton>
  );
};

export default ButtonArrowUp;
