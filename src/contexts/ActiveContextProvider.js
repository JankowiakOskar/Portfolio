import React, { createContext, useState, useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export const ActiveContext = createContext();

const ActiveContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');
  const sections = useRef(null);

  const detectActiveSection = (sectionsArray) => {
    [...sectionsArray].forEach((section) => {
      const titleUnderline = section.querySelector('[data-title-underline');
      return ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          setActiveSection(self.trigger.id);
          const animationTitleUnderline =
            self.isActive && titleUnderline
              ? gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 1, duration: 0.3 })
              : gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 0, duration: 0.3 });
        },
      });
    });
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    detectActiveSection(sections.current);
  }, []);

  const contextValue = {
    activeSectionId: activeSection,
    allSectionsList: sections.current,
  };

  return <ActiveContext.Provider value={contextValue}>{children}</ActiveContext.Provider>;
};

export default ActiveContextProvider;
