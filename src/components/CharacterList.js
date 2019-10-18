import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
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
  }

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
        {searchResults.map(character => {
          return (
          <CharacterCard key = {character.id} name ={character.name} status = {character.status} image = {character.image}/>
          )
        })}
      </h2>
    </section>
  );
}