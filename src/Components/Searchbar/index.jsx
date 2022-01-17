import { data } from "../data/stays";
import { useState } from "react";
import style from "./Searchbar.module.scss";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={style.Searchbar}>
      <input
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
          <div className={style.Search} key={key}>
            <p>{val.city} </p>
          </div>
        })}
    </div>
  );
}
export default Search;
