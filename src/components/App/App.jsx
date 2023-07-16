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
import { get } from '../../../server/routes/survey.router';



function App() {

  // Create useState for suverylist submitted
  const [ surveyList, setSurveyList ] = useState([])


  // GET request to pull in all completed surveys from Database
  const getSurveys = () => {
    axios({
      method: "GET",
      url: "/survey",
    })
    .then( response => {
      console.log('Response from database is: ', response)
      setSurveyList(response.data);
    })
    .catch(error => {
      console.log('Error in client GET request: ', error);
    })
  }

  // DELETE request to remove a prior survey from database
  const handleDelete = (idToDelete) => {
    console.log('In DELETE survey function');
    axios({
      method: 'DELETE',
      url: `/survey/${idToDelete.id}`
    })
    .then( response => {
      console.log('Deleted survey in database');
      getSurveys();
    })
    .catch( error => {
      console.log('Error in DELETE request: ', error);
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
        <Route path="/admin">
          <Admin surveyList={surveyList} handleDelete={handleDelete} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
