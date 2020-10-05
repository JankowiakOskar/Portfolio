import React from 'react';
import styled from 'styled-components';
import Contact from 'components/organisms/Contact/Contact';

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.darkBlue};
`;

const ContactPage = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default ContactPage;
