import React from "react";
import { Route, NavLink } from 'react-router-dom';
import { Card, CardLink, CardSubtitle, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard(props) {

console.log(props);
  return (
  


  <span>
    <Card className="card" width ="40px">

      <div className="character" key = {props.id}>
      <CardTitle>{props.name}</CardTitle>
        <img src = {props.image}></img>
        
        <CardSubtitle>{props.status}</CardSubtitle>
      </div>
      <Route exact path = "/CharacterList/:id" render={()=> <div key = {props.id} src = {props.image} name = {props.name} status = {props.status}/>}/>
    </Card>

  </span>
  )
}