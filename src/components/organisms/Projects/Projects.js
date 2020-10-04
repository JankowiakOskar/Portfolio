import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Project from 'components/molecules/Project/Project';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  background-color: ${({ theme }) => theme.white};
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectsJson {
        edges {
          node {
            codeLink
            description
            id
            liveLink
            technologies {
              name
              icon {
                publicURL
              }
            }
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    projects: { edges },
  } = data;
  return (
    <Wrapper data-section data-title="Projects" id="projects">
      <SectionHeader
        titleText="Projects"
        descriptionText="Below I present projects that I have managed to implement in the last year since I started learning web development. My technical skills grow from project to project, the next one will be an
        online store."
      />
      {edges.map(({ node: { id, title, description, codeLink, liveLink, image, technologies } }) => (
        <Project key={id} title={title} description={description} liveLink={liveLink} codeLink={codeLink} image={image.childImageSharp.fluid} technologies={technologies} />
      ))}
    </Wrapper>
  );
};

export default Projects;
