import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component = {WelcomePage}/>
       <Route exact path = "/CharacterList" component = {CharacterList} />
       <Route exact path = "/CharacterCard" component = {CharacterCard}/>
    </main>
  );
}




// export default function App() {

  

//   return (
//     <main>
//       <Header />
//       <Route exact path="/" component = {WelcomePage}/>
//        <Route exact path = "/CharacterList" component = {CharacterList} />
//        <Route exact path = "/CharacterCard" component = {CharacterCard}/>
//     </main>
//   );
// }
