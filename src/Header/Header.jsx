import React from 'react';
import './Header.css';
import CloudIcon from '@material-ui/icons/Cloud';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">
          {' '}
          <img src="https://images.squarespace-cdn.com/content/5a591550f14aa14948c64386/1597865862888-LQ8QRSU0OYIB7U1RN7N3/WAVELAND+LOGO-01.png?format=1500w&content-type=image%2Fpng" />
        </a>
      </div>
      <div className="header__menu">
        <span>
          <a href="#">UPCOMING EVENTS</a>
        </span>
        <span>
          <a href="#">NEW MUSIC</a>
        </span>
        <span>
          <a href="#">ABOUT</a>
        </span>
        <span>
          <a href="#">STORE</a>
        </span>
        <span>
          <a href="#">PROGRAMS</a>
        </span>
        <span>
          <a href="#">IMPACT</a>
        </span>
        <span>
          <a href="#">WAYS TO HELP</a>
        </span>
        <span className="span__contact">
          <a href="#">OPPORTUNITIES</a>

          <a href="#">CONTACT</a>
        </span>
      </div>
      <div className="header__logo">
        <span>
          <a href="#">
            <CloudIcon />
          </a>
        </span>
        <span>
          <a href="#">
            <InstagramIcon />
          </a>
        </span>
        <span className="logo__fb">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </span>
      </div>
      <div className="header__search">
        <div className="header__input">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="header__cart">
          <span>CART (0)</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
