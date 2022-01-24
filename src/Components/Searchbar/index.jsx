import { useState, useEffect, setState } from "react";
import { data } from "./../data/stays";
import style from "./Searchbar.module.scss";

const Search = ({ cercaInput, handleCercaInput, onClickNav }) => {
  const buttonsName = data.map((el) => el.city);
  const uniq = [...new Set(buttonsName)];

  return (
    <div className={style.Searchbar}>
      <form className={style.formSearch}>
        <div className={style.locInp}>
          <label>Location:</label> <br />
          <input
            value={cercaInput}
            onChange={handleCercaInput}
            type="text"
            name="cerca"
            id="cerca"
            className={style.searchbarInput}
            placeholder="Search..."
          />
        </div>
        {uniq.map((element) => (
          <input
            className={style.btnCity}
            type="button"
            onClick={() => onClickNav(element)}
            value={element}
          />
        ))}
        {/* <input onClick={() => setCityInp("Helsinki")} value="Helsinki"/> 
        <input onClick={() => setCityInp("Turku")} value="Turku"/>
        <input onClick={() => setCityInp("Vaasa")} value="Vaasa"/>
        <input onClick={() => setCityInp("Oulu")} value="Oulu"/> */}
      </form>
    </div>
  );
};
export default Search;
