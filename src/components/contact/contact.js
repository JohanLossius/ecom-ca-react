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
  const {
    register,
    handleSubmit,
    formState:
      { errors },
      trigger,
      getValues,
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

  function onSubmit(data) {
    console.log("onSubmit data:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">Your full name</label>
      <input
        {...register("fullName")}
        onBlur={() => handleBlur("fullName")}
      />
      <p className="error-message">{errors.fullName?.message}</p>
      <label htmlFor="email">Your email</label>
      <input
        {...register("email")}
        onBlur={() => handleBlur("email")}
      />
      <p className="error-message">{errors.email?.message}</p>
      <label htmlFor="subject">Your subject</label>
      <input
        {...register("subject")}
        onBlur={() => handleBlur("subject")}
      />
      <p className="error-message">{errors.subject?.message}</p>
      <label htmlFor="body">Your message</label>
      <input
        {...register("body")}
        onBlur={() => handleBlur("body")}
      />
      <p className="error-message">{errors.body?.message}</p>
      <input type="submit" />
    </form>
  );
}

export default Contact;