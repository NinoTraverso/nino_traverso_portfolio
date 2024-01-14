import React from "react";

function Navbar() {
  return (
    <nav id="navbar" className="py-5 mx-auto">
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center">
        <div className="ms-xl-3">
          <img
            id="logo"
            src="/assets/CometByteLogo.png"
            alt="logo"
            className="rounded-pill"
          ></img>
        </div>
        <div className="navbarSections d-flex flex-row justify-content-center align-items-center pt-2 px-1 mt-5 mt-xl-2 rounded">
          {/* ---------------------------------------------------------------------------PROJECTS--------------------------------------------------------------- */}
          <h2 className="projectsXl px-4 d-none d-xl-block">
            <a className="text-decoration-none text-dark" href="#projects">
              Projects
            </a>
          </h2>
          <h2 className="projectsMd px-2 d-none d-md-block d-xl-none">
            <a className="text-decoration-none text-dark" href="#projects">
              Projects
            </a>
          </h2>
          <h2 className="projectsSm px-3 d-block d-md-none">
            <a className="text-decoration-none text-dark" href="#projects">
              Projects
            </a>
          </h2>
          {/* ---------------------------------------------------------------------------SERVICES--------------------------------------------------------------- */}
          <h2 className="servicesXl px-4 d-none d-xl-block">
            <a className="text-decoration-none text-dark" href="#services">
              Services
            </a>
          </h2>
          <h2 className="servicesMd px-3 d-none d-md-block d-xl-none">
            <a className="text-decoration-none text-dark" href="#services">
              Services
            </a>
          </h2>
          <h2 className="servicesSm px-2 d-block d-md-none">
            <a className="text-decoration-none text-dark" href="#services">
              Services
            </a>
          </h2>
          {/* ---------------------------------------------------------------------------SKILLS--------------------------------------------------------------- */}
          <h2 className="skillsXl px-4 d-none d-xl-block">
            <a className="text-decoration-none text-dark" href="#skills">
              Skills
            </a>
          </h2>
          <h2 className="skillsMd px-3 d-none d-md-block d-xl-none">
            <a className="text-decoration-none text-dark" href="#skills">
              Skills
            </a>
          </h2>
          <h2 className="skillsSm px-2 d-block d-md-none">
            <a className="text-decoration-none text-dark" href="#skills">
              Skills
            </a>
          </h2>
          {/* ---------------------------------------------------------------------------CONTACT--------------------------------------------------------------- */}
          <h2 className="contactXl px-4 d-none d-xl-block">
            <a className="text-decoration-none text-dark" href="#contact">
              Contact
            </a>
          </h2>
          <h2 className="contactMd px-3 d-none d-md-block d-xl-none">
            <a className="text-decoration-none text-dark" href="#contact">
              Contact
            </a>
          </h2>
          <h2 className="contactSm px-2 d-block d-md-none">
            <a className="text-decoration-none text-dark" href="#contact">
              Contact
            </a>
          </h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
