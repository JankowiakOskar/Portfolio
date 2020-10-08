import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from 'components/atoms/button/button';

const Wrapper = styled.div`
   height: 120px;
   width: 100%;
   background-color: ${({ theme }) => theme.lightGreen};
   box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   overflow: hidden;
`;

const Content = styled.p`
   font-size: ${({ theme }) => theme.font.size.m};
   text-align: center;
`;

const StyledButton = styled(Button)`
   margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
   width: 100%;
   height: 100%;
   color: inherit;
   text-decoration: none;
`;

const Footer = ({ pathname }) => {
   return (
      <Wrapper>
         <Content>&copy; 2020 All rights resereved. Website made by Oskar Jankowiak.</Content>
         <StyledButton thirdiary>{pathname === '/' ? <StyledLink to="/contact">Contact</StyledLink> : <StyledLink to="/">Home</StyledLink>}</StyledButton>
      </Wrapper>
   );
};

export default Footer;
