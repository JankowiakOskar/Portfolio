import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import CodingScene from 'components/molecules/CodingScene/CodingScene';
import { Button } from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Title = styled.h1`
  margin: 100px 0 0 0;
  color: ${({ theme }) => theme.lightGreen};
  font-weight: 800;
  text-shadow: 0 0 0 5px ${({ theme }) => theme.darkBlue};
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
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
      .fromTo(logoElement, { autoAlpha: 0, y: '-=30' }, { autoAlpha: 1, y: 0, duration: 1 }, '-=1')
      .to(logoIcon, { y: '3', yoyo: true, repeat: -1 })
      .fromTo([...buttons], { autoAlpha: 0 }, { stagger: 0.2, autoAlpha: 1, duration: 0.7 });
  }, []);

  return (
    <Wrapper data-section data-title="Home" id="home">
      <LogoWrapper ref={logoWrapperRef}>
        <Logo />
      </LogoWrapper>
      <Title ref={titleRef}>Logistic & Web development</Title>
      <CodingScene />
      <ButtonsWrapper ref={buttonsWrapperRef}>
        <StyledButton onClick={() => scrollTo('#projects')}>Projects</StyledButton>
        <Link to="/contact">
          <Button secondary>Contact</Button>
        </Link>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Home;
