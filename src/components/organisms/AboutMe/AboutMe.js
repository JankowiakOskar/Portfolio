import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.white};
  opacity: 0.9;
`;

const SectionTitle = styled.h2`
  width: 45%;
  border-bottom: 3px solid ${({ theme }) => theme.darkBlue};
  border-radius: 2px;
`;

const Description = styled.p``;

const ImageWrapper = styled(Image)`
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
  console.log(data);
  return (
    <Wrapper>
      <SectionTitle>About Me</SectionTitle>
      <Description>
        Hello, at my website! I am Oskar, logistics specialist by education with several years of experience. As with programming world, my current job is to solve complex problems, the difference is
        that in logistics they are mainly solved between people. Currently, I am learning programming with an emphasis on front-end, but in the future I plan to extend the scope of technology to
        backend. I think that a passion for development emerged from my current job.
      </Description>
      <ImageWrapper fluid={data.file.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default AboutMe;
