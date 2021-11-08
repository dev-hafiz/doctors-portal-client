import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '16px',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
     const {name, time, space} = booking || {}
     const {user} = useAuth()
     const initialInfo = { patientName : user.displayName, email : user.email, phone: ''}
     const[bookingInfo, setBookingInfo] = useState(initialInfo)

     const handleOnBlur = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newInfo  = {...bookingInfo};
          newInfo[filed] = value;
          
          setBookingInfo(newInfo);
     }

     const handleBookingSubmit = e =>{

          const appiontment ={
               ...bookingInfo,
               time,
               serviceName: name,
               date: date.toLocaleDateString()
          }
          
          fetch('https://aqueous-shore-28644.herokuapp.com/appiontments',{
               method:'POST',
               headers:{
                    'content-type': 'application/json'
               },
               body: JSON.stringify(appiontment)
          })
          .then(res => res.json())
          .then(data =>{
               if(data.insertedId){
                    setBookingSuccess(true)
                    handleBookingClose();
                    
               }
          })

          e.preventDefault();
          
     }

     return (
          <Modal
          open={openBooking}
          onClose={handleBookingClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
               <Typography sx={{color: '#1565C0', textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
               {name}
               </Typography>

               <form onSubmit={handleBookingSubmit}>
               <TextField
               disabled
               id="outlined-name"
               sx={{width: "100%", my:2}}
               defaultValue={time}
               />
               <TextField
               id="outlined-name"
               sx={{width: "100%", my:2}}
               defaultValue={user.displayName}
               name="patientName"
               onBlur={handleOnBlur}
               />
               <TextField
               id="outlined-name"
               sx={{width: "100%", my:2}}
               defaultValue="Phone Number"
               name="phone"
               onBlur={handleOnBlur}
               />
               <TextField
               id="outlined-name"
               sx={{width: "100%", my:2}}
               defaultValue={user.email}
               name="email"
               onBlur={handleOnBlur}
               />
               <TextField
               disabled
               id="outlined-name"
               sx={{width: "100%", my:2}}
               defaultValue={date.toDateString()}
               />
               <Button type="submit" variant="contained">Submit</Button>
               </form>
          </Box>
          </Modal>
     );
};

export default BookingModal;