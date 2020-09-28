import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icons/logo.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const LogoImage = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  padding-left: 5px;
  color: ${({ theme }) => theme.darkBlue};
  font-size: ${({ theme }) => theme.font.size.l};
`;

const Logo = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImage src={logo} />
      </LogoWrapper>
      <Title>Oskar Jankowiak</Title>
    </Wrapper>
  );
};

export default Logo;
