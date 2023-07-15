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
import './Comment.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Review = () => {



    return(
        <div className="review-card">
            <Card sx={{ display: 'flex', minWidth: 300, maxWidth: 1400, minHeight: 400, maxHeight: 500 }}>
                <Typography gutterBottom variant="h4" sx={{display: 'flex', justifyContent: 'center'}}>
                    Review Your Feedback
                </Typography>
                <Typography>

                </Typography>
            </Card>
        </div>
    )
    
}

export default Review;