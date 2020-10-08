import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import gsap from 'gsap';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';

const Wrapper = styled.div`
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   min-height: 100vh;
   background-color: ${({ theme }) => theme.white};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);

   ${({ theme }) => theme.mq.tablet} {
      padding: 50px;
   }
`;

const ImageWrapper = styled.div`
   width: 50%;
   border: 1px solid ${({ theme }) => theme.darkBlue};
   border-radius: 5px;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
`;

const AboutMe = () => {
   const data = useStaticQuery(graphql`
      query {
         file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
               fluid(maxWidth: 1000, maxHeight: 1800, quality: 100) {
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
      <Wrapper data-section data-title="About Me" id="aboutMe" ref={wrapperRef}>
         <SectionHeader
            titleText="About Me"
            descriptionText="Hello, at my website! I am Oskar, logistics specialist by education with several years of experience. As with programming world, my current job is to solve complex problems, the difference is
        that in logistics they are mainly solved between people. Currently, I am learning programming with an emphasis on front-end, but in the future I plan to extend the scope of technology to
        backend. I think that a passion for development emerged from my current job."
         />
         <ImageWrapper ref={imageRef}>
            <Image fluid={data.file.childImageSharp.fluid} />
         </ImageWrapper>
      </Wrapper>
   );
};

export default AboutMe;
