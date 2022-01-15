import styles from './App.module.scss';
import Header from './Components/Header/index.jsx';
import FlatsCard from './Components/FlatsCard'
import { data } from './Components/data/stays';
import { useState } from 'react'

function App() {
  const [state] = useState(data.rooms)
  return (
    <div className="App">
      <Header />
      <h1>Stays in Finland</h1>
      <div className={styles.cardContainer}>
        {state && data.rooms.map((flats) =>
          <FlatsCard
            key={flats.id}
            image={flats.photo}
            type={flats.type}
            beds={flats.beds}
            rating={flats.rating}
            title={flats.title}
          />
        )}
      </div>
    </div>
  );
};

export default App;
