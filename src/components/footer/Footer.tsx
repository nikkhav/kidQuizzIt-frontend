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
            <div className="foot_2">
              <Link to="/catalog">Catalog</Link>
              <Link to="/about">About Us</Link>
            </div>
            <div className="foot_3">
              <Link to="/privacy">Privacy and Policy</Link>
              <Link to="/terms">Terms and condisions</Link>
            </div>
            <div className="foot_4">
              <Link to="tel:79999999999">
                <FaPhoneAlt />
                +7-999-999-99-99
              </Link>
              <Link to="mailto:support@kidquizit.com">
                <AiOutlineMail />
                support@kidquizit.com
              </Link>
            </div>
          </footer>
        </div>
      </div>
      <div className="foot_line"></div>
      <div className="copyright_bg">
        <div className="container">
          <div className="copyright">
            <h2>© Page was last edited on 22 October 2023</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
