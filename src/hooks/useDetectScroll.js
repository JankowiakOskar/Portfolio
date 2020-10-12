import { useState, useEffect } from 'react';

export const useDetectScroll = () => {
   const [scroll, setScroll] = useState({
      x: document.body.getBoundingClientRect().left,
      y: document.body.getBoundingClientRect().top,
   });

   const handleScroll = () => {
      setScroll({
         x: document.body.getBoundingClientRect().left,
         y: -document.body.getBoundingClientRect().top,
      });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return [scroll.y, scroll.x];
};
