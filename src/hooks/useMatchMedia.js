import { useState, useEffect } from 'react';

const useMatchMedia = (mediaQuery, ref = window) => {
   const [isMatched, setIsMatched] = useState(ref.matchMedia(mediaQuery).matches);

   useEffect(() => {
      const handleResize = () => {
         const { matches } = ref.matchMedia(mediaQuery);
         setIsMatched(matches);
      };
      ref.addEventListener('resize', handleResize);

      return () => {
         ref.removeEventListener('resize', handleResize);
      };
   });

   return isMatched;
};

export default useMatchMedia;
