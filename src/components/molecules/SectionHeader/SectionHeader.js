import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  width: 45%;
  border-bottom: 3px solid ${({ theme, secondary }) => (secondary ? theme.lightGreen : theme.darkBlue)};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.font.size.large};
`;

const SectionDescription = styled.p`
  color: ${({ theme, secondary }) => secondary && theme.white};
`;

const SectionHeader = ({ titleText, descriptionText, secondary }) => {
  return (
    <>
      <SectionTitle data-section-title secondary={secondary}>
        {titleText}
      </SectionTitle>
      <SectionDescription data-section-description secondary={secondary}>
        {descriptionText}
      </SectionDescription>
    </>
  );
};

export default SectionHeader;
