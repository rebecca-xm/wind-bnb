import styles from "./App.module.scss";
import Header from "./Components/Header/index.jsx";
import FlatsCard from "./Components/FlatsCard";
import Search from "./Components/Searchbar/index";
import Stays from "./Components/Stays/index";
import { data } from "./Components/data/stays";
import { useState, useEffect } from "react";

function App() {
  const [cercaInput, setCercaInput] = useState("");
  const [rooms, setRooms] = useState(data);

  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);

  const handleCercaInput = (e) => setCercaInput(e.target.value);
  const [isModalShown, setModalShown] = useState(false);

  const handleModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  // const sumAdCh = counterAdult + counterChildren;
  
  useEffect(() => {
    const search = data.filter(
      (flats) =>
        flats.city.toLowerCase().includes(cercaInput.toLowerCase()) ||
        cercaInput === "" && flats.maxGuests >= (counterAdult + counterChildren)
    );
    // const searchG = data.filter(
    //   (flats) =>
    //   flats.maxGuests>=(sumAdCh)
    // );

    setRooms(search);
    console.log(search);
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
            adultiM={() => setCounterAdult(counterAdult - 1)}
            adultiP={() => setCounterAdult(counterAdult + 1)}
            bambiniM={() => setCounterChildren(counterChildren - 1)}
            bambiniP={() => setCounterChildren(counterChildren + 1)}
            totAdult={counterAdult}
            totChild={counterChildren}
          />
        )}
      </div>
      <div onClick={closeModal}>
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
        <Stays count={rooms.length} />
      </div>
    </div>
  );
}

export default App;
