import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   padding: ${({ theme }) => theme.layout.mobileSidesPadding};
   margin: 0 auto;
   max-width: 1660px;
   box-shadow: inset 0px 0px 30px -8px rgba(0, 0, 0, 0.75);

   ${({ theme }) => theme.mq.tablet} {
      padding: 50px;
   }

   ${({ theme }) => theme.mq.bigTablet} {
      padding: 100px;
   }
`;

const SectionContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default SectionContentWrapper;
