import './App.css';
// import backgroundImage from './dog_pattern.jpg';
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDog] = useState(null);
   useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
         .then((response) => response.json())
         .then((data) => {
            setDog(data.message);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let me light up your day!</h1>
      </header>
      <section>
        <img src={dog} alt="Random dog" />
      </section>
    </div>
  );
}

export default App;
