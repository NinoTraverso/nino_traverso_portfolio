import React from "react";
import { ContactUs } from "./ContactForm";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <ContactUs />
      </div>

      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Contact;
