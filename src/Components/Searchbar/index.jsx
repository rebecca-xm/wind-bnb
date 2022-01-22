import { useState,useEffect, setState } from 'react';
import { data } from './../data/stays';
import style from "./Searchbar.module.scss";





const Search = ({ cercaInput, handleCercaInput}) =>{
  
const [cityInp, setCityInp] = useState("");

// const cityInpi = `${cityInp}` + ", Finland" || null;
  
  useEffect(() => { setCityInp() },[])

 
  return (
    <div className={style.Searchbar}>
    <form className={style.formSearch}>
    <div className={style.locInp}>
      <label>Location:</label> <br/>
      <input
        value={cityInp}
        onChange={handleCercaInput}
        type="text"
        name="cerca"
        id="cerca"
        className={style.searchbarInput}
        placeholder="Search..."
      />
</div>
      {data.rooms.filter((flats => flats.city))
        .map((flats)=> (
      <input className={style.btnCity} type="button" onClick={(e) => setCityInp(`${flats.city}`)} value={flats.city}/>
        ))}
        {/* <input onClick={() => setCityInp("Helsinki")} value="Helsinki"/> 
        <input onClick={() => setCityInp("Turku")} value="Turku"/>
        <input onClick={() => setCityInp("Vaasa")} value="Vaasa"/>
        <input onClick={() => setCityInp("Oulu")} value="Oulu"/> */}

      

      </form>
    </div>
  
  );
}
export default Search;