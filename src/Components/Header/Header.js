import React from "react";
import logoImg from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <img src={logoImg} alt='' />
      <nav>
        <a href='/shop'>Shop</a>
        <a href='/review'>Order Review</a>
        <a href='/inventory'>Manage Inventory</a>
        <a
          href='https://www.linkedin.com/in/mohaiminul-islam-a7545318b/'
          target='_blank'
        >
          Know Developer
        </a>
      </nav>
    </div>
  );
};

export default Header;
