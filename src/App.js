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
      <div>{state && data.rooms.map((flats) => <FlatsCard key={flats.id} title={flats.country}  description={flats.title} image={flats.photo}/>)}
      </div></div>
  );
}

export default App;
