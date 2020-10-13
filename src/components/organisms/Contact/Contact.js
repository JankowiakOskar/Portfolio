import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import ContactForm from 'components/molecules/ContactForm/ContactForm';
import SocialMedia from '../../molecules/SocialMedia/SocialMedia';

const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
`;

const InnerWrapper = styled.div`
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   margin: 0 auto;
   max-width: 1660px;

   ${({ theme }) => theme.mq.tablet} {
      padding: 50px;
   }

   ${({ theme }) => theme.mq.bigTablet} {
      padding: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`;

const ContentWrapper = styled.div`
   ${({ theme }) => theme.mq.bigTablet} {
      flex-basis: 50%;
   }
`;

const StyledSocialMedia = styled(SocialMedia)`
   ${({ theme }) => theme.mq.bigTablet} {
      && {
         margin-top: 25px;
         flex-basis: 40%;
      }
   }
`;

const StyledSectionHeader = styled(SectionHeader)`
   position: relative;

   &::after {
      content: '';
      width: 120px;
      height: 100px;
      position: absolute;
      top: -70px;
      right: 5px;
      background: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      background-color: ${({ theme }) => theme.white};
      border-radius: 25px;
      padding: 25px;
      opacity: 0.4;
      z-index: 6;
   }
`;

const Contact = () => {
   const data = useStaticQuery(graphql`
      query {
         mailIcon: allFile(filter: { name: { eq: "Mail" } }) {
            nodes {
               publicURL
            }
         }
      }
   `);

   const {
      mailIcon: { nodes },
   } = data;
   return (
      <Wrapper data-section data-title="Contact" id="contact">
         <InnerWrapper>
            <ContentWrapper>
               <StyledSectionHeader
                  secondary
                  titleText="Contact"
                  descriptionText="If you have any question about job, technology etc. just send me message by filling out form puted below..."
                  icon={nodes[0].publicURL}
               />
               <ContactForm />
            </ContentWrapper>
            <StyledSocialMedia />
         </InnerWrapper>
      </Wrapper>
   );
};

export default Contact;
