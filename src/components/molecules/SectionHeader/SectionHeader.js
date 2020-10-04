import React from 'react';
import styled, { css } from 'styled-components';

const SectionTitle = styled.h2`
  position: relative;
  width: 45%;
  border-radius: 2px;
  font-size: ${({ theme }) => theme.font.size.large};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.lightGreen};
    `}
`;

const BorderBottom = styled.span`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  transform: scale(0);
  border-bottom: 3px solid ${({ theme, secondary }) => (secondary ? theme.lightGreen : theme.darkBlue)};
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  color: ${({ theme, secondary }) => secondary && theme.white};
`;

const SectionHeader = ({ titleText, descriptionText, secondary }) => {
  return (
    <>
      <SectionTitle data-section-title secondary={secondary}>
        {titleText}
        <BorderBottom data-title-underline secondary={secondary} />
      </SectionTitle>
      <SectionDescription data-section-description secondary={secondary}>
        {descriptionText}
      </SectionDescription>
    </>
  );
};

export default SectionHeader;
