const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route for /survey (if stretch goal is achieved)
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY data ASC;`;
    pool.query(sqlText)
    .then( result => {
        console.log('Got stuff back from database: ', result);
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error in making database query: ', error);
        res.sendStatus(500);
    })
})

// POST route for /survey
router.post('/', (req, res) => {
    const survey = req.body;
    const sqlQuery =`
    INSERT INTO feedback ("feeling", "understanding", "support", "comments", "date")
    VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP);
    `;
    pool.query(sqlQuery, [survey.feeling, survey.understanding, survey.support, survey.comment])
    .then( result => {
        // console logging out information sent to database
        console.log('Added survey to database: ', survey);
        res.sendStatus(201);
    })
    .catch( error => {
        // console logging out any errors
        console.log('Error in database query: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;