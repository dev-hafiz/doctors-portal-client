import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
     const {name, time, space} = booking || {}

     const [openBooking, Booking] = React.useState(false);
     const handleBookingOpen = () => Booking(true);
     const handleBookingClose = () => Booking(false);


     return (
         <>
               <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{py:5}} elevation={3}>
              <Typography variant="h5" sx={{color : '#1565C0', fontWeight: '500'}} gutterBottom component="div">
                {name}
               </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {time}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
               {space} SPACES AVAILABLE
               </Typography>
               <Button onClick={handleBookingOpen} sx={{backgroundColor : '#1565C0', my:3}} variant="contained">Booking Appiontment</Button>
               </Paper>   
          </Grid>
          <BookingModal 
           date={date}
           booking={booking}
           openBooking={openBooking} 
           handleBookingClose={handleBookingClose}
           setBookingSuccess={setBookingSuccess}
          />
          
         </>
     );
};

export default Booking;