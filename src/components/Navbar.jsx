import React from "react";

function Navbar() {
  return (
    <nav id="navbar" className="py-5">
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center">
        <div className="ms-xl-3">
          <img
            id="logo"
            src="/assets/CometByteLogo.png"
            alt="logo"
            className="rounded-pill"
          ></img>
        </div>
        <div className="navbarSections d-flex flex-row justify-content-center align-items-center pt-2 ps-5 mt-5 mt-xl-2 rounded">
          <h2 className="px-4 ">
            <a className="text-decoration-none text-dark" href="#projects">
              Projects
            </a>
          </h2>
          <h2 className="px-4">
            <a className="text-decoration-none text-dark" href="#services">
              Services
            </a>
          </h2>
          <h2 className="px-4">
            <a className="text-decoration-none text-dark" href="#skills">
              Skills
            </a>
          </h2>
          <h2 className="px-4">
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
