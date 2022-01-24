import logo from "./../Img/logo.png";
import style from "./Header.module.scss";
// import Search from "../Searchbar";
import { useState } from "react";


const Header = () => {
  // const [cercaInput, setCercaInput] = useState("");

  // const handleCercaInput = (e) => setCercaInput(e.target.value);

  return (
    <div className={style.header}>
      <img
        src={logo}
        alt="logo"
        width="150px"
      />
    </div>
  );
};

export default Header;
