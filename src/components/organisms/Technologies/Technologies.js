import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import ListItem from 'components/atoms/ListItem/ListItem';
import GridList from 'components/templates/GridList/GridList';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.darkBlue};
`;

const Technologies = () => {
  const data = useStaticQuery(graphql`
    query {
      technologies: allTechnologiesJson {
        edges {
          node {
            id
            name
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const {
    technologies: { edges },
  } = data;

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef) {
      const wrapper = wrapperRef.current;
      const gridElements = wrapper.querySelector('[data-grid-technology]').children;

      const triggerListAnimation = (child) =>
        gsap.fromTo(
          child,
          { autoAlpha: 0, y: '+=20' },
          {
            y: '0',
            autoAlpha: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: child,
              start: 'bottom bottom',
              toggleActions: 'play none none reverse',
            },
          }
        );

      [...gridElements].forEach(triggerListAnimation);
    }
  }, []);

  return (
    <Wrapper id="technology" ref={wrapperRef}>
      <SectionHeader
        titleText="Technologies and Tools"
        descriptionText="Below I have listed the technologies and tools that I know and used in my projects. I am currently focusing on improving and consolidating the React ecosystem and tools like Gatsby.js. Then I
        want to know how to test my applications."
        secondary
      />
      <GridList>
        {edges.map(
          ({
            node: {
              id,
              name,
              icon: { publicURL },
            },
          }) => {
            return <ListItem key={id} iconURL={publicURL} name={name} />;
          }
        )}
      </GridList>
    </Wrapper>
  );
};

export default Technologies;
