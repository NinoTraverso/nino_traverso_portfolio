import React from "react";
import { ContactUs } from "./ContactForm";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="d-flex flex-column justify-content-end mt-5">
      <h1 id="projects" className="sectionTitle d-none d-xl-block">
        CONTACT
      </h1>
      <h1
        id="projects"
        className="sectionTitleMedium d-none d-md-block d-xl-none"
      >
        CONTACT
      </h1>
      <h1 id="projects" className="sectionTitleSmall d-block d-md-none">
        CONTACT
      </h1>
      <div className="d-flex flex-column flex-xl-row align-items-center mt-5">
        <div className="w-75 mx-5 mt-3">
          <ContactUs />
        </div>
        <div
          id="infoContainer"
          className="w-75 d-flex flex-row justify-content-center align-items-center"
        >
          <div id="infoSvgContainer" className="align-self-center">
            <img src="/assets/iconInfo.svg" alt="emailIcon" />
          </div>
          <h1 className="">ABOUT ME</h1>
          <p></p>
        </div>
      </div>

      <p>&copy; {currentYear} CometByte</p>
    </footer>
  );
}

export default Contact;
