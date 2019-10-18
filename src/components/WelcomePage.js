import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CharacterList from './CharacterList'

export default function WelcomePage(props) {

  const [character, setCharacter] = useState([])
  
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

    // <Route exact path="/" component ={WelcomePage}/>
    // <Route exact path ="/CharacterList" render = {props => 
    //   (<CharacterList {...props} character={character}/>)}/>
  )
}
    
  
