import React from 'react';
import styled from 'styled-components';
import Home from 'components/organisms/Home/Home';
import AboutMe from 'components/organisms/AboutMe/AboutMe';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';

const Wrapper = styled.div`
  overflow: hidden;
`;

const IndexPage = () => (
  <Wrapper id="indexPage">
    <Home />
    <AboutMe />
    <Technologies />
    <Projects />
  </Wrapper>
);

export default IndexPage;
