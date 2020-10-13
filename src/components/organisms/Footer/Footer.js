import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
   height: 140px;
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
   padding: 10px;
   height: 70%;
   font-size: ${({ theme }) => theme.font.size.m};
   text-align: center;
`;

const StyledLink = styled(Link)`
   height: 30%;
   margin: 0 auto 35px;
   color: inherit;
   text-decoration: none;
`;

const Footer = ({ pathname }) => {
   return (
      <Wrapper>
         <Content>&copy; 2020 All rights resereved. Website made by Oskar Jankowiak.</Content>
         <StyledLink to={pathname === '/' ? '/contact' : '/'}>
            <Button thirdiary>{pathname === '/' ? 'Contact' : 'Home'}</Button>
         </StyledLink>
      </Wrapper>
   );
};

export default Footer;
