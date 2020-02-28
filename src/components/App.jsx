import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import NewBeerForm from './NewBeerForm.jsx'
import CellarList from './CellarList.jsx';
import AgeConfirmation from './AgeConfirmation.jsx';
import Beer from './Beer.jsx';
import NewBeerControl from './NewBeerControl';

function App() {

  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path='/' component={CellarList} />
      <Route path='/newbeer' component={NewBeerControl} />
      <Route component={Error404}/>
    </Switch>
    </div>
  );
}

export default App;
