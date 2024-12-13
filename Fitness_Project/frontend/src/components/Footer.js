import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>MERN Stack Project</h4>
          <p>Location: Bashundhora, Dhaka</p>
          <p>Phone: 01605080977</p>
          <p>Email: hossainalif696@gmail.com</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/aliftalha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/AlifTalha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.facebook.com/alifhossaintalha19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>Created By : Alif Hossain Talha</h2>
        {/* <p>Email: <a href="mailto:hossainalif696@gmail.com">hossainalif696@gmail.com</a></p> */}
        {/* <nav>
          <a href="#">Aktuelles</a> | <a href="#">Startseite</a> | <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
