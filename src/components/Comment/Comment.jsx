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

const Comment = () => {

    // sourcing history to go to next page
    const history = useHistory();
    const dispatch = useDispatch();

    const [ commentInput, setCommentInput ] = useState();

    const handleCommentInput = (event) => {
        setCommentInput(event.target.value)
    }

    const handleNext = () => {
        dispatch({
            type: 'COMMENT',
            payload: commentInput
        })
        history.push('/review')
    }



    return (
        <div className='feeling-div'>
            <div className='card-div'>
                <Card sx={{ display: 'flex', minWidth: 300, maxWidth: 1400, minHeight: 400, maxHeight: 500 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                           Any comments you want to leave?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Scale of 1 to 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            with 5 being the most
                        </Typography>
                        <div className='text-input'>
                            <TextField
                                id="outlined-number"
                                label="Comment?"
                                type="text"
                                onChange={handleCommentInput}
                            />
                        </div>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CardActions>
                            <Button sx={{ display: 'flex', alignSelf: 'flex-end' }} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleNext}>Next</Button>
                        </CardActions>
                    </Box>
                </Card>
            </div>
        </div >
    )
}

export default Comment;