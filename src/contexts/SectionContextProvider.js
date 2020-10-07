import React, { createContext, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export const SectionContext = createContext();

const SectionContextProvider = ({ children, pathname }) => {
   const [activeSection, setActiveSection] = useState('');
   const [menuSectionList] = useState([
      { id: 'home', title: 'Home' },
      {
         id: 'aboutMe',
         title: 'About Me',
      },
      {
         id: 'technology',
         title: 'Technologies',
      },
      {
         id: 'projects',
         title: 'Projects',
      },
      {
         id: 'contact',
         title: 'Contact',
      },
   ]);

   useEffect(() => {
      setTimeout(() => {
         const sections = document.querySelectorAll('[data-section]');

         const detectActiveSection = (sectionsArray) => {
            [...sectionsArray].forEach((section) => {
               const titleUnderline = section.querySelector('[data-title-underline');

               return ScrollTrigger.create({
                  trigger: section,
                  start: 'top center',
                  end: 'bottom center',
                  onToggle: (self) => {
                     setActiveSection(self.trigger.id);
                     if (titleUnderline) {
                        return self.isActive
                           ? gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 1, duration: 0.3 })
                           : gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 0, duration: 0.3 });
                     }
                     return null;
                  },
               });
            });
         };

         detectActiveSection(sections);
      }, 300);
   }, [pathname]);

   const contextValue = {
      activeSectionId: activeSection,
      menuSectionList,
   };

   return <SectionContext.Provider value={contextValue}>{children}</SectionContext.Provider>;
};

export default SectionContextProvider;
