"use client";

import React from "react";
import { Lato } from "next/font/google";
import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const contactSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().notRequired(),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  subject: Yup.string().required("This field is required"),
  message: Yup.string().required("This field is required"),
});

const Contact = () => {
  return (
    <div className="bg-stockists w-full min-h-screen flex flex-col items-center gap-10 px-5 py-16 md:p-24 md:items-center">
      <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
        CONTACT US
      </h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        {(props) => (
          <Form className="w-full flex flex-col justify-between gap-5">
            <div className="w-full justify-between flex flex-row gap-5">
              <div className="w-1/2">
                <label className="text-md" htmlFor="firstName">
                  First Name <span className="text-xs">(required)</span>
                </label>
                <Field
                  className="w-full  p-2"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                />
                <ErrorMessage name="firstName" />
              </div>
              <div className="w-1/2">
                <label className="text-md" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  type="text"
                  className="w-full p-2"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                />
                <ErrorMessage name="lastName" />
              </div>
            </div>
            <div>
              <label className="text-md" htmlFor="email">
                Email <span className="text-xs">(required)</span>
              </label>
              <Field
                type="email"
                className="w-full  p-2"
                id="email"
                name="email"
                placeholder="jane.doe@example.com"
              />
              <ErrorMessage className="text-red-500" name="email" />
            </div>
            <div>
              <label className="text-md" htmlFor="subject">
                Subject <span className="text-xs">(required)</span>
              </label>
              <Field
                type="text"
                className="w-full p-2"
                id="subject"
                name="subject"
                placeholder="Inquiry about Becoming a Stockist"
              />
              <ErrorMessage name="subject" />
            </div>
            <div>
              <label className="text-md" htmlFor="message">
                Message <span className="text-xs">(required)</span>
              </label>
              <Field
                component="textarea"
                rows="5"
                className="w-full p-2"
                id="message"
                name="message"
                placeholder="Hello Hanazakari Team, I'm interested in becoming a stockist for your exquisite sparkling sake. Could you please provide more information on the process and requirements? Thank you!"
              />
              <ErrorMessage name="message" />
            </div>
            <button
              type="submit"
              className="m-auto w-32 p-4 bg-black text-white"
            >
              SUBMIT
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
