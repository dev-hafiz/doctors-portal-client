import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({booking}) => {
     const {name, time, space} = booking || {}
     return (
          <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{py:5}} elevation={3}>
              <Typography variant="h5" sx={{color : '#2FCCC6', fontWeight: '500'}} gutterBottom component="div">
                {name}
               </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {time}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
               {space} SPACES AVAILABLE
               </Typography>
               <Button sx={{backgroundColor : '#2FCCC6', my:3}} variant="contained">Contained</Button>
               </Paper>   
          </Grid>
     );
};

export default Booking;