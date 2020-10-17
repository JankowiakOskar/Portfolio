import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { SectionContext } from 'contexts/SectionContextProvider';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useMatchMedia from 'hooks/useMatchMedia';

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.lightGreen};
   clip-path: ellipse(120px 120px at 100% 0%);
   z-index: ${({ theme }) => theme.zIndex.level10};
   overflow: hidden;

   ${({ theme }) => theme.mq.bigTablet} {
      clip-path: none;
      height: 70px;
      flex-direction: row;
      background-color: ${({ theme }) => theme.darkBlue};
   }
`;

const LogoWrapper = styled.div`
   padding: 20px 0 20px 5px;
   flex-basis: 15%;
   cursor: pointer;
   opacity: 0;

   ${({ theme }) => theme.mq.bigTablet} {
      && {
         padding: 10px 20px;
         flex-basis: 40%;

         h3 {
            max-width: 100%;
         }
      }
   }
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
   opacity: 0;

   ${({ theme }) => theme.mq.bigTablet} {
      padding-left: 0;
      flex-grow: 1;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }
`;

const NavElement = styled.li`
   position: relative;
   padding: 16px 0;
   font-size: ${({ theme }) => theme.font.size.l};
   color: ${({ theme, isActive }) => (isActive ? theme.white : theme.darkBlue)};
   font-weight: 600;
   transition: all 0.15s ease-in-out;
   cursor: pointer;

   ${({ theme }) => theme.mq.bigTablet} {
      margin: 0 20px;
      font-size: ${({ theme }) => theme.font.size.small};
      color: ${({ theme, isActive }) => (isActive ? theme.white : theme.lightGreen)};
   }
   &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      top: 100%;
      left: 0;
      border-bottom: 4px solid ${({ theme, isActive }) => isActive && theme.white};
      border-radius: 25px;
      transform: ${({ isActive }) => (isActive ? 'scale(1, 1)' : 'scale(0.2, 1)')};
      transform-origin: 0% 50%;
      transition: all 0.2s ease-in-out;

      ${({ theme }) => theme.mq.bigTablet} {
         top: 85%;
      }
   }
`;

const HamburgerWrapper = styled.div`
   position: fixed;
   top: 25px;
   right: 25px;

   ${({ theme }) => theme.mq.bigTablet} {
      display: none;
   }
`;

const StyledLink = styled(Link)`
   text-decoration: none;
`;

const Navigation = ({ pathname }) => {
   const [isMenuOpen, setOpenMenu] = useState(false);
   const { menuSectionList, activeSectionId } = useContext(SectionContext);

   const isDesktop = useMatchMedia('(min-width: 1020px)');
   const tl = useRef();
   const menuRef = useRef(null);
   const menuListRef = useRef(null);
   const logoRef = useRef(null);

   const handleScroll = (idSelector, desktop) => {
      if (!desktop) {
         setOpenMenu(!isMenuOpen);
         scrollTo(`${idSelector}`);
      } else {
         scrollTo(`${idSelector}`);
      }
   };

   const handleClose = (desktop) => {
      if (desktop) return;
      setOpenMenu(!isMenuOpen);
   };

   useEffect(() => {
      if (menuRef && menuListRef && logoRef) {
         const menu = menuRef.current;
         const logo = logoRef.current;
         const menuList = menuListRef.current;

         const killTimeline = (timeline) => {
            const targets = timeline.getChildren();
            timeline.kill();
            targets.forEach((target) => {
               if (target.targets().length) {
                  gsap.set(target.targets(), { clearProps: 'all' });
               }
            });
         };

         if (!isDesktop) {
            const mobileAnimation = () => {
               tl.current = gsap.timeline({ paused: true });
               gsap.set([logo, menuList], { autoAlpha: 0 });
               tl.current
                  .to(menu, { clipPath: 'ellipse(1000px 90% at 100% 0%)', duration: 0.6, delay: 0.2 })
                  .fromTo(logo, { y: '+=30' }, { y: '0', autoAlpha: 1, duration: 0.2 }, '-=0.2')
                  .fromTo(menuList, { x: '-=30' }, { x: '0', autoAlpha: 1, duration: 0.3 }, '-=0.2')
                  .reverse();
            };

            if (tl.current) {
               killTimeline(tl.current);
               setOpenMenu(false);
               mobileAnimation();
            }
            mobileAnimation();
         } else {
            const desktopAnimation = () => {
               const logoIcon = logo.querySelector('img');
               tl.current = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });
               gsap.set([logo, menuList, ...menuList.children], { autoAlpha: 0 });

               tl.current
                  .to(menuList, { autoAlpha: 1, duration: 0.2 })
                  .fromTo([...menuList.children], { y: '-=100' }, { y: '0', autoAlpha: 1, stagger: 0.3 }, '=-0.2')
                  .fromTo(logo, { y: '+=50', autoAlpha: 0 }, { y: '0', autoAlpha: 1, duration: 1 })
                  .to(logoIcon, { y: '+5', repeat: '-1', yoyo: 'true' });

               ScrollTrigger.matchMedia({
                  // eslint-disable-next-line func-names
                  '(min-width: 1020px)': function () {
                     const timeline = gsap.timeline({
                        scrollTrigger: {
                           trigger: menu,
                           start: 'bottom top',
                           end: 'top top',
                           toggleActions: 'play none none reverse',
                        },
                     });
                     timeline.to(menu, { boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.75)', duration: 0.2 });
                  },
               });
            };

            if (tl.current) {
               killTimeline(tl.current);
               desktopAnimation();
            }
            desktopAnimation();
         }
      }
   }, [isDesktop]);

   useEffect(() => {
      if (!isDesktop) {
         const toggleMobileAnimation = () => (isMenuOpen ? tl.current.play() : tl.current.reverse());
         toggleMobileAnimation();
      }
   }, [isMenuOpen, isDesktop]);

   return (
      <Wrapper ref={menuRef}>
         {pathname !== '/' ? (
            <StyledLink to="/">
               <LogoWrapper ref={logoRef} onClick={() => handleScroll('#home', isDesktop)}>
                  <Logo color={isDesktop ? 'white' : 'darkBlue'} />
               </LogoWrapper>
            </StyledLink>
         ) : (
            <LogoWrapper ref={logoRef} onClick={() => handleScroll('#home', isDesktop)}>
               <Logo color={isDesktop ? 'white' : 'darkBlue'} />
            </LogoWrapper>
         )}
         <Nav>
            <List ref={menuListRef}>
               {pathname !== '/'
                  ? menuSectionList
                       .filter((section) => section.id === 'home' || section.id === 'contact')
                       .map((section) => {
                          return section.id === 'home' ? (
                             <StyledLink to="/" key={section.id}>
                                <NavElement onClick={() => handleClose(isDesktop)}>{section.title}</NavElement>
                             </StyledLink>
                          ) : (
                             <NavElement key={section.id} isActive={section.id === activeSectionId}>
                                {section.title}
                             </NavElement>
                          );
                       })
                  : menuSectionList.map((section) => {
                       return section.id === 'contact' ? (
                          <StyledLink to="/contact" key={section.id}>
                             <NavElement onClick={() => handleClose(isDesktop)}>{section.title}</NavElement>
                          </StyledLink>
                       ) : (
                          <NavElement isActive={section.id === activeSectionId} key={section.id} onClick={() => handleScroll(`${`#${section.id}`}`, isDesktop)}>
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
