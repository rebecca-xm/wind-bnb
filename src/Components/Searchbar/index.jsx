import { useState, useEffect } from "react";
import { data } from "./../data/stays";
import { SearchIcon } from "@heroicons/react/solid";

import styles from "./Searchbar.module.scss";

const Search = ({ cercaInput, handleCercaInput, onClickNav, offModal, adultiM, adultiP, bambiniM, bambiniP, totAdult, totChild }) => {
  const buttonsName = data.map((el) => el.city);

  const uniq = [...new Set(buttonsName)];







  // const handleCountPlus = setCounterAdult + 1;

  return (
    <div className={styles.Searchbar}>
      <form className={styles.formSearch}>
        <div className={styles.locInp}>
          <label>Location:</label> <br />
          <input
            value={cercaInput}
            onChange={handleCercaInput}
            type="text"
            name="cerca"
            id="cerca"
            className={styles.searchbarInput}
            placeholder="Search..."
          />
        </div>
        {uniq.map((element) => (
          <input
            className={styles.btnCity}
            type="button"
            onClick={() => onClickNav(element)}
            value={element}
          />
        ))}
        
      </form>
      <div>
        <form className={styles.formguest}>
          <div className={styles.gueInp}>
            <label>Guest</label>
            <input
              
              className={styles.guestBarInput}
              placeholder="Guest"
              value={totAdult + totChild}
            />
          </div>
          <div className={styles.aduChi}>
            <label>Adult</label>
            <span>Ages 13 or above</span>
            <div>
              <button
                type="button"
                className={styles.plusMin}
                onClick={adultiM}
                disabled={totAdult <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={totAdult} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={adultiP}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.aduChi}>
            <label>Children</label>
            <span>Ages 2-12</span>
            <div>
              <button
                type="button"
                className={styles.plusMin}
                onClick={bambiniM}
                disabled={totChild <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={totChild} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={bambiniP}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.Icona}>
          <SearchIcon className={styles.searchIcon} 
          onClick={offModal} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Search;
