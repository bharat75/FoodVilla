import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      Created By <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/chetannada/"
        target="_blank"
        title="Bharat Shubham's Linkedin Profile"
      >
        Bharat Shubham
      </a>
      <i className="fa-solid fa-copyright"></i>2024{" "}
      <a
        href="https://github.com/chetannada/Namaste-React"
        target="_blank"
        title="Food Villa Github Repository"
      >
        <strong>
          Food <span>Villa</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
