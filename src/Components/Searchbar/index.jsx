import { data } from './../data/stays';
import style from "./Searchbar.module.scss";





const Search = ({ cercaInput, handleCercaInput}) =>{
  
  

 
  return (
    <div>
    <form>
      <label>Cerca:</label>
      <select
        value={cercaInput}
        onChange={handleCercaInput}
        type="text"
        name="cerca"
        id="cerca"
        placeholder="Search..."
      >

      <option value="">Tutti</option> 
      {/* {data.rooms.filter((flats => flats.city))
        .map((flats)=> (
      <option value={flats.city}>`{flats.city}, Finland`</option> 
        ))} */}
        <option value="Helsinki">Helsinki, Finland</option> 
        <option value="Turku">Turku, Finland</option> 
        <option value="Vaasa">Vaasa, Finland</option> 
        <option value="Oulu">Oulu, Finland</option> 

      </select>
      </form>
    </div>
  
  );
}
export default Search;