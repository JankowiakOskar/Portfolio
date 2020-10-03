import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

const HamburgerButton = styled.button`
  padding: 10px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

const HamburgerBox = styled.div`
  position: relative;
  width: 36px;
  height: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Line = styled.span`
  height: 4px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.darkBlue};
  position: absolute;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

  ${({ middle }) =>
    middle &&
    css`
      transform: translateY(11px);
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      transform: translateY(22px);
    `}
`;

const Hamburger = ({ isMenuOpen, setOpenMenu }) => {
  const tl = useRef();
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const topLine = hamburger.querySelector('#topLine');
    const middleLine = hamburger.querySelector('#middleLine');
    const bottomLine = hamburger.querySelector('#bottomLine');

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(hamburger, { rotate: '360deg', duration: 0.6 })
      .to(middleLine, { autoAlpha: 0 }, '-0.25')
      .to(topLine, { y: '+=11', rotate: '135deg', duration: 0.2 }, '-=0.3')
      .to(bottomLine, { y: '-=11', rotate: '-135deg', duration: 0.2 }, '-=0.3');
  }, []);

  useEffect(() => {
    const handleAnimation = () => (isMenuOpen ? tl.current.play() : tl.current.reverse());
    handleAnimation();
  }, [isMenuOpen]);

  return (
    <HamburgerButton onClick={() => setOpenMenu(!isMenuOpen)}>
      <HamburgerBox ref={hamburgerRef}>
        <Line id="topLine" top />
        <Line id="middleLine" middle />
        <Line id="bottomLine" bottom />
      </HamburgerBox>
    </HamburgerButton>
  );
};

export default Hamburger;
