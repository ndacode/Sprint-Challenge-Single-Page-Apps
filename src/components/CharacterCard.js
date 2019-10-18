import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Card,  CardSubtitle, CardTitle, Fade } from "reactstrap";


export default function CharacterCard(props) {

  const  [fadeIn, setFadein] = useState(true);
  const toggle = () => setFadein(!fadeIn);

console.log(props);

  return (

    <span>
      <Fade in={fadeIn} tag="h5" className="mt-3">
      <Card className="card" width ="40px">
        <div className="character" key = {props.id}>
        <CardTitle>{props.name}</CardTitle>
          <img src = {props.image}></img>
          
          <CardSubtitle>{props.status}</CardSubtitle>
        </div>
        <Route exact path = "/CharacterList/:id" render={()=> <div key = {props.id} src = {props.image} name = {props.name} status = {props.status}/>}/>
      </Card>
      </Fade>
    </span>
  )
}