import logo from "./../Img/logo.png";
import style from "./Header.module.scss";
import Search from "../Searchbar";

const Header = () => {
  return (
    <div className={style.header}>
      <img
        src={logo}
        alt="logo"
        width="150px"
      />
      <Search />
    </div>
  );
};

export default Header;
