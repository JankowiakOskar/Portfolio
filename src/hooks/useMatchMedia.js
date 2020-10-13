import { useState, useEffect } from 'react';

const useMatchMedia = (mediaQuery) => {
   const [isMatched, setIsMatched] = useState(window.matchMedia(mediaQuery).matches);

   useEffect(() => {
      const handleResize = () => {
         const { matches } = window.matchMedia(mediaQuery);
         setIsMatched(matches);
      };
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   });

   return isMatched;
};

export default useMatchMedia;
