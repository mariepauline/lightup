import './App.css';
// import backgroundImage from './dog_pattern.jpg';
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDog] = useState(null);
  const refresh = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
      setDog(data.message);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };
  useEffect(refresh, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let me light up your day!</h1>
      </header>
      <section className="dogs">
        <img src={dog} alt="Random dog" />
        <button onClick={refresh}>New cuteness?</button>
      </section>
    </div>
  );
}

export default App;
