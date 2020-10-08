import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SectionContextProvider from 'contexts/SectionContextProvider';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Helmet from 'react-helmet';
import Navigation from 'components/organisms/Navigation/Navigation';
import ButtonArrowUp from 'components/atoms/ButtonArrowUp/ButtonArrowUp';
import Footer from 'components/organisms/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const WrapperLayout = styled.div`
   width: 100%;
   height: 100%;
`;

const MainTemplate = ({ children, location: { pathname } }) => {
   return (
      <WrapperLayout id="wrapperLayout">
         <Helmet lang="en" title="Oskar Jankowiak | Portfolio" />
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <SectionContextProvider pathname={pathname}>
               {children}
               <Navigation pathname={pathname} />
               <ButtonArrowUp />
               <Footer pathname={pathname} />
            </SectionContextProvider>
         </ThemeProvider>
      </WrapperLayout>
   );
};

export default MainTemplate;
