import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.darkBlue};
`;

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  );
};

export default Home;
