import React from 'react';
import styled, { css } from 'styled-components';

export const SectionTitle = styled.h2`
   position: relative;
   width: 60%;
   border-radius: 2px;
   font-size: ${({ theme }) => theme.font.size.large};

   ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.xl};
   }

   ${({ theme }) => theme.mq.bigTablet} {
      width: ${({ shortTitle }) => (shortTitle ? '20%' : '60%')};
   }

   ${({ secondary }) =>
      secondary &&
      css`
         color: ${({ theme }) => theme.lightGreen};
      `}
`;

export const BorderBottom = styled.span`
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

export const SectionDescription = styled.p`
   color: ${({ theme, secondary }) => secondary && theme.white};
`;

const SectionHeader = ({ titleText, descriptionText, secondary, className, shortTitle }) => {
   return (
      <>
         <SectionTitle data-section-title secondary={secondary} shortTitle={shortTitle}>
            {titleText}
            <BorderBottom data-title-underline secondary={secondary} />
         </SectionTitle>
         <SectionDescription data-section-description secondary={secondary} className={className}>
            {descriptionText}
         </SectionDescription>
      </>
   );
};

export default SectionHeader;
