import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import gsap from 'gsap';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';

const Wrapper = styled.div`
   min-height: 100vh;
   width: 100%;
   background-color: ${({ theme }) => theme.white};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);

   ${({ theme }) => theme.mq.tablet} {
      min-height: 80vh;
   }
`;

const InnerWrapper = styled.div`
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   margin: 0 auto;
   max-width: 1660px;

   ${({ theme }) => theme.mq.tablet} {
      padding: 50px;
   }

   ${({ theme }) => theme.mq.bigTablet} {
      min-height: 0;
      padding: 100px;
      display: flex;
      flex-direction: row;
   }
`;

const ContentWrapper = styled.div`
   ${({ theme }) => theme.mq.bigTablet} {
      width: 60%;
      margin: 0 20px 0 0;
      padding: 0 50px 0 0;
   }

   ${({ theme }) => theme.mq.desktop} {
      padding: 0 200px 0 0;
   }
`;

const ImageWrapper = styled.div`
   ${({ theme }) => theme.mq.bigTablet} {
      width: 40%;
   }
`;

const StyledImg = styled(Img)`
   height: 40vh;
   max-height: 700px;
   width: 50%;
   border: 1px solid ${({ theme }) => theme.darkBlue};
   border-radius: 5px;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

   ${({ theme }) => theme.mq.tablet} {
      height: 50vh;
   }

   ${({ theme }) => theme.mq.bigTablet} {
      width: 100%;
      max-height: 680px;
      height: 680px;
   }
`;

const AboutMe = () => {
   const data = useStaticQuery(graphql`
      query {
         file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 640, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
               }
            }
         }
      }
   `);
   const imageRef = useRef(null);
   const wrapperRef = useRef(null);

   useEffect(() => {
      if (imageRef) {
         const image = imageRef.current;
         const wrapper = wrapperRef.current;
         const title = wrapper.querySelector('[data-section-title]');
         const description = wrapper.querySelector('[data-section-description]');
         gsap.fromTo(
            title,
            { x: '-=50', autoAlpha: 0 },
            {
               x: '0',
               autoAlpha: 1,
               duration: 0.7,
               scrollTrigger: {
                  trigger: title,
                  start: 'top 80%',
               },
            }
         );
         gsap.fromTo(
            description,
            { x: '+=50', autoAlpha: 0 },
            {
               x: '0',
               autoAlpha: 1,
               duration: 1,
               scrollTrigger: {
                  trigger: description,
                  start: '20% 80%',
               },
            }
         );
         gsap.fromTo(
            image,
            { y: '+=30', autoAlpha: 0 },
            {
               y: '0',
               autoAlpha: 1,
               scrollTrigger: {
                  trigger: image,
                  duration: 1,
                  start: 'top 80%',
               },
            }
         );
      }
   }, []);

   return (
      <Wrapper
data-section data-title="About Me" id="aboutMe"
ref={wrapperRef}
      >
         <InnerWrapper>
            <ContentWrapper>
               <SectionHeader
                  titleText="About Me"
                  descriptionText="Hello, at my website! I am Oskar, logistics specialist with several years of experience. Just like in programming world, my previous job was to solve problems, the difference is
        that in logistics they are mainly solved between people. 
        I think that's what got me interested in programming. Currently, I'm learning web development with an emphasis on front-end technologies, but in the nearest future I'd like to gain more knowledge about backend development. I'm looking for an opportunity to gain my first commercial experience in IT as a developer. I can work remotely or in the vicinity of Poznań, Poland. If you need a developer for the team, feel free to contact me."
               />
            </ContentWrapper>
            <ImageWrapper ref={imageRef}>
               <StyledImg fluid={data.file.childImageSharp.fluid} />
            </ImageWrapper>
         </InnerWrapper>
      </Wrapper>
   );
};

export default AboutMe;
