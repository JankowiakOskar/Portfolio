import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

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
  z-index: ${({ theme }) => theme.zIndex.level8};
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

const Navigation = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Nav>
        <List>
          <NavElement>Home</NavElement>
          <NavElement>O mnie</NavElement>
          <NavElement>Technologie</NavElement>
          <NavElement>Projekty</NavElement>
          <NavElement>Kontakt</NavElement>
        </List>
      </Nav>
    </Wrapper>
  );
};

export default Navigation;
