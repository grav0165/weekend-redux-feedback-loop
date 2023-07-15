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
import './Feeling.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';

const Feeling = () => {

    // sourcing history to go to next page
    const history = useHistory();
    const dispatch = useDispatch();

    // Array for drop down text field to use
    const dropDown = [1, 2, 3, 4, 5]

    // using state to keep track of input
    const [ feelingInput, setFeelingInput ] = useState();

    // input handler
    const handleFeelingInput = (event) => {
        setFeelingInput(event.target.value)
    }

    // if statement to prevent empty submission to store (field required)
    const handleNext = () => {
        if (!feelingInput) {
            alert('Please fill out the field')
        } else {
        dispatch({
            type: 'FEELING',
            payload: feelingInput
        })
        // history push to move to next page
        history.push('/understand')
        }
    }



    return (
        <div className='feeling-div'>
                <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', minHeight: 400, maxHeight: 500 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                            How are you feeling?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Scale of 1 to 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{marginBottom: 4}}>
                            with 5 being the best
                        </Typography>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="1"
                                onChange={handleFeelingInput}
                                sx={{ width: 175}}
                                
                            >
                            {dropDown.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                              </TextField>
                    </CardContent>
                        <CardActions sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Button sx={{ display: 'flex', alignSelf: 'flex-start' }} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleNext}>Next</Button>
                        </CardActions>
                </Card>
        </div >
    )
}

export default Feeling;