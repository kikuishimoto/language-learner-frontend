import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import PhrasesContainer from './containers/PhrasesContainer'
import CategoriesContainer from './containers/CategoriesContainer'
import TutorsContainer from './containers/TutorsContainer'
import ListsContainer from './containers/ListsContainer'


import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/phrases' component={PhrasesContainer} />
            <Route exact path='/categories' component={CategoriesContainer} />
            <Route exact path='/' component={TutorsContainer}/>
            <Route exact path='/' component={ListsContainer}/>
          </Switch>

        </div>
      )
    
  }
}

export default App;
