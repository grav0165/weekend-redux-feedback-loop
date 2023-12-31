import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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

    // state to keep track of inputs
    const [commentInput, setCommentInput] = useState();

    // handler to track inputs
    const handleCommentInput = (event) => {
        setCommentInput(event.target.value)
    }

    // No if statement on button, comments are not required, and blank entries are accepted
    const handleNext = () => {
        dispatch({
            type: 'COMMENT',
            payload: commentInput
        })
        // Moving to review page to show all prior inputs
        history.push('/review')
    }



    return (
        <div className='feeling-div'>
            <Card sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', minHeight: 400, maxHeight: 500 }}>
              
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                            Any comments you want to leave?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{marginBottom: 4}}>
                            Feel free to leave any comments not covered in the previous questions
                        </Typography>
                        <TextField
                            id="outlined-number"
                            label="Comment?"
                            type="text"
                            defaultValue=''
                            onChange={handleCommentInput}
                            sx={{ width: 500}}
                        />
                    </CardContent>
             
                <CardActions sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Button sx={{ display: 'flex', alignSelf: 'flex-end' }} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleNext}>Next</Button>
                </CardActions>
            </Card>
        </div>

    )
}

export default Comment;