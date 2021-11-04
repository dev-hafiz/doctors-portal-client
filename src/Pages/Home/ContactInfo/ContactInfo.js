import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ContactInfo.css';
import bgContact from '../../../images/appointment-bg.png';


const contactBg = {
     
     background : `url(${bgContact})`,
     backgroundBlendMode: "darken, luminosity",
     backgroundColor : 'rgba(45, 58, 74, .8)',
     

     
}

const ContactInfo = () => {
     const handlerSubmitForm = e =>{
          e.preventDefalut()
     }
     return (
         <Box style={contactBg} >
          <Container sx={{margin:'80px 0', padding:'80px 0'}}>
          <Box>
               <Typography  sx={{ mt: 5 , fontWeight: 500, color:'#5FC7C7' }} variant="h6">
                    CONTACT US
               </Typography>
               <Typography sx={{  fontWeight: 400, color:'#fff' }} variant="h4">
                  Always Contact with us
               </Typography>
          </Box>
          <Box sx={{marginTop:"60px"}}>
          <form  onSubmit={handlerSubmitForm}>
                    <input type="email" name="" placeholder="Email Address*" id="" />
                    <br />
                    <input type="text" name="" placeholder="Subject*" id="" />
                    <br />
                    <textarea name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                    <br />
                    <Button  style={{backgroundColor : '#0FCFEB'}} variant="contained">Submit</Button>
          </form>
          </Box>
          </Container>
         </Box>
     );
};

export default ContactInfo;