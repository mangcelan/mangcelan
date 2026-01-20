import React from 'react';
import BackToTop from './BackToTop';
import { BsFacebook } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsCart3 } from "react-icons/bs";
import '../sass/variables/_button.scss';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-wrap">
          <div className="title">
            <h2>蠻自然家具設計</h2>
            <h3>Mangcelan Furniture Design</h3>
          </div>

          <div className="contact-btn">
            {/* 粉專 */}
            <div id="container">
              <a className="contact" href="https://www.facebook.com/MoliHomeTW/">
                <span className="circle" aria-hidden="true">
                  <BsFacebook className="icon arrow" size="1.75rem" />
                </span>
                <span className="button-text fb">蠻自然家具設計 粉絲專頁</span>
              </a>
            </div>

            {/* 信箱 */}
            <div id="container">
              <a className="contact" href="mailto:mangcelan@gmail.com">
                <span className="circle" aria-hidden="true">
                  <BsEnvelope className="icon arrow" size="1.75rem" />
                </span>
                <span className="button-text mail">mangcelan@gmail.com</span>
              </a>
            </div>

            {/* pinkoi */}
            <div id="container">
              <a className="contact" href="https://www.pinkoi.com/store/mangcelan">
                <span className="circle" aria-hidden="true">
                  <BsCart3 className="icon arrow" size="1.75rem" />
                </span>
                <span className="button-text mail">Pinkoi 設計館</span>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <small>&copy; 2025 Mangcelan Furniture Design All Rights Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;

