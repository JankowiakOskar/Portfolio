import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import GridList from 'components/templates/GridList/GridList';
import ListItem from 'components/atoms/ListItem/ListItem';
import { Button } from 'components/atoms/Button/Button';

const ProjectWrapper = styled.div`
  margin: 20px 0;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.medium};
`;

const ProjectDescription = styled.p``;

const GridListWrapper = styled.div`
  padding: 20px 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const ImageWrapper = styled.div`
  max-width: 800px;
  border: 2px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
`;

const Project = ({ title, description, liveLink, codeLink, technologies, image }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ImageWrapper>
        <Img fluid={image} />
      </ImageWrapper>
      <GridListWrapper>
        <GridList>
          {technologies.map(({ name, icon: { publicURL } }) => (
            <ListItem key={name} name={name} iconURL={publicURL} color="darkBlue" />
          ))}
        </GridList>
      </GridListWrapper>

      <ButtonsWrapper>
        <StyledButton>Live project</StyledButton>
        <Button thirdiary>View Code</Button>
      </ButtonsWrapper>
    </ProjectWrapper>
  );
};

export default Project;
