import React, { useState } from 'react';
import './Header.css';
import CloudIcon from '@material-ui/icons/Cloud';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
  const [checkMenu, setCheckMenu] = useState(false);
  const handleMenu = () => {
    let menu = document.getElementById('menu');
    let header = document.getElementById('header');
    let header__logo = document.getElementById('header__logo');
    let cart = document.getElementById('cartShopping');
    let close = document.getElementById('close');
    if (!checkMenu) {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.alignItems = 'flex-start';

      header__logo.style.display = 'none';

      cart.style.display = 'none';

      close.style.display = 'inline-block';

      setCheckMenu(true);
    } else {
      menu.style.display = 'none';

      header.style.background = '#fff';
      header.style.color = '#111';

      header__logo.style.display = 'inline-block';

      cart.style.display = 'inline-block';
      close.style.display = 'none';
      setCheckMenu(false);
    }
  };
  return (
    <header className="header" id="header">
      <div className="header__logo" id="header__logo">
        <a href="#">
          {' '}
          <img src="https://images.squarespace-cdn.com/content/5a591550f14aa14948c64386/1597865862888-LQ8QRSU0OYIB7U1RN7N3/WAVELAND+LOGO-01.png?format=1500w&content-type=image%2Fpng" />
        </a>
      </div>
      <div className="header__menu" id="menu">
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
      <div className="header__logo1">
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
          <div>
            <span> CART (0)</span>
            <div className="cart-icon">
              <ShoppingCartIcon id="cartShopping" />
              {!checkMenu && (
                <MenuIcon
                  onClick={() => {
                    handleMenu();
                  }}
                />
              )}

              <div id="close">
                <CloseIcon
                  onClick={() => {
                    handleMenu();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
