import logo from "./../Img/logo.png";
import style from "./Header.module.scss";
// import Search from "../Searchbar";
// import { useState } from "react";
import {SearchIcon} from "@heroicons/react/solid"

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
     <div className={style.Searchbar}>
      <input className={style.SearchbarInput}
        type="search"
        placeholder="Search..."
      />   
       <input className={style.SearchbarInput}
        type="search"
        placeholder="Search..."
      />  
      <SearchIcon className={style.searchIcon}/>
    </div> 
    </div>
  );
};

export default Header;
