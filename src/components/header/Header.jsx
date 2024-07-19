import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import "./header.scss";
import image from '../../assets/image.png'

const Header = ({ title }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header id="header">
      <div className="header">
        <div className="header__left">
          <RxHamburgerMenu className="hamburger" onClick={toggleSidebar} />
          <form action="">
            <IoSearchSharp />
            <input type="text" placeholder="search..." />
          </form>
        </div>
        <div className="header__right">
          <select>
            <option value="en">English</option>
            <option value="ru">Russia</option>
            <option value="uz">Uzbek</option>
          </select>
          <img src={image} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
