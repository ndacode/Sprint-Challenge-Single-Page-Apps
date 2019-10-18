import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

// create a query useState and have the inputhandler return the data that's equal to the query
// const [query, setQuery] = useState(0)
//

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      // console.log(response);
      setCharacter(response.data.results);
      setImage(response.data.results.image);
      setSearchResults(response.data.results);
      
    })
    .catch (error => {
      console.log("The data was not returned", error);
    })
  }, []);

useEffect(() => {
  setSearchResults( 
      character.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
    )
);
      }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
    // setCharacter(event.target.name);
    // return <CharacterCard name={query.name}/>
  }

    
  // const card = character.find( character => character.id === Number(character.id));

  return (


    <section className="characters">
      <form className = "search">
        <input
        type = "text"
        onChange = {handleInputChange}
        value={query}
        name="name"
        placeholder="search by name"/>
      </form>
      <div className="character-list">
          <Link to="/">Welcome</Link>
      </div>
 
      <h2>
        {/* TODO: `array.map()` over your state here! */}
        {searchResults.map(character => {
          return (
          <CharacterCard key = {character.id} name ={character.name} status = {character.status} image = {character.image}/>
          )
        })}
      </h2>
    </section>
  );
}