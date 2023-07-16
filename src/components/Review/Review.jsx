import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './Review.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Review = () => {

    // useSelector to pull all data in the store that was submitted in prior pages
    const survey = useSelector(store => store.survey)
    // useHistory source to push to new page
    const history = useHistory();

    // Click handler to sent all data in store to the database
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting to database: ', survey);
        axios({
            method: 'POST',
            url: '/survey',
            data: {
                feeling: survey.feeling,
                understanding: survey.understand,
                support: survey.support,
                comment: survey.comment 
            }
        })
        .then( response => {
            console.log('Response submitted to server: ', response);
        })
        .catch(error => {
            console.log('Error in adding survey in client: ', error);
        })
        history.push('/success')

    }

    return (
        <div className="review-card">
            <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', minHeight: 400, maxHeight: 500 }}>
            <Box>
                    <Typography gutterBottom variant="h4" sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, marginBottom: 2 }}>
                        Review Your Feedback
                    </Typography>

                    <Typography>
                        Feelings: {survey.feeling}
                    </Typography>
                    <Typography>
                        Understanding: {survey.understand}
                    </Typography>
                    <Typography>
                        Support: {survey.support}
                    </Typography>
                    <Typography>
                        Comments: {survey.comment}
                    </Typography>
                    </Box>
                    <CardActions sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Button size="large" variant="contained" onClick={handleSubmit} >SUBMIT</Button>
                    </CardActions>
            </Card>
        </div>
    )

}

export default Review;