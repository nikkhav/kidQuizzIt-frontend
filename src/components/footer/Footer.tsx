import React from "react";
import { Link } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import "./footer.module.css";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footer_bg}>
        <div className="container">
          <footer>
            <Link to="/">
              <h1 className={styles.logoText}>KidQuizIt</h1>
              {/*<img src={logo} className="logo" alt="" />*/}
            </Link>
            <div className={styles.foot_3}>
              <Link to="/privacy">Privacy and Policy</Link>
              <Link to="/terms">Terms and Conditions</Link>
            </div>
            <div className={styles.copyright}>
              <h2>Copyright © YouGifted, LLC. All rights reserved</h2>
              <a
                className={styles.mail}
                href={"mailto:commercial@kidquizit.com"}
              >
                <h2>Commercial: commercial@kidquizit.com</h2>
              </a>
              <a href={"mailto:support@kidquizit.com"}>
                <h2>Support: support@kidquizit.com</h2>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
