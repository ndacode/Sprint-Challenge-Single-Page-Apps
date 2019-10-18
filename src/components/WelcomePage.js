import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';


export default function WelcomePage(props) {

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img" 
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <div className="character-list">
          <Link to="/">Welcome</Link>
          <Link to="/CharacterList">CAST</Link>
      </div>
    </section>
  )
}
    
  
