import React, { useState } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Jumbotron, Container, Button, Fade } from "reactstrap";

export default function WelcomePage(props) {

  const  [fadeIn, setFadein] = useState(true);
  const toggle = () => setFadein(!fadeIn);

  return (
    <section className="welcome-page">
      <header>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Jumbotron fluid>
        <Container fluid>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img" 
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Container>
        </Jumbotron>
        </Fade>
      </header>

            <div className="character-list">
            <Button size="lg" block><Link to="/CharacterList" onClick={toggle}>CAST</Link></Button>
            </div>
      </section>   
    )
   
}
    
  
