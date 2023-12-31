import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './Support.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Support = () => {

    // sourcing history to go to next page
    const history = useHistory();
    const dispatch = useDispatch();

    // Sourcing sweetAlert to use
    const MySwal = withReactContent(Swal);

    // Array for drop down text to use
    const dropDown = [1, 2, 3, 4, 5]

    // using state to cover inputs
    const [ supportInput, setSupportInput ] = useState();

    // input handler to track 
    const handleSupportInput = (event) => {
        setSupportInput(event.target.value)
    }

    // if statement to prevent an empty submission to store
    const handleNext = () => {
        if (!supportInput) {
            MySwal.fire({
                title: 'Please submit a number from the dropdown',
                icon: 'info',
                timer: 1000,
                showConfirmButton: false,
            })
        } else {
        dispatch({
            type: 'SUPPORT',
            payload: supportInput
        })
        // moving to next page after dispatch
        history.push('/comment')
    }
    }



    return (
        <div className='feeling-div'>
                <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', minHeight: 400, maxHeight: 500 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                           How well are you being supported?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Scale of 1 to 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{marginBottom: 4}}>
                            with 5 being the most
                        </Typography>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue=""
                                onChange={handleSupportInput}
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
                            <Button sx={{ display: 'flex', alignSelf: 'flex-end' }} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleNext}>Next</Button>
                        </CardActions>
                </Card>
        </div>
    )
}

export default Support;