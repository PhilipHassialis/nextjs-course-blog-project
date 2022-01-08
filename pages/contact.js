import React from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Contact me" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
