import React, { useState } from 'react';
import styled from 'styled-components';
import InputElement from 'components/molecules/InputElement/InputElement';
import TextAreaElement from 'components/molecules/TextArea/TextArea';
import { Button } from 'components/atoms/Button/Button';
import { Formik, Form } from 'formik';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactFormWrapper = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`;

const StyledForm = styled.form`
   width: 100%;
`;

const StyledInputElement = styled(InputElement)`
   width: 100%;
   margin: 10px 0;
`;

const StyledButton = styled(Button)`
   margin: 20px 0;
`;

const initialValues = {
   name: '',
   email: '',
   message: '',
};

const schema = yup.object().shape({
   name: yup.string().required('Your name is required'),
   email: yup.string().email('Invalid email adress').required('Email field is required'),
   message: yup.string().min(8, 'Your message has to has minimum 8 digits').required(`You didn't write any message`),
});

const ContactForm = () => {
   const [recaptchaToken, setRecaptchaToken] = useState('');
   const [errors, setErrors] = useState({});
   return (
      <ContactFormWrapper>
         <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
               if (!recaptchaToken) {
                  setErrors({ recaptcha: 'You have to verify recaptcha before send' });
               }
            }}
         >
            {() => (
               <StyledForm as={Form} autoComplete="off">
                  <StyledInputElement name="name" label="Your name" type="text" />
                  <StyledInputElement name="email" label="Email Adress" type="email" />
                  <TextAreaElement name="message" label="Ask me for anything..." type="text" />
                  <ReCAPTCHA
                     sitekey={`${process.env.GATSBY_RECAPTCHA_KEY}`}
                     theme="dark"
                     hl="en"
                     onChange={(value) => {
                        setRecaptchaToken(value);
                        setErrors({ ...errors, recaptcha: '' });
                     }}
                  />
                  {errors.recaptcha && <ErrorMessage>{errors.recaptcha}</ErrorMessage>}
                  <StyledButton type="submit">Send message</StyledButton>
               </StyledForm>
            )}
         </Formik>
      </ContactFormWrapper>
   );
};

export default ContactForm;
