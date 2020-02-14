import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404.jsx';
import Home from './Home.jsx';

function App() {

  return (
    <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={Error404}/>
    </Switch>
    </div>
  );
}

export default App;
