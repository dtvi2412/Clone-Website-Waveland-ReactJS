import React from 'react';
import './Footer.css';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function Footer() {
  return (
    <footer>
      <div className="footer__top ">
        <div className="footer__music footer">
          <h1>Music News</h1>
          <div className="readmore1">
            <p> Read More </p>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div className="footer__sponsor footer">
          <h1>Become a Sponsor</h1>
        </div>
        <div className="footer__donate footer">
          <h1>Donate Today</h1>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__content">
          <div className="footer__bottom__one">
            <div className="footer__bottom__one__name">
              <h1>WAVELAND</h1>
              <p>102 ADELAIDE STREET EAST, SUITE 400,</p>
              <p>TORONTO, ON, M5C 1K9,</p>
              <p>CANADA</p>
              <p>HELLO@WAVELAND.CA</p>
            </div>
            <div className="footer__bottom__one__hours">
              <h1>HOURS</h1>
              <p>MON 9PM-5PM</p>
              <p>TUE 9PM-5PM</p>
              <p>WED 9PM-5PM</p>
              <p>THU 9PM-5PM</p>
              <p>FRI 9PM-5PM</p>
            </div>
          </div>
          <div className="footer__bottom__about">
            <h1>ABOUT</h1>
            <p>OUR VISION</p>
            <p>OUR TEAM</p>
            <p>LATEST NEWS</p>
            <p>CONTACT</p>
          </div>
          <div className="footer__bottom__about">
            <h1>WAYS TO HELP</h1>
            <p>DONATE</p>
            <p>BECOME A SPONSOR</p>
          </div>
          <div className="footer__bottom__about">
            <h1>IMPACT</h1>
            <p>SUCCESS STORIES</p>
          </div>
          <div className="footer__bottom_programs">
            <p>PLAYLIST SUBMISSION</p>
            <p>PROGRAMS</p>
            <p>PRIVACY POLLICY</p>
          </div>
          <div className="footer__bottom__subscribe">
            <h1>Subscribe</h1>
            <p>Sign up with your email address to receive news and updates.</p>
            <div className="input-email">
              <input type="text" placeholder="Email Address" />
              <button>SIGN UP</button>
            </div>
            <h3>We respect your privacy.</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
