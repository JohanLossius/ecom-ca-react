import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "./contact.scss";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(4, 'Your full name should be 4 characters or more.')
      .max(99, 'Your full name must be less than 100 characters.')
      .typeError('Your full name must be 4-99 characters.')
      .required('Please enter your full name'),
    email: yup
      .string()
      .email("You must enter a valid email address.")
      .required('Please enter a valid email address.'),
    subject: yup
      .string()
      .min(4, 'Your subject must be 4 characters or more.')
      .max(50, 'Your subject must be max 50 characters.')
      .typeError('Your must enter a valid text subject (string) of 4-50 characters.')
      .required('Please enter a valid subject of 4-50 characters.'),
    body: yup
      .string()
      .min(4, 'Your body text must be 4 characters or more.')
      .max(1000, 'Your body text must be max 1000 characters.')
      .typeError('Your body text (string) must be 4-1000 characters.')
      .required('Please enter a valid body text of 4-1000 characters.'),
  })
  .required();

function Contact() {
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    formState:
      { errors },
      trigger,
      getValues,
      reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

// Handle console logging, validation with yup and react form hook
  const handleBlur = async (field) => {

    // Trigger validation for the specified field when it loses focus
    const result = await trigger(field);

    if (result) {
      // Get the current values of the form fields
      const values = getValues();
      
      if (
        !errors.fullName && !errors.email && !errors.subject && !errors.body &&
        values.fullName && values.email && values.subject && values.body
      ) {
        console.log("Validation succeeded, data:", values);
      }
    }
  };

  function onSubmitHandler(data) {
    console.log("onSubmit data:", data);
    setSubmittedData(data);
    reset();
  }

  return (
    <main>
      <section className="feedback-cont">
        {submittedData ? (
          <div>
            <h2 className="success-message">Your message was successfully sent!</h2>
            <h3>The following was submitted:</h3>
            <div className="submitted-data-cont">
              <span className="span-contact">Name: <span className="submitted-data-span">{submittedData.fullName}</span></span>
              <span className="span-contact">Email: <span className="submitted-data-span">{submittedData.email}</span></span>
              <span className="span-contact">Subject: <span className="submitted-data-span">{submittedData.subject}</span></span>
              <span className="span-contact">Message: <span className="submitted-data-span">{submittedData.body}</span></span>
            </div>
            <p className="p-contact">We'll have the sloths run through the paperwork asap, and at the latest in 60 working days.</p>
            <p className="p-contact">Do you need a quicker feedback? Call for the owls.</p>
          </div>
        ) : (
          <div>
            <h2>Contact form</h2>
            <span className="span-contact">Fill in the form below to send us a message.</span>
          </div>
        )}
      </section>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor="fullName">Your full name</label>
        <input
          {...register("fullName")}
          onBlur={() => handleBlur("fullName")}
        />
        <span className="error-message span-contact">{errors.fullName?.message}</span>
        <label htmlFor="email">Your email</label>
        <input
          {...register("email")}
          onBlur={() => handleBlur("email")}
        />
        <span className="error-message span-contact">{errors.email?.message}</span>
        <label htmlFor="subject">Your subject</label>
        <input
          {...register("subject")}
          onBlur={() => handleBlur("subject")}
        />
        <span className="error-message span-contact">{errors.subject?.message}</span>
        <label htmlFor="body">Your message</label>
        <input
          {...register("body")}
          onBlur={() => handleBlur("body")}
        />
        <span className="error-message span-contact">{errors.body?.message}</span>
        <input type="submit" className="cta-general" />
      </form>
    </main>
  );
}

export default Contact;