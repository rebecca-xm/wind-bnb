import styles from './App.module.scss';
import Header from './Components/Header/index.jsx';
import FlatsCard from './Components/FlatsCard';
import Search from "./Components/Searchbar/index";

import { data } from './Components/data/stays';
import { useState } from 'react';


function App() {
  const [cercaInput, setCercaInput] = useState("");

  const handleCercaInput = (e) => setCercaInput(e.target.value);
  
  return (
    <div className="App">
      <Header />
      <Search cercaInput={cercaInput} handleCercaInput={handleCercaInput} />
      <h1>Stays in Finland</h1>
      <section className={styles.cardContainer}>
        {data.rooms.filter(flats => flats.city.toLowerCase().includes(cercaInput.toLowerCase()) || cercaInput === '')
        .map((flats)=> (
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
  );
};

export default App;
