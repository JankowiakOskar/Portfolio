import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Project from 'components/molecules/Project/Project';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import gsap from 'gsap';

const Wrapper = styled.div`
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   background-color: ${({ theme }) => theme.white};
`;

const Projects = () => {
   const data = useStaticQuery(graphql`
      query {
         projects: allProjectsJson(sort: { fields: lineup }) {
            edges {
               node {
                  id
                  description
                  codeLink
                  lineup
                  liveLink
                  title
                  technologies {
                     name
                     icon {
                        publicURL
                     }
                  }
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

   const wrapperRef = useRef(null);

   useEffect(() => {
      const wrapper = wrapperRef.current;
      const title = wrapper.querySelector('h2');
      const description = wrapper.querySelector('p');

      gsap.set([title, description], { autoAlpha: 0 });

      gsap.fromTo(
         title,
         {
            y: '-=50',
         },
         {
            y: '0',
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: {
               trigger: title,
               start: 'top center',
            },
         }
      );

      gsap.fromTo(
         description,
         {
            x: '+=50',
         },
         {
            x: '0',
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: {
               trigger: title,
               start: '20% 80%',
            },
         }
      );
   }, []);

   return (
      <Wrapper data-section data-title="Projects" id="projects" ref={wrapperRef}>
         <SectionHeader
            titleText="Projects"
            descriptionText="Below I present projects that I have managed to implement in the last year since I started learning web development. My technical skills grow from project to project, the next one will be an
        online store."
         />
         {edges.map(({ node: { id, title, description, codeLink, liveLink, image, technologies, lineup } }) => (
            <Project
               key={id}
               title={title}
               description={description}
               liveLink={liveLink}
               codeLink={codeLink}
               image={image.childImageSharp.fluid}
               technologies={technologies}
               isOdd={Boolean(lineup % 2)}
            />
         ))}
      </Wrapper>
   );
};

export default Projects;
