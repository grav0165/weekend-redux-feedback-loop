import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// importing components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/'>
          <Feeling />
        </Route>
      </div>
    </Router>
  );
}

export default App;
