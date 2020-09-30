import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="Oskar Jankowiak | Portfolio" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MainTemplate;
