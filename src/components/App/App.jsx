import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// importing components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';



function App() {

  // Create useState for suverylist submitted
  let[ surveyList, setSurveyList ] = useState([])


  // GET request to pull in all completed surveys from Database
  const getSurveys = () => {
    axios({
      method: 'GET',
      url: '/survey'
    })
    .then( response => {
      console.log('Response from database reviewed: ', response.data)
      setSurveyList(response.data);
    })
    .catch( error => {
      console.log('Error in getting database information: ', error);
    })
  }



  // on load, get all guests
  useEffect(() => {
    getSurveys()
  }, [])

  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understand" exact>
          <Understand />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comment">
          <Comment />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route>
          <Admin surveyList={surveyList}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
