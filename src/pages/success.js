import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SectionTitle, SectionDescription } from 'components/molecules/SectionHeader/SectionHeader';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
   padding: 10px;
   min-height: 100vh;
   width: 100%;
   background-color: ${({ theme }) => theme.darkBlue};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const StyledSectionTitle = styled(SectionTitle)`
   text-align: center;
`;

const StyledSectionDescription = styled(SectionDescription)`
   text-align: center;
`;

const ButtonsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   ${({ theme }) => theme.mq.bigTablet} {
      flex-direction: row;
   }
`;

const StyledButton = styled(Button)`
   margin: 20px 0;

   ${({ theme }) => theme.mq.bigTablet} {
      margin: 0 20px;
   }
`;

const SuccessPage = () => {
   return (
      <Wrapper>
         <StyledSectionTitle secondary>
            Really, thanks for your message{' '}
            <span role="img" aria-label="emoji">
               ✔
            </span>
         </StyledSectionTitle>
         <StyledSectionDescription secondary>
            I ll try response as soon as possible in 48 hours{' '}
            <span role="img" aria-label="emoji">
               🕖
            </span>
         </StyledSectionDescription>
         <ButtonsWrapper>
            <Link to="/">
               <Button>Back to Home Page</Button>
            </Link>
            <Link to="/contact">
               <StyledButton secondary>
                  Send another message{' '}
                  <span aria-label="emoji" role="img">
                     💬
                  </span>
               </StyledButton>
            </Link>
         </ButtonsWrapper>
      </Wrapper>
   );
};

export default SuccessPage;
