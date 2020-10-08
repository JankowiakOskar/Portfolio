import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ToolkitScene from 'assets/svg/ToolkitScene.svg';

const Wrapper = styled.div`
   margin: 50px 0;
   padding: 10px;
   height: 250px;
   width: 100%;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.white};
   border-radius: 15px;
   box-shadow: inset 0px 0px 50px -8px rgba(0, 0, 0, 0.75);
   border: 1px solid ${({ theme }) => theme.darkBlue};
`;

const StyledToolsScene = styled(ToolkitScene)`
   height: 100%;
   width: 100%;
`;

const Text = styled.p`
   margin: 0;
   padding: 0;
   width: 50%;
   text-align: center;
   position: absolute;
   top: 70%;
   left: 10%;
   font-weight: 600;
`;

const TitleScene = styled(Text)`
   text-align: center;
   top: 5px;
   left: 50%;
`;

const ToolScene = () => {
   const wrapperRef = useRef(null);
   const tl = useRef(null);
   useEffect(() => {
      const sceneAnimation = () => {
         const wrapper = wrapperRef.current;
         const [elements] = wrapper.children;
         const men = elements.getElementById('men');
         const hammerCircle = elements.getElementById('hammerCircle');
         const assetCircle = elements.getElementById('assetCircle');
         const chartsCircle = elements.getElementById('chartsCircle');
         const rocketCircle = elements.getElementById('rocketCircle');
         const arrowsCircle = elements.getElementById('arrowsCircle');
         const dashedCircle = elements.getElementById('dashedCircle');
         gsap.set(
            [wrapper, ...men.children, ...hammerCircle.children, ...assetCircle.children, ...chartsCircle.children, ...rocketCircle.children, ...arrowsCircle.children, ...dashedCircle.children],
            { autoAlpha: 0 }
         );
         tl.current = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });
         tl.current = gsap.timeline({ pause: true });

         tl.current
            .to(wrapper, { autoAlpha: 1, duration: 0.5 })
            .fromTo(men.children, { transformOrigin: '50% 100%' }, { autoAlpha: 1, stagger: 0.1, duration: 2 })
            .fromTo(rocketCircle.children, { x: '-=50', y: '-=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.5')
            .fromTo(arrowsCircle.children, { x: '+=50', y: '+=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.2')
            .fromTo(hammerCircle.children, { x: '-=50', y: '+=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.2')
            .fromTo(assetCircle.children, { y: '+=80' }, { y: '0', autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.2')
            .fromTo(chartsCircle.children, { x: '+=50', y: '-=50' }, { x: '0', y: '0', autoAlpha: 1, stagger: 0.1, duration: 0.5 }, '-=0.2')
            .to(dashedCircle, { transformOrigin: '50% 50%', rotation: 360, duration: 20, repeat: '-1' });
      };
   }, []);

   useEffect(() => {}, []);

   return (
      <Wrapper ref={wrapperRef}>
         <StyledToolsScene />
         <Text>Think, find right tools and develop yourself</Text>
         <TitleScene>Bussiness & Development</TitleScene>
      </Wrapper>
   );
};

export default ToolScene;
