import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputElement from 'components/molecules/InputElement/InputElement';
import TextAreaElement from 'components/molecules/TextArea/TextArea';
import { Button } from 'components/atoms/Button/Button';
import { Formik, Form } from 'formik';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import Loader from 'react-loader-spinner';

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
   margin: 40px 0;
   display: flex;
   justify-content: center;
   align-items: center;
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

const encode = (data) => {
   return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
};

const ContactForm = () => {
   const [recaptchaToken, setRecaptchaToken] = useState('');
   const [error, setError] = useState({
      recaptcha: '',
      response: '',
   });
   const formRef = useRef(null);

   return (
      <ContactFormWrapper>
         <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, actions) => {
               if (!recaptchaToken) {
                  setError({ recaptcha: `You have to confirm fact that you aren't robot before send message !` });
                  setTimeout(() => actions.setSubmitting(false), 800);
               } else if (recaptchaToken) {
                  const newValues = { ...values, 'g-recaptcha-response': recaptchaToken };
                  fetch('/', {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                     body: encode({ 'form-name': 'contact-form', ...newValues }),
                  })
                     .then(() => {
                        actions.resetForm();
                     })
                     .catch((err) => {
                        setError(err);
                        setTimeout(() => setError({}), 1500);
                        actions.resetForm();
                     });
               }
            }}
         >
            {({ isSubmitting }) => (
               <StyledForm ref={formRef} as={Form} name="contact-form" autoComplete="off" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                  <StyledInputElement name="name" label="Your name" type="text" />
                  <StyledInputElement name="email" label="Email Adress" type="email" />
                  <TextAreaElement name="message" label="Ask me for anything..." type="text" />
                  <ReCAPTCHA
                     sitekey={`${process.env.GATSBY_RECAPTCHA_KEY}`}
                     theme="dark"
                     hl="en"
                     onChange={(value) => {
                        setRecaptchaToken(value);
                        if (error.recaptcha) setError({ recaptcha: '' });
                     }}
                  />
                  {error.recaptcha && <ErrorMessage>{error.recaptcha}</ErrorMessage>}
                  {error.response && <ErrorMessage>{error.response}</ErrorMessage>}
                  <StyledButton type="submit" disabled={isSubmitting}>
                     {isSubmitting ? <Loader type="ThreeDots" color="hsl(0, 0%, 100%)" height={50} width={50} /> : 'Send message'}
                  </StyledButton>
               </StyledForm>
            )}
         </Formik>
      </ContactFormWrapper>
   );
};

export default ContactForm;
