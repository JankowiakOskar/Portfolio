import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

const ActiveContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('#home');
};
