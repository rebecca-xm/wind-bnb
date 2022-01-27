// import logo from "./../Img/logo.png";
// import styles from "./Header.module.scss";
// import Search from "../Searchbar";
// import { data } from "../data/stays";
// import {SearchIcon} from "@heroicons/react/solid";
// import { useState, useEffect } from "react";
// import Stays from "../Stays";
// import FlatsCard from "../FlatsCard";


// const Header = () => {
//    const [cercaInput, setCercaInput] = useState("");
//    const [rooms, setRooms] = useState(data);
//   const handleCercaInput = (e) => setCercaInput(e.target.value);

//   const [isModalShown, setModalShown] = useState(false);

//   const handleModal = () => {
//     setModalShown(true);
//   }

//   useEffect(() => {
//     const search = data.filter(
//       (flats) =>
//         flats.city.toLowerCase().includes(cercaInput.toLowerCase()) ||
//         cercaInput === ""
//     );

//     setRooms(search);
//   }, [cercaInput]);


//   return (
//     <>
//     <div className={styles.header}>
//       <img
//         src={logo}
//         alt="logo"
//         width="150px"
//       />
//      <div className={styles.Searchbar}>
//       <input className={styles.SearchbarInput}
//         type="search"
//         placeholder="Search..."
//         onClick={handleModal}
//       />   
//        <input className={styles.SearchbarInput}
//         type="search"
//         placeholder="Search..."
//         onClick={handleModal}
//       />  
// <<<<<<< Modale
//         {isModalShown && <Search
//         cercaInput={cercaInput}
//         handleCercaInput={handleCercaInput}
//         onClickNav={setCercaInput}
      
//       /> }
//       <SearchIcon className={styles.searchIcon}
//       onClick={handleModal}
//       />
// =======
//       <SearchIcon className={styles.searchIcon}/>
// >>>>>>> main
//     </div> 
//     </div>
//        <Stays count={rooms.length} />
//        <section className={styles.cardContainer}>
//          {rooms.map((flats) => (
//            <FlatsCard
//              key={flats.id}
//              image={flats.photo}
//              superHost={flats.superHost}
//              type={flats.type}
//              beds={flats.beds}
//              rating={flats.rating}
//              title={flats.title}
//            />
//          ))}
//        </section>
//        <Stays count={rooms.length} />
//        </>
//   );
// };

// export default Header;
