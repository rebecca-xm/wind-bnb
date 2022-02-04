import styles from "./App.module.scss";
import Header from "./Components/Header/index.jsx";
import FlatsCard from "./Components/FlatsCard";
import Search from "./Components/Searchbar/index";
import FooterModal from "./Components/Footer/FooterModal";
import Stays from "./Components/Stays/index";
import Footer from "./Components/Footer/index";
import { data } from "./Components/data/stays";
import { useState, useEffect } from "react";

function App() {
  const [cercaInput, setCercaInput] = useState("");
  const [rooms, setRooms] = useState(data);
  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);
  const handleCercaInput = (e) => setCercaInput(e.target.value);

  //MODAL SEARCH BAR
  const [isModalShown, setModalShown] = useState(false);
  const handleModal = () => {
    setModalShown(true);
  };    
  const closeModal = () => {
    setModalShown(false);
  };

//MODAL FOOTER
  const [isfootmod, setisfootmod] = useState(false);
  const handleHermitModal = () => {
    setisfootmod(true);
  };
  const closeFootModal = () => {
    setisfootmod(false);
  };

  useEffect(() => {
    const search = data.filter(
      (flats) =>
        flats.city.toLowerCase().includes(cercaInput.toLowerCase()) 
         && flats.maxGuests >= Number(counterAdult + counterChildren)
    );

    setRooms(search);
  }, [cercaInput, counterAdult, counterChildren]);

  return (
    <div className="App">
      <div>
        <Header onClickMod={handleModal} />
        {isModalShown && (
          <Search
            cercaInput={cercaInput}
            handleCercaInput={handleCercaInput}
            onClickNav={setCercaInput}
            offModal={closeModal}
            allAdults={counterAdult}
            allChildren={counterChildren}
            adultsMinus={() => setCounterAdult(counterAdult - 1)}
            adultsPlus={() => setCounterAdult(counterAdult + 1)}
            childrenMinus={() => setCounterChildren(counterChildren - 1)}
            childrenPlus={() => setCounterChildren(counterChildren + 1)}
          />
        )}
      </div>
<div onClick={closeModal}>
      <div onClick={closeFootModal}>
        <Stays count={rooms.length} />
        <section className={styles.cardContainer}>
          {rooms.map((flats) => (
            <FlatsCard
              key={flats.id}
              image={flats.photo}
              superHost={flats.superHost}
              type={flats.type}
              beds={flats.beds}
              rating={flats.rating}
              title={flats.title}
            />
          ))}
        </section>
       
      </div>

      <Footer handleHermitModal={handleHermitModal}/>
      {isfootmod && (<FooterModal closeFootModal={closeFootModal} />)}
    </div>
    </div>
  );
}

export default App;
