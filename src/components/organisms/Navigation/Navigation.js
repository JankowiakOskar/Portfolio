import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.darkBlue};
  background-color: ${({ theme }) => theme.lightGreen};
  z-index: ${({ theme }) => theme.zIndex.level10};
  clip-path: ellipse(120px 120px at 100% 0%);
`;

const LogoWrapper = styled.div`
  padding: 20px 0 20px 5px;
  flex-basis: 20%;
`;

const Nav = styled.nav`
  flex-basis: 80%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const List = styled.ul`
  padding-left: 60px;
`;

const NavElement = styled.li`
  padding: 20px 0;
  font-size: ${({ theme }) => theme.font.size.m};
  border-bottom: 3px solid ${({ theme }) => theme.white};
  border-radius: 5px;
`;

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
`;

const Navigation = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);

  const tl = useRef();
  const menuRef = useRef(null);
  const menuListRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = (idSelector) => {
    setOpenMenu(!isMenuOpen);
    scrollTo(`${idSelector}`);
  };

  useEffect(() => {
    const menu = menuRef.current;
    const menuList = menuListRef.current.children;
    const logo = logoRef.current;
    tl.current = gsap.timeline({ pause: true });

    gsap.set([...menuList, logo], { autoAlpha: 0 });

    tl.current
      .to(menu, { clipPath: 'ellipse(1000px 90% at 100% 0%)', duration: 0.4, delay: 0.2 })
      .fromTo(logo, { y: '+=30' }, { y: '0', autoAlpha: 1, duration: 0.2 }, '-=0.2')
      .fromTo([...menuList], { x: '-=50' }, { x: '0', autoAlpha: 1, stagger: 0.11 }, '-=0.2');
  }, []);

  useEffect(() => {
    const toggleAnimation = () => (isMenuOpen ? tl.current.play() : tl.current.reverse());
    toggleAnimation();
  }, [isMenuOpen]);

  return (
    <Wrapper ref={menuRef}>
      <LogoWrapper ref={logoRef}>
        <Logo color="darkBlue" />
      </LogoWrapper>
      <Nav>
        <List ref={menuListRef}>
          <NavElement onClick={() => handleScroll('#home')}>Home</NavElement>
          <NavElement onClick={() => handleScroll('#aboutMe')}>About me</NavElement>
          <NavElement onClick={() => handleScroll('#technology')}>Technologies</NavElement>
          <NavElement>Projects</NavElement>
          <NavElement>Contact</NavElement>
        </List>
      </Nav>
      <HamburgerWrapper>
        <Hamburger isMenuOpen={isMenuOpen} setOpenMenu={setOpenMenu} />
      </HamburgerWrapper>
    </Wrapper>
  );
};

export default Navigation;
