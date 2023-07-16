import './Admin.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Admin = ({surveyList}) => {
    

    return (
        <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'}}>
          <Table sx={{ width: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell align="right">Understanding</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {surveyList.map( survey  => (
                <TableRow
                  key={survey.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}
                >
                  <TableCell component="th" scope="row">
                    {survey.feeling}
                  </TableCell>
                  <TableCell align="right">{survey.understanding}</TableCell>
                  <TableCell align="right">{survey.support}</TableCell>
                  <TableCell align="right">{survey.comments}</TableCell>
                  <TableCell align="right"><Button>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
   
}

export default Admin;

