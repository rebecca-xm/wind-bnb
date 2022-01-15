import './App.css';
import Header from './Components/Header/index.jsx';
import FlatsCard from './Components/FlatsCard'
import { data } from './Components/data/stays';
import { useState } from 'react'

function App() {
  const [state] = useState(data.rooms)
  return (
    <div className="App">
      <Header />
      <div>{state && data.rooms.map((flats) => <FlatsCard key={flats.id} country={flats.country}  title={flats.title} maxGuests={flats.maxGuests} image={flats.photo}/>)}
      </div></div>
  );
}

export default App;
