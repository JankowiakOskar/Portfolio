import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ToolkitScene from 'assets/svg/ToolkitScene.svg';

const Wrapper = styled.div`
   position: relative;
   margin: 50px 0;
   padding: 10px;
   height: 280px;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.white};
   border-radius: 15px;
   box-shadow: inset 0px 0px 80px -8px rgba(0, 0, 0, 0.75);
   opacity: 0;
`;

const StyledToolsScene = styled(ToolkitScene)`
   flex-grow: 1;
   width: 100%;
`;

const Text = styled.h3`
   position: absolute;
   top: 70%;
   left: 20px;
   height: 10%;
   width: 70%;
   font-weight: 600;

   ${({ theme }) => theme.mq.tablet} {
      width: 50%;
      top: 67%;
      font-size: ${({ theme }) => theme.font.size.medium};
   }
`;

const StyledSpan = styled.span`
   border-bottom: 1px solid ${({ theme }) => theme.darkBlue};
`;

const ToolScene = ({ className }) => {
   const wrapperRef = useRef(null);
   const tl = useRef(null);

   useEffect(() => {
      const wrapper = wrapperRef.current;

      const [elements] = wrapper.children;
      const men = elements.getElementById('men');
      const hammerCircle = elements.getElementById('hammerCircle');
      const assetCircle = elements.getElementById('assetCircle');
      const chartsCircle = elements.getElementById('chartsCircle');
      const rocketCircle = elements.getElementById('rocketCircle');
      const arrowsCircle = elements.getElementById('arrowsCircle');
      const dashedCircle = elements.getElementById('dashedCircle');

      gsap.set([wrapper, ...men.children, ...hammerCircle.children, ...assetCircle.children, ...chartsCircle.children, ...rocketCircle.children, ...arrowsCircle.children, dashedCircle], {
         autoAlpha: 0,
      });

      tl.current = gsap.timeline({ paused: true, autoAlpha: 0 });

      tl.current
         .fromTo(wrapper, { scaleY: '0.85', transformOrigin: '50% 100%' }, { scale: '1', autoAlpha: 1, duration: 0.6 })
         .fromTo(men.children, { transformOrigin: '50% 100%' }, { autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.3')
         .to(dashedCircle, { autoAlpha: 1, duration: 0.8 }, '-=0.4')
         .fromTo(rocketCircle.children, { x: '-=50', y: '-=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.12 }, '-=0.35')

         .fromTo(arrowsCircle.children, { x: '+=50', y: '+=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.12 }, '-=0.35')
         .fromTo(hammerCircle.children, { x: '-=50', y: '+=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.12 }, '-=0.35')
         .fromTo(assetCircle.children, { y: '+=80' }, { y: '0', autoAlpha: 1, stagger: 0.12 }, '-=0.35')
         .fromTo(chartsCircle.children, { x: '+=50', y: '-=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.12 }, '-=0.35')
         .to(dashedCircle, { transformOrigin: '50% 50%', rotation: 360, duration: 20, repeat: '-1' });
   }, []);

   useEffect(() => {
      if (tl.current && wrapperRef.current) {
         ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: 'center 80%',
            end: 'top top',
            onToggle: (self) => self.isActive && tl.current.play(),
         });
      }
   }, [tl, wrapperRef]);

   return (
      <Wrapper ref={wrapperRef} className={className}>
         <StyledToolsScene />
         <Text>
            <StyledSpan>Think</StyledSpan>, find right tools and <StyledSpan>develop yourself</StyledSpan>
         </Text>
      </Wrapper>
   );
};

export default ToolScene;
