import { useState } from "react";
import { data } from "./../data/stays";
import { SearchIcon } from "@heroicons/react/solid";

import styles from "./Searchbar.module.scss";

const Search = ({ cercaInput, handleCercaInput, onClickNav, offModal }) => {
  const buttonsName = data.map((el) => el.city);
  const uniq = [...new Set(buttonsName)];

  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);

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
        {/* <input onClick={() => setCityInp("Helsinki")} value="Helsinki"/> 
        <input onClick={() => setCityInp("Turku")} value="Turku"/>
        <input onClick={() => setCityInp("Vaasa")} value="Vaasa"/>
        <input onClick={() => setCityInp("Oulu")} value="Oulu"/> */}
      </form>
      <div>
        <form className={styles.formguest}>
          <div className={styles.gueInp}>
            <label>Guest</label>
            <input
              className={styles.guestBarInput}
              placeholder="Guest"
              value={counterAdult + counterChildren}
            />
          </div>
          <div className={styles.aduChi}>
            <label>Adult</label>
            <span>Ages 13 or above</span>
            <div>
              <button
                type="button"
                className={styles.plusMin}
                onClick={() => setCounterAdult(counterAdult - 1)}
                disabled={counterAdult <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={counterAdult} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={() => setCounterAdult(counterAdult + 1)}
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
                onClick={() => setCounterChildren(counterChildren - 1)}
                disabled={counterChildren <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={counterChildren} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={() => setCounterChildren(counterChildren + 1)}
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
