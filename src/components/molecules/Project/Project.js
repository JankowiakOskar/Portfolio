import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import GridList from 'components/templates/GridList/GridList';
import ListItem from 'components/atoms/ListItem/ListItem';
import { Button } from 'components/atoms/Button/Button';
import gsap from 'gsap';

const ProjectWrapper = styled.div`
   margin: 60px 0;

   ${({ theme }) => theme.mq.bigTablet} {
      width: 100%;
      max-height: 640px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 0.3fr 1fr 1fr 1fr;
      grid-column-gap: 50px;
      grid-template-areas: ${({ isOdd }) =>
         isOdd
            ? `'title image'
               'description image'
               'technologies image'
               'buttons image'`
            : `'image title'
               'image description'
               'image technologies'
               'image buttons'`};
   }
`;

const ProjectTitle = styled.h3`
   font-size: ${({ theme }) => theme.font.size.medium};

   ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.large};
   }

   ${({ theme }) => theme.mq.bigTablet} {
      grid-area: title;
   }
`;

const ProjectDescriptionWrapper = styled.div`
   grid-area: description;
   padding: 30px 0 0 0;
`;

const ProjectDescription = styled.p``;

const Span = styled.span`
   font-weight: 800;
   color: ${({ theme }) => theme.red};
`;

const GridListWrapper = styled.div`
   padding: 20px 0;
   ${({ theme }) => theme.mq.bigTablet} {
      grid-area: technologies;
   }
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

   ${({ theme }) => theme.mq.bigTablet} {
      grid-area: buttons;
   }
`;

const StyledButton = styled(Button)`
   margin: 20px 0;

   ${({ theme }) => theme.mq.tablet} {
      margin: 0 30px 0 0;
   }
`;

const ImageWrapper = styled.div`
   ${({ theme }) => theme.mq.bigTablet} {
      height: 100%;
      width: 100%;
      margin: 50px 0 0 0;
      display: flex;
      align-items: flex-start;
   }
`;

const StyledImg = styled(Img)`
   border: 2px solid ${({ theme }) => theme.darkBlue};
   border-radius: 5px;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

   ${({ theme }) => theme.mq.bigTablet} {
      width: 100%;
   }
`;

const ExternalLink = styled.a`
   text-decoration: none;
   color: inherit;
`;

const ProjectLink = styled(ExternalLink)`
   margin: 20px 0 0 0;
   grid-area: image;
   display: block;
`;

const Project = ({ title, description, liveLink, codeLink, technologies, image, isOdd, className, RWD }) => {
   const projectWrapperRef = useRef(null);

   const ProjectImageLink = () => (
      <ProjectLink href={liveLink} target="_blank" data-project-img>
         <ImageWrapper>
            <StyledImg fluid={image} />
         </ImageWrapper>
      </ProjectLink>
   );

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
      <ProjectWrapper ref={projectWrapperRef} isOdd={isOdd} className={className}>
         <ProjectTitle data-project-title>{title}</ProjectTitle>
         <ProjectDescriptionWrapper data-project-desc>
            {description}
            {!liveLink && title !== 'My website' && (
               <ProjectDescription>
                  <Span>Notice: </Span>
                  Project is still on building phase, link to live demo will be placed here soon...
               </ProjectDescription>
            )}
            {RWD === false && (
               <ProjectDescription>
                  <Span>Notice: </Span>
                  Application were made for bigger screen devices! To better experience, please not open on mobile phone.
               </ProjectDescription>
            )}
         </ProjectDescriptionWrapper>
         <ProjectImageLink />
         <GridListWrapper>
            <StyledGridList>
               {technologies.map(({ name, icon: { publicURL } }) => (
                  <StyledListItem key={name} name={name} iconURL={publicURL} color="darkBlue" />
               ))}
            </StyledGridList>
         </GridListWrapper>
         <ButtonsWrapper data-buttons-wrapper>
            {liveLink && (
               <ExternalLink href={liveLink} target="_blank">
                  <StyledButton>Live Project</StyledButton>
               </ExternalLink>
            )}
            <ExternalLink href={codeLink} target="_blank">
               <Button thirdiary>View Code</Button>
            </ExternalLink>
         </ButtonsWrapper>
      </ProjectWrapper>
   );
};

export default Project;
