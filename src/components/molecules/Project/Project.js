import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import GridList from 'components/templates/GridList/GridList';
import ListItem from 'components/atoms/ListItem/ListItem';
import { Button } from 'components/atoms/Button/Button';
import gsap from 'gsap';

const ProjectWrapper = styled.div`
   margin: 60px 0;
`;

const ProjectTitle = styled.h3`
   font-size: ${({ theme }) => theme.font.size.medium};

   ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.large};
   }
`;

const ProjectDescription = styled.p``;

const GridListWrapper = styled.div`
   padding: 20px 0;
`;

const StyledGridList = styled(GridList)`
   ${({ theme }) => theme.mq.tablet} {
      grid-template-columns: 1fr 1fr;
   }
`;

const StyledListItem = styled(ListItem)`
   font-weight: 600;
`;

const ButtonsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;

   ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
      justify-content: flex-start;
   }
`;

const StyledButton = styled(Button)`
   margin: 20px 0;

   ${({ theme }) => theme.mq.tablet} {
      margin: 0 30px 0 0;
   }
`;

const ImageWrapper = styled.div`
   max-width: 800px;
   border: 2px solid ${({ theme }) => theme.darkBlue};
   border-radius: 5px;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
`;

const ExternalLink = styled.a`
   text-decoration: none;
   color: inherit;
`;

const Project = ({ title, description, liveLink, codeLink, technologies, image, isOdd }) => {
   const projectWrapperRef = useRef(null);

   useEffect(() => {
      const projectWrapper = projectWrapperRef.current;
      const projectTitle = projectWrapper.querySelector(`[data-project-title]`);
      const projectDesc = projectWrapper.querySelector(`[data-project-desc]`);
      const projectImg = projectWrapper.querySelector(`[data-project-img]`);

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
      <ProjectWrapper ref={projectWrapperRef}>
         <ProjectTitle data-project-title>{title}</ProjectTitle>
         <ProjectDescription data-project-desc>{description}</ProjectDescription>
         <ImageWrapper data-project-img>
            <Img fluid={image} />
         </ImageWrapper>
         <GridListWrapper>
            <StyledGridList>
               {technologies.map(({ name, icon: { publicURL } }) => (
                  <StyledListItem key={name} name={name} iconURL={publicURL} color="darkBlue" />
               ))}
            </StyledGridList>
         </GridListWrapper>
         <ButtonsWrapper data-buttons-wrapper>
            <StyledButton>
               <ExternalLink href={liveLink} target="_blank">
                  Live project
               </ExternalLink>
            </StyledButton>
            <Button thirdiary>
               <ExternalLink href={codeLink} target="_blank">
                  View Code
               </ExternalLink>
            </Button>
         </ButtonsWrapper>
      </ProjectWrapper>
   );
};

export default Project;
