import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import GridList from 'components/templates/GridList/GridList';
import ListItem from 'components/atoms/ListItem/ListItem';
import { Button } from 'components/atoms/Button/Button';
import gsap from 'gsap';

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

const Project = ({ title, description, liveLink, codeLink, technologies, image, isOdd }) => {
   const ProjectWrapperRef = useRef(null);

   useEffect(() => {
      const ProjectWrapper = ProjectWrapperRef.current;
      const projectTitle = ProjectWrapper.querySelector(`[data-project-title]`);
      const projectDesc = ProjectWrapper.querySelector(`[data-project-desc]`);
      const projectImg = ProjectWrapper.querySelector(`[data-project-img]`);

      gsap.set([projectTitle, projectDesc, projectImg], { autoAlpha: 0 });

      gsap.fromTo(
         projectTitle,
         {
            x: isOdd ? '-=50' : '+=50',
         },
         {
            x: '0',
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: {
               trigger: projectTitle,
               start: '-20% 80%',
            },
         }
      );

      gsap.fromTo(
         projectDesc,
         {
            x: isOdd ? '+=50' : '-=50',
         },
         {
            x: '0',
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: {
               trigger: projectDesc,
               start: '-20% 80%',
            },
         }
      );

      gsap.fromTo(
         projectImg,
         {
            y: isOdd ? '+=50' : '-=50',
         },
         {
            y: '0',
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: {
               trigger: projectImg,
               start: '-20% 80%',
            },
         }
      );
   }, []);
   return (
      <ProjectWrapper ref={ProjectWrapperRef}>
         <ProjectTitle data-project-title>{title}</ProjectTitle>
         <ProjectDescription data-project-desc>{description}</ProjectDescription>
         <ImageWrapper data-project-img>
            <Img fluid={image} />
         </ImageWrapper>
         <GridListWrapper>
            <GridList>
               {technologies.map(({ name, icon: { publicURL } }) => (
                  <ListItem key={name} name={name} iconURL={publicURL} color="darkBlue" />
               ))}
            </GridList>
         </GridListWrapper>
         <ButtonsWrapper data-buttons-wrapper>
            <StyledButton>Live project</StyledButton>
            <Button thirdiary>View Code</Button>
         </ButtonsWrapper>
      </ProjectWrapper>
   );
};

export default Project;
