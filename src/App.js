import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>
          </Switch>
          








        </div>
      )
    
  }
}

export default App;
