import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">kowshik</h1>

        <ul className="footer__list">
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <span className="footer__copy">&#169; kowshik All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
