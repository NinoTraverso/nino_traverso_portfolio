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
            className="d-flex flex-column justify-content-start align-items.-center"
          >
            <h1 className="">ABOUT ME</h1>
            <h4 className="me-5">
              Hey there! I'm a passionate full-stack developer who thrives on
              continuous learning. The dynamic world of web development and
              design fuels my excitement for creating innovative solutions and
              tackling new challenges daily. I love bringing ideas to life and
              enhancing my tech knowledge. Beyond coding, I'm also a passionate
              Astronomer, reason why I chose this was one of my Capstone
              projects. I like working on different projects and topics; not
              only it aids my development skills but also allows me to learn new
              things in different fields.
            </h4>
          </div>
        </div>
      </div>

      <p>&copy; {currentYear} CometByte</p>
    </footer>
  );
}

export default Contact;
