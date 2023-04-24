import React from 'react';
import {Switch, Route} from "react-router-dom"

import Home from "./Home.js"
import RealGame from "./realGame.js"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tenziesGame" component={RealGame} />
    </Switch>
  )
}

export default App;
