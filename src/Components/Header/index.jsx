import React from "react";
import logo from "./../Img/logo.png";
import style from "./Header.module.scss"

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" width="150px" />
      
    </div>
  );
};

export default Header;
