import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { SectionContext } from 'contexts/SectionContextProvider';
import styled from 'styled-components';
import gsap from 'gsap';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Wrapper = styled.div`
   position: relative;
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   color: ${({ theme }) => theme.darkBlue};
   background-color: ${({ theme }) => theme.lightGreen};
   clip-path: ellipse(120px 120px at 100% 0%);
   z-index: ${({ theme }) => theme.zIndex.level10};
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
  /* visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'true' : 'hidden')};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)}; */

`;

const List = styled.ul`
   padding-left: 60px;
`;

const NavElement = styled.li`
   position: relative;
   padding: 16px 0;
   font-size: ${({ theme }) => theme.font.size.l};
   color: ${({ theme }) => theme.darkBlue};
   font-weight: 600;
   &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      top: 100%;
      left: 0;
      border-bottom: 4px solid ${({ theme, isActive }) => (isActive ? theme.white : theme.darkBlue)};
      border-radius: 25px;
      transform: ${({ isActive }) => (isActive ? 'scale(1, 1)' : 'scale(0.2, 1)')};
      transform-origin: 0% 50%;
      transition: all 0.2s ease-in-out;
   }
`;

const HamburgerWrapper = styled.div`
   position: fixed;
   top: 25px;
   right: 25px;
`;

const StyledLink = styled(Link)`
   color: ${({ theme }) => theme.darkBlue};
   text-decoration: none;
`;

const Navigation = ({ pathname }) => {
   const [isMenuOpen, setOpenMenu] = useState(false);
   const { menuSectionList, activeSectionId } = useContext(SectionContext);

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
      const logo = logoRef.current;
      const menuList = menuListRef.current;
      tl.current = gsap.timeline({ pause: true });
      gsap.set([logo, menuList], { autoAlpha: 0 });
      tl.current
         .to(menu, { clipPath: 'ellipse(1000px 90% at 100% 0%)', duration: 0.6, delay: 0.2 })
         .fromTo(logo, { y: '+=30' }, { y: '0', autoAlpha: 1, duration: 0.2 }, '-=0.2')
         .fromTo(menuList, { x: '-=30' }, { x: '0', autoAlpha: 1, duration: 0.3 }, '-=0.2');
   }, []);

   useEffect(() => {
      const toggleAnimation = () => (isMenuOpen ? tl.current.play() : tl.current.reverse());
      toggleAnimation();
   }, [isMenuOpen]);

   return (
      <Wrapper isOpen={isMenuOpen} ref={menuRef}>
         <LogoWrapper ref={logoRef}>
            <Logo color="darkBlue" />
         </LogoWrapper>
         <Nav>
            <List ref={menuListRef}>
               {pathname === '/contact'
                  ? menuSectionList
                       .filter((section) => section.id === 'home' || section.id === 'contact')
                       .map((section) => {
                          return section.id === 'home' ? (
                             <NavElement key={section.id} onClick={() => setOpenMenu(!isMenuOpen)}>
                                <StyledLink to="/">{section.title}</StyledLink>
                             </NavElement>
                          ) : (
                             <NavElement key={section.id} isActive={section.id === activeSectionId}>
                                {section.title}
                             </NavElement>
                          );
                       })
                  : menuSectionList.map((section) => {
                       return section.id === 'contact' ? (
                          <NavElement key={section.id} onClick={() => setOpenMenu(!isMenuOpen)}>
                             <StyledLink to="/contact">{section.title}</StyledLink>
                          </NavElement>
                       ) : (
                          <NavElement isActive={section.id === activeSectionId} key={section.id} onClick={() => handleScroll(`${`#${section.id}`}`)}>
                             {section.title}
                          </NavElement>
                       );
                    })}
            </List>
         </Nav>
         <HamburgerWrapper>
            <Hamburger isMenuOpen={isMenuOpen} setOpenMenu={setOpenMenu} />
         </HamburgerWrapper>
      </Wrapper>
   );
};

export default Navigation;
