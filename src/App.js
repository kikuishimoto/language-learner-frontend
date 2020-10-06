import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import PhrasesContainer from './containers/PhrasesContainer'
import CategoriesContainer from './containers/CategoriesContainer'
import TutorsContainer from './containers/TutorsContainer'
import ListsContainer from './containers/ListsContainer'
import NavBar from './Navbar'
import PhraseInput from './components/PhraseInput'
import CategoryShow from './components/CategoryShow'


import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
      return (
        <div className="App">
          <NavBar />
          <br></br>
          
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/phrases' component={PhrasesContainer} />
            <Route exact path='/phrases/new' component={PhraseInput} />
            <Route path='/categories' component={CategoriesContainer} />
            <Route exact path='/tutors' component={TutorsContainer}/>
            <Route exact path='/lists' component={ListsContainer}/>

          </Switch>

        </div>
      )
    
  }
}


export default (App);
