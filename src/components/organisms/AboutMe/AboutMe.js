import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import gsap from 'gsap';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;

const SectionTitle = styled.h2`
  width: 45%;
  border-bottom: 3px solid ${({ theme }) => theme.darkBlue};
  border-radius: 2px;
`;

const Description = styled.p``;

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
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (wrapperRef && imageRef) {
      const wrapper = wrapperRef.current;
      const title = wrapper.querySelector('[data-title]');
      const description = wrapper.querySelector('[data-desc]');
      const image = imageRef.current;

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
    <Wrapper id="aboutMe" ref={wrapperRef}>
      <SectionTitle data-title>About Me</SectionTitle>
      <Description data-desc>
        Hello, at my website! I am Oskar, logistics specialist by education with several years of experience. As with programming world, my current job is to solve complex problems, the difference is
        that in logistics they are mainly solved between people. Currently, I am learning programming with an emphasis on front-end, but in the future I plan to extend the scope of technology to
        backend. I think that a passion for development emerged from my current job.
      </Description>
      <ImageWrapper ref={imageRef}>
        <Image fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default AboutMe;
