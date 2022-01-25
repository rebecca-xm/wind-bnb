import { useState, useEffect, setState } from "react";
import { data } from "./../data/stays";
import style from "./Searchbar.module.scss";

const Search = ({ cercaInput, handleCercaInput, onClickNav }) => {
  const buttonsName = data.map((el) => el.city);
  const uniq = [...new Set(buttonsName)];

  const [counterAdult, setCounterAdult] = useState(0)
  const [counterChildren, setCounterChildren] = useState(0)

  // const handleCountPlus = setCounterAdult + 1;

  
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
      <div >
        <form className={style.formguest}>
          <div className={style.gueInp}>
            <label>Guest</label>
            <input
              className={style.guestBarInput}
              placeholder="Guest"
              value={counterAdult + counterChildren}

            />
          </div>
          <div className={style.aduChi}>
            <label>Adult</label>
            <span>Ages 13 or above</span>
            <div>
              <button 
              type="button"
              className={style.plusMin}
              onClick={() => setCounterAdult(counterAdult - 1)}>-</button>
              <input
              className={style.inpFormAdCh}
                value={counterAdult}
              />
              <button 
              type="button"
              className={style.plusMin}
              onClick={() => setCounterAdult(counterAdult + 1)}
              >+</button>
            </div>
          </div>
          <div className={style.aduChi}>
            <label>Children</label>
            <span>Ages 2-12</span>
            <div>
              <button 
              type="button"
              className={style.plusMin}
              onClick={() => setCounterChildren(counterChildren - 1)}>-</button>
              <input
              className={style.inpFormAdCh}
              value={counterChildren}
              />
              <button
              type="button"
              className={style.plusMin}
              onClick={() => setCounterChildren(counterChildren + 1)}
>+</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Search;
