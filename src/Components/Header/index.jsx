import logo from "./../Img/logo.png";
import styles from "./Header.module.scss";
// import Search from "../Searchbar";
// import { useState } from "react";
import {SearchIcon} from "@heroicons/react/solid"

const Header = () => {
  // const [cercaInput, setCercaInput] = useState("");

  // const handleCercaInput = (e) => setCercaInput(e.target.value);

  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="logo"
        width="150px"
      />
     <div className={styles.Searchbar}>
      <input className={styles.SearchbarInput}
        type="search"
        placeholder="Search..."
      />   
       <input className={styles.SearchbarInput}
        type="search"
        placeholder="Search..."
      />  
      <SearchIcon className={styles.searchIcon}/>
    </div> 
    </div>
  );
};

export default Header;
