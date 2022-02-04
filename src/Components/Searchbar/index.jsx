import { data } from "./../data/stays";
import { SearchIcon } from "@heroicons/react/solid";

import styles from "./Searchbar.module.scss";

const Search = ({
  cercaInput,
  handleCercaInput,
  onClickNav,
  offModal,
  allAdults,
  allChildren,
  adultsMinus,
  adultsPlus,
  childrenMinus,
  childrenPlus
}) => {
  const buttonsName = data.map((el) => el.city);
  const uniq = [...new Set(buttonsName)];



  // const [counterAdult, setCounterAdult] = useState(0);
  // const [counterChildren, setCounterChildren] = useState(0);

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
          <div className={styles.divCity}>
          <img className={styles.iconMap} alt="" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-map-back-to-school-kmg-design-glyph-kmg-design.png"/>
          <input
            className={styles.btnCity}
            type="button"
            onClick={() => onClickNav(element)}
            value={element}
          />
          </div>
        ))}
      </form>
      <div>
        <form className={styles.formguest}>
          <div className={styles.gueInp}>
            <label>Guest</label>
            <input
              className={styles.guestBarInput}
              value={allAdults + allChildren}
            />
          </div>
          <div className={styles.aduChi}>
            <label className={styles.label}>Adult</label>
            <span>Ages 13 or above</span>
            <div>
              <button
                type="button"
                className={styles.plusMin}
                onClick={adultsMinus}
                disabled={allAdults <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={allAdults} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={adultsPlus}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.aduChi}>
            <label className={styles.label}>Children</label>
            <span>Ages 2-12</span>
            <div>
              <button
                type="button"
                className={styles.plusMin}
                onClick={childrenMinus}
                disabled={allChildren <= 0}
              >
                -
              </button>
              <input className={styles.inpFormAdCh} value={allChildren} />
              <button
                type="button"
                className={styles.plusMin}
                onClick={childrenPlus}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
          <div className={styles.Icona}>
            

            <SearchIcon className={styles.searchIcon}
              onClick={offModal} />
            
          </div>
    </div>
  );
};
export default Search;
