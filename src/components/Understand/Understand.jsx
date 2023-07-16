import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './Understand.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';

const Understand = () => {

    // sourcing history to go to next page
    const history = useHistory();
    const dispatch = useDispatch();

    // Array  for drop down text field to use
    const dropDown = [1, 2, 3, 4, 5]

    const [ understandingInput, setUnderstandingInput ] = useState();

    const handleUnderstandingInput = (event) => {
        setUnderstandingInput(event.target.value)
    }

    // Handling prevents moving to the nxt screen unless the drop down is selected
    const handleNext = () => {
        if (!understandingInput) {
            alert('Please fill out the field')
        } else {
        dispatch({
            type: 'UNDERSTAND',
            payload: understandingInput
        })
        history.push('/support')
    }
    }



    return (
        <div className='feeling-div'>
                <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', minHeight: 400, maxHeight: 500 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                            How well are you understanding the content?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Scale of 1 to 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{marginBottom: 4}}>
                            5 being the most
                        </Typography>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="1"
                                onChange={handleUnderstandingInput}
                                sx={{ width: 175}}
                            >
                            {dropDown.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}</TextField>
                    </CardContent>
                        <CardActions sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Button sx={{ display: 'flex', alignSelf: 'flex-start' }} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleNext}>Next</Button>
                        </CardActions>
                </Card>
        </div >
    )
}

export default Understand;