
import style from "./Searchbar.module.scss";





const Search = ({ cercaInput, handleCercaInput}) =>{
  
  

 
  return (
    <div>
      <p>Cerca:</p>
      <input
        value={cercaInput}
        onChange={handleCercaInput}
        type="text"
        name="cerca"
        id="cerca"
        placeholder="Search..."
      />
    </div>
  
  );
}
export default Search;