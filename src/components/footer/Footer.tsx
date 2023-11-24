import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../icons/logo-png-removebg-preview.png";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="container">
          <footer>
            <Link to="/" className="foot_logo">
              <img src={logo} alt="" />
            </Link>
            <div className="foot_3">
              <Link to="/privacy">Privacy and Policy</Link>
              <Link to="/terms">Terms and conditions</Link>
            </div>
            <div className="copyright">
              <h2>Copyright © YouGifted, LLC. All right reserved</h2>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
