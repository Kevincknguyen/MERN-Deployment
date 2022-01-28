import './App.css';
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main"
import Add from "./views/Add"
import Displayall from "./views/Displayall"
import Individual from "./views/Individual"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

      <Route path="/pirates/:id/home">
          <Individual />
      </Route>

      <Route path="/pirates/new">
          <Add />
      </Route>


      
    
      <Route path="/pirates">
          <Displayall />
      </Route>

      <Route path="/">
          <Main />
      </Route>

      
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
