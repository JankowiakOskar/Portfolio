import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.darkBlue};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.lightGreen};
  border-bottom: 3px solid ${({ theme }) => theme.lightGreen};
  border-radius: 2px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.white};
`;

const TechnologiesGridList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
`;

const TechnologyElement = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.white};

  &:before {
    content: '';
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
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

  return (
    <Wrapper>
      <SectionTitle>Technologies and Tools</SectionTitle>
      <Description>
        Below I have listed the technologies and tools that I know and used in my projects. I am currently focusing on improving and consolidating the React ecosystem and tools like Gatsby.js. Then I
        want to know how to test my applications.
      </Description>
      <TechnologiesGridList>
        {edges.map(
          ({
            node: {
              id,
              name,
              icon: { publicURL },
            },
          }) => {
            return (
              <TechnologyElement key={id} icon={publicURL}>
                {name}
              </TechnologyElement>
            );
          }
        )}
      </TechnologiesGridList>
    </Wrapper>
  );
};

export default Technologies;
