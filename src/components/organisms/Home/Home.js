import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import CodingScene from 'components/molecules/CodingScene/CodingScene';
import { Button } from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';

const Wrapper = styled.div`
   min-height: 100vh;
   width: 100%;
   background-color: ${({ theme }) => theme.darkBlue};
`;

const InnerWrapper = styled.div`
   position: relative;
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   margin: 0 auto;
   max-width: 1660px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   ${({ theme }) => theme.mq.tablet} {
      padding: 100px;
      display: grid;
      min-height: 100vh;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 2fr 1fr;
      grid-template-areas:
         'content hero'
         'buttons hero';
   }

   ${({ theme }) => theme.mq.desktop} {
      padding: 50px;
   }
`;

const LogoWrapper = styled.div`
   position: absolute;
   top: 10px;
   left: 10px;
   opacity: 0;

   ${({ theme }) => theme.mq.tablet} {
      margin: 0 0 0 7px;
   }
`;

const TitleWrapper = styled.div`
   ${({ theme }) => theme.mq.tablet} {
      grid-area: content;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
   }
`;

const Title = styled.h1`
   margin: 100px 0 0 0;
   color: ${({ theme }) => theme.lightGreen};
   font-weight: 800;
   text-shadow: 0 0 0 5px ${({ theme }) => theme.darkBlue};
   text-align: center;
   opacity: 0;

   ${({ theme }) => theme.mq.tablet} {
      margin: 0;
      font-size: ${({ theme }) => theme.font.size.huge};
   }
`;

const CodingSceneWrapper = styled.div`
   ${({ theme }) => theme.mq.tablet} {
      grid-area: hero;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
   }
`;

const ButtonsWrapper = styled.div`
   margin: 5px 0 0 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   opacity: 0;

   ${({ theme }) => theme.mq.tablet} {
      grid-area: buttons;
      height: 100%;
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
   }
`;

const StyledButton = styled(Button)`
   margin-bottom: 10px;

   ${({ theme }) => theme.mq.tablet} {
      margin: 0 30px 0 0px;
   }
`;

const Home = () => {
   const titleRef = useRef(null);
   const logoWrapperRef = useRef(null);
   const buttonsWrapperRef = useRef(null);

   useEffect(() => {
      const title = titleRef.current;
      const logoElement = logoWrapperRef.current.children;
      const [elements] = logoElement;
      const logoIcon = elements.querySelector('img');
      const buttons = buttonsWrapperRef.current.children;
      const tl = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });

      tl.fromTo(title, { y: '+=50', scaleY: '0.9', autoAlpha: 0 }, { y: '0', autoAlpha: 1, scaleY: '1', stagger: 0.1, duration: 2 })
         .to(logoWrapperRef.current, { autoAlpha: 1 })
         .fromTo(logoElement, { autoAlpha: 0, y: '-=50' }, { autoAlpha: 1, y: 0, duration: 1 }, '-=1')
         .to(logoIcon, { y: '3', yoyo: true, repeat: -1 })
         .to(buttonsWrapperRef.current, { autoAlpha: 1 })
         .fromTo([...buttons], { autoAlpha: 0 }, { stagger: 0.2, autoAlpha: 1, duration: 0.7 });
   }, []);

   return (
      <Wrapper data-section data-title="Home" id="home">
         <InnerWrapper>
            <LogoWrapper ref={logoWrapperRef}>
               <Logo />
            </LogoWrapper>
            <TitleWrapper>
               <Title ref={titleRef}>Logistic & Web development</Title>
            </TitleWrapper>
            <CodingSceneWrapper>
               <CodingScene />
            </CodingSceneWrapper>
            <ButtonsWrapper ref={buttonsWrapperRef}>
               <StyledButton onClick={() => scrollTo('#projects')}>Projects</StyledButton>
               <Link to="/contact">
                  <Button secondary>Contact</Button>
               </Link>
            </ButtonsWrapper>
         </InnerWrapper>
      </Wrapper>
   );
};

export default Home;
