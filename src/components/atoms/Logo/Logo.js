import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icons/logo.png';

const Wrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
`;

const LogoImage = styled.img`
   width: 50px;
   height: 50px;
`;

const Title = styled.h3`
   padding-left: 5px;
   max-width: 150px;
   color: ${({ theme, color }) => (color ? theme[color] : theme.white)};

   ${({ theme }) => theme.mq.bigTablet} {
      max-width: none;
   }
`;

const Logo = ({ color, className }) => {
   return (
      <Wrapper className={className}>
         <LogoImage src={logo} />
         <Title color={color}>Oskar Jankowiak</Title>
      </Wrapper>
   );
};

export default Logo;
