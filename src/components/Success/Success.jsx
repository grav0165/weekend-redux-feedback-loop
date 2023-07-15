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
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Success = () => {

    // sourcing dispatch
    const dispatch = useDispatch();

    // sourcing history
    const history = useHistory();

    const handleNewFeedback = () => {
        console.log('New feedback clicked');
        dispatch({
            type: 'CLEAR'
        })
        history.push('/')
    }

    return (
        <div className="review-card">
            <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', minHeight: 400, maxHeight: 500 }}>
            <Box>
                    <Typography gutterBottom variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                        Thank you!
                    </Typography>
                    </Box>
                    <CardActions sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Button size="large" variant="contained" onClick={handleNewFeedback} >Leave New Feedback</Button>
                    </CardActions>
            </Card>
        </div>
    )

}

export default Success;