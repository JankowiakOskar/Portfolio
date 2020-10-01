import React from 'react';
import styled from 'styled-components';
import Home from 'components/organisms/Home/Home';
import AboutMe from 'components/organisms/AboutMe/AboutMe';
import Technologies from 'components/organisms/Technologies/Technologies';

const Wrapper = styled.div`
  overflow: hidden;
`;

const IndexPage = () => (
  <Wrapper>
    <Home />
    <AboutMe />
    <Technologies />
  </Wrapper>
);

export default IndexPage;
