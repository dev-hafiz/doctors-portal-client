import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const Appointments = ({date}) => {
     const {user, token} = useAuth();
     const [appiontments, setAppiontments] = useState([])

     useEffect( ()=>{
          const url = `https://aqueous-shore-28644.herokuapp.com/appiontments?email=${user.email}&date=${date}`
          fetch(url, {
            headers:{
              'authorization': `Bearer ${token}`,
              
         },
          })
          .then(res => res.json())
          .then(data => setAppiontments(data))
     },[date])


     return (
          <Box style={{textAlign :'left'}}>
               <Typography sx={{my:3}} variant="h5">
                    Appointments {appiontments.length}
               </Typography>

               <TableContainer component={Paper}>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appiontments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Box>
     );
};

export default Appointments;