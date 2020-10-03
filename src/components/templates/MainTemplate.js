import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Helmet from 'react-helmet';
import { useDetectScroll } from 'hooks/useDetectScroll';
import ButtonArrowUp from 'components/atoms/ButtonArrowUp/ButtonArrowUp';

gsap.registerPlugin(ScrollTrigger);

const WrapperLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTemplate = ({ children }) => {
  const [scrollY] = useDetectScroll();

  return (
    <WrapperLayout id="wrapperLayout">
      <Helmet lang="pl" title="Oskar Jankowiak | Portfolio" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
        <ButtonArrowUp scrollY={scrollY} />
      </ThemeProvider>
    </WrapperLayout>
  );
};

export default MainTemplate;
