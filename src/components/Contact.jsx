import React from "react";
import { ContactUs } from "./ContactForm";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="d-flex flex-column justify-content-end mt-5">
      <h1
        id="contact"
        className="sectionTitle d-none d-xl-block align-self-end"
      >
        CONTACT
      </h1>
      <h1
        id="contact"
        className="sectionTitleMedium d-none d-md-block d-xl-none text-center"
      >
        CONTACT
      </h1>
      <h1
        id="contact"
        className="sectionTitleSmall d-block d-md-none text-center"
      >
        CONTACT
      </h1>
      <div className="d-flex flex-column flex-xl-row align-items-center mt-5 mb-5">
        <div className="w-75 mx-5 mt-3 mb-5">
          <ContactUs />
        </div>
        <div
          id="infoContainer"
          className="w-75 d-flex flex-column flex-xl-row justify-content-center align-items-center mt-5"
        >
          <div id="infoSvgContainer" className="align-self-center">
            <img src="/assets/iconInfo.svg" alt="emailIcon" />
          </div>
          <div
            id="infoTextContainer"
            className="d-flex flex-column justify-content-start align-items.-center me-md-5"
          >
            <h1 className="text-center">ABOUT ME</h1>
            <h4 className="text-center">
              I became a full-stack developer because I love bringing to life
              ideas and creating innovative web solutions while tackling new
              challenges daily. I like working on different projects and topics;
              not only it aids my development skills but also allows me to learn
              new things in different fields.
            </h4>
          </div>
        </div>
      </div>
      <div
        id="footerEndContainer"
        className="d-flex flex-row justify-content-center align-items-center mt-5"
      >
        <p className="mt-3">&copy; {currentYear} - CometByte</p>
        <div id="logoContainerGithub" className="ms-3">
          <a href="https://github.com/NinoTraverso">
            <img src="/assets/logoGithub.png" alt="githubLogo" />
          </a>
        </div>
        <div id="logoContainerLinkedin" className="ms-1 me-3">
          <a href="https://www.linkedin.com/in/ninotraverso-developer-astronomy-planetarysciences/">
            <img src="/assets/logoLinkedin.png" alt="linkedinLogo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
