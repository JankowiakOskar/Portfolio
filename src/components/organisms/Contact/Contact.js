import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

const Wrapper = styled.div`
   position: relative;
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   width: 100%;
   height: 100%;
   ${({ theme }) => theme.mq.tablet} {
      padding: 100px;
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
      background-color: ${({ theme }) => theme.grey200};
      border-radius: 25px;
      padding: 25px;
      opacity: 0.3;
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
   console.log(nodes[0].publicURL);
   return (
      <Wrapper data-section data-title="Contact" id="contact">
         <StyledSectionHeader
            secondary
            titleText="Contact"
            descriptionText="If you want contact with me, just send me message filling out form puted below or find me on social-media"
            icon={nodes[0].publicURL}
         />
         <ContactForm />
      </Wrapper>
   );
};

export default Contact;
