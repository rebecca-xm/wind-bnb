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
      <main>
      <h1>Stays in Finland</h1>{state && data.rooms.map((flats) => <FlatsCard key={flats.id} image={flats.photo} type={flats.type}  beds={flats.beds} rating={flats.rating} title={flats.title}  />)}
      </main>
    </div>
  );
}

export default App;
