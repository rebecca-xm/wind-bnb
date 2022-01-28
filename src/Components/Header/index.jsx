import logo from "./../Img/logo.png";
import styles from "./Header.module.scss";
import {SearchIcon} from "@heroicons/react/solid"

const Header = ({ onClickMod }) =>  {


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
        onClick= {onClickMod}
      />   
       <input className={styles.SearchbarInput}
        type="search"
        placeholder="Search..."
        onClick= {onClickMod}
      />  
      <SearchIcon className={styles.searchIcon}
        onClick= {onClickMod}
      />
    </div> 
    </div>
  );
};

export default Header;

