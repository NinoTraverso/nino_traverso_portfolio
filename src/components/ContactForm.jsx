import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div
        id="contactFormContainer"
        className="d-flex flex-column justify-content-center align-items-start p-3"
      >
        <div className="align-self-center">
          <img src="/assets/iconEmail.svg" alt="" />
        </div>
        <input
          className="w-50 my-4"
          type="text"
          name="user_name"
          placeholder="Your name"
        />
        <input
          className="w-50 my-4"
          type="email"
          name="user_email"
          placeholder="Your email"
        />
        <textarea
          className="w-75 my-4"
          name="message"
          placeholder="Write your message..."
        />
        <input className="align-self-start" type="submit" value="Send" />
      </div>
    </form>
  );
};
