import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Project from 'components/molecules/Project/Project';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import gsap from 'gsap';

const Wrapper = styled.div`
   width: 100%;
   background-color: ${({ theme }) => theme.white};
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);
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
      height: 100%;
      padding: 100px;
   }
`;

const StyledSectionHeader = styled(SectionHeader)`
   ${({ theme }) => theme.mq.desktop} {
      && {
         width: 45%;
      }
   }
`;

const StyledProject = styled(Project)`
   ${({ theme }) => theme.mq.desktop} {
      && {
         padding: 60px;
      }
   }
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
                        fluid(maxWidth: 1000, quality: 100) {
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
               start: 'top 80%',
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
         <InnerWrapper>
            <StyledSectionHeader
               titleText="Projects"
               shortTitle
               descriptionText="
               Below I present projects that I managed to implement during the last year of studying web development. Another one that I plan to do is e-commerce store. And while my technical skills aren't as good as I would like them to be, they grow from project to project."
            />
            {edges.map(({ node: { id, title, description, codeLink, liveLink, image, technologies, lineup } }) => (
               <StyledProject
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
         </InnerWrapper>
      </Wrapper>
   );
};

export default Projects;
