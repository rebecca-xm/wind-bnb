import logo from "./../Img/logo.png";
import styles from "./Header.module.scss";
import { SearchIcon } from "@heroicons/react/solid";

const Header = ({ onClickMod }) => {
  return (
    <div className={styles.header}>
     <a href="/"> <img src={logo} alt="logo" width="150px" /></a>
      <div className={styles.Searchbar}>
        <input
          className={styles.SearchbarInput}
          type="search"
          placeholder="Location"
          onClick={onClickMod}
        />
        <input
          className={styles.SearchbarInput}
          type="search"
          placeholder="Guest"
          onClick={onClickMod}
        />
        <SearchIcon className={styles.searchIcon} onClick={onClickMod} />
      </div>
    </div>
  );
};

export default Header;
