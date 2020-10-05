import React, { createContext, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export const SectionContext = createContext();

const SectionContextProvider = ({ children, pathname }) => {
  const [activeSection, setActiveSection] = useState('');
  const [menuSectionList, setMenuSectionList] = useState([]);

  useEffect(() => {
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
              return self.isActive ? gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 1, duration: 0.3 }) : gsap.to(titleUnderline, { transformOrigin: '0% 50%', scale: 0, duration: 0.3 });
            }
            return null;
          },
        });
      });
    };

    detectActiveSection(sections);

    if (pathname === '/contact') {
      const contactMenuList = [...sections].filter((section) => section.dataset.title === 'Contact').map((section) => ({ id: section.id, title: section.dataset.title }));

      setMenuSectionList(contactMenuList);
    } else if (pathname === '/') {
      const homeMenuList = [...sections].filter((section) => section.dataset.title).map((section) => ({ id: section.id, title: section.dataset.title }));

      setMenuSectionList(homeMenuList);
    }
  }, [pathname]);

  const contextValue = {
    activeSectionId: activeSection,
    menuSectionList,
  };

  return <SectionContext.Provider value={contextValue}>{children}</SectionContext.Provider>;
};

export default SectionContextProvider;
