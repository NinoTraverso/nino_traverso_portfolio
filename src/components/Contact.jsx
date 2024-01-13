import React from "react";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Contact;
