import React from 'react';
import styled from 'styled-components';
import Instagram from 'assets/svg/Instagram.svg';
import Messenger from 'assets/svg/Messenger.svg';
import Email from 'assets/svg/Email.svg';
import GridList from 'components/templates/GridList/GridList';

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
`;

const Title = styled.h4`
   width: 100%;
   padding: 20px 0px;
   text-align: left;
   font-size: ${({ theme }) => theme.font.size.paragraph};
   color: ${({ theme }) => theme.white};
   border-bottom: 3px solid ${({ theme }) => theme.white};
   border-radius: 5px;
`;

const StyledMessenger = styled(Messenger)`
   width: 50px;
   height: 50px;
   background-color: ${({ theme }) => theme.lightGreen};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);
   padding: 10px;
   border-radius: 25px;
   opacity: 0.9;
   transition: all 0.15s ease-in-out;

   &:hover {
      ${({ theme }) => theme.mq.bigTablet} {
         transform: scale(1.05);
         background-color: ${({ theme }) => theme.white};
      }
   }
`;
const StyledEmail = styled(Email)`
   width: 50px;
   height: 50px;
   background-color: ${({ theme }) => theme.lightGreen};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);
   padding: 10px;
   border-radius: 25px;
   opacity: 0.9;
   transition: all 0.15s ease-in-out;

   &:hover {
      ${({ theme }) => theme.mq.bigTablet} {
         transform: scale(1.05);
         background-color: ${({ theme }) => theme.white};
      }
   }
`;

const StyledInstagram = styled(Instagram)`
   width: 50px;
   height: 50px;
   background-color: ${({ theme }) => theme.lightGreen};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);
   padding: 10px;
   border-radius: 15px;
   opacity: 0.9;
   transition: all 0.15s ease-in-out;

   &:hover {
      ${({ theme }) => theme.mq.bigTablet} {
         transform: scale(1.05);
         background-color: ${({ theme }) => theme.white};
      }
   }
`;

const SocialElement = styled.div`
   margin: 20px 0px;
   max-height: 100px;
   width: 300px;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
`;

const ContentWrapper = styled.div`
   margin: 0 0 0 10px;
   flex-basis: 70%;
   height: 100%;
`;

const TitleIcon = styled.p`
   margin: 0;
   padding: 0;
   font-weight: 600;
   color: ${({ theme }) => theme.lightGreen};
`;

const Description = styled.p`
   font-size: ${({ theme }) => theme.font.size.small};
   margin: 0;
   padding: 0;
   color: ${({ theme }) => theme.grey200};
`;

const StyledLink = styled.a`
   text-decoration: none;
`;

const SocialMedia = ({ className }) => {
   return (
      <Wrapper className={className}>
         <Title>Or try connect with social media...</Title>
         <GridList>
            <SocialElement>
               <StyledLink href="https://www.instagram.com/oskarjankowiak/" target="_blank">
                  <StyledInstagram />
               </StyledLink>

               <ContentWrapper>
                  <TitleIcon>Instagram</TitleIcon>
                  <Description>See my Instagram profile!</Description>
               </ContentWrapper>
            </SocialElement>

            <SocialElement>
               <StyledLink href="mailto: jankowiak31@gmail.com" target="_blank">
                  <StyledEmail />
               </StyledLink>
               <ContentWrapper>
                  <TitleIcon>Email</TitleIcon>
                  <Description>jankowiak31@gmail.com</Description>
               </ContentWrapper>
            </SocialElement>

            <SocialElement>
               <StyledLink href="https://www.facebook.com/jankowiak.oskar/" target="_blank">
                  <StyledMessenger />
               </StyledLink>
               <ContentWrapper>
                  <TitleIcon>Messenger</TitleIcon>
                  <Description>Write on Facebook!</Description>
               </ContentWrapper>
            </SocialElement>
         </GridList>
      </Wrapper>
   );
};

export default SocialMedia;
