import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import ListItem from 'components/atoms/ListItem/ListItem';
import GridList from 'components/templates/GridList/GridList';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import ToolScene from 'components/molecules/ToolScene/ToolScene';

const Wrapper = styled.div`
   min-height: 100vh;
   background-color: ${({ theme }) => theme.darkBlue};

   ${({ theme }) => theme.mq.bigTablet} {
      min-height: 0;
   }
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
      padding: 100px;
   }

   ${({ theme }) => theme.mq.desktop} {
      display: flex;
      flex-direction: row;
   }
`;

const ContentWrapper = styled.div`
   ${({ theme }) => theme.mq.desktop} {
      flex-basis: 55%;
      padding: 0 60px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
   }
`;

const StyledGridList = styled(GridList)`
   ${({ theme }) => theme.mq.tablet} {
      grid-template-columns: 1fr 1fr;
   }
`;

const StyledToolScene = styled(ToolScene)`
   ${({ theme }) => theme.mq.bigTablet} {
      && {
         padding: 5px 0;
      }
   }
   ${({ theme }) => theme.mq.desktop} {
      && {
         flex-basis: 45%;
         padding: 30px;
         height: 500px;

         h3 {
            top: 75%;
            left: 50px;
         }
      }
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

   const wrapperRef = useRef(null);

   useEffect(() => {
      if (wrapperRef) {
         const wrapper = wrapperRef.current;
         const title = wrapper.querySelector('h2');
         const description = wrapper.querySelector('p');

         gsap.set([title, description], { autoAlpha: 0 });

         gsap.fromTo(
            title,
            {
               x: '+=50',
            },
            {
               x: '0',
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
               y: '+=50',
            },
            {
               y: '0',
               autoAlpha: 1,
               duration: 0.7,
               scrollTrigger: {
                  trigger: title,
                  start: '20% 80%',
               },
            }
         );
      }
   }, []);

   return (
      <Wrapper data-section data-title="Technologies" id="technology" ref={wrapperRef}>
         <InnerWrapper>
            <ContentWrapper>
               <SectionHeader
                  titleText="Technologies and Tools"
                  descriptionText="Below I have listed the technologies and tools that I know and used in my projects. I am currently focusing on improving and consolidating the React ecosystem and tools like Gatsby.js. Then I
        want to know how to test my applications."
                  secondary
               />
               <StyledGridList>
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
               </StyledGridList>
            </ContentWrapper>
            <StyledToolScene />
         </InnerWrapper>
      </Wrapper>
   );
};

export default Technologies;
