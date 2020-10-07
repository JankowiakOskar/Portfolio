import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-auto-rows: minmax(50px, auto);
`;

const GridList = ({ children }) => {
   const gridListRef = useRef(null);

   useEffect(() => {
      const gridElements = gridListRef.current.children;
      const triggerListAnimation = (child) =>
         gsap.fromTo(
            child,
            { autoAlpha: 0, y: '+=20' },
            {
               y: '0',
               autoAlpha: 1,
               stagger: 0.3,
               scrollTrigger: {
                  trigger: child,
                  start: 'bottom bottom',
                  toggleActions: 'play none none reverse',
               },
            }
         );

      [...gridElements].forEach(triggerListAnimation);
   }, []);
   return (
      <Grid ref={gridListRef} data-grid-technology>
         {children}
      </Grid>
   );
};

export default GridList;
