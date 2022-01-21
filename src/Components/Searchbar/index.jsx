import { data } from "../data/stays";
import { useState } from "react";
import style from "./Searchbar.module.scss";
// importata libreria npm install @heroicons/react
import {SearchIcon} from "@heroicons/react/solid"
// importata libreria npm install --save react-date-range
// import "react-date-range/dist/styles.css"; // style css
// import "react-date-range/dist/theme/default.css"; // theme css
// import {DateRangePicker} from "react-date-range";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  //calendario inzio e fine soggiorno 
  // const [startDate, setstartDate] = useState(new Date());
  // const [endDate, setendDate] = useState(new Date());
  
  // const handSelect =(ranges) => {
  //   setstartDate(ranges.selection.startDate)
  //   setendDate(ranges.selection.endDate)
  // }

  // const selectionRange = {
  //   startDate:startDate,
  //   endDate:endDate,
  //   key:"Selection",
  // }

 
  return (
    <div className={style.Searchbar}>
      <input className={style.SearchbarInput}
      value={searchTerm}
        type="search"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
      />
      {data.rooms.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (
            val.city.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return val
          }
        })
        .map((val, key) => {
          <div className={style.Search} key={key} >
            <p>{val.city} </p>
          </div>
        })}
    <SearchIcon className={style.searchIcon}/>
    
    {/* {searchTerm && (
      <div>
      <DateRangePicker 
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={["#FD5B61"]}
      onChange={handSelect}
    />
    </div>
    )} */}
    </div>
  );
}
export default Search;