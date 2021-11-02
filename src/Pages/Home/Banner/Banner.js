import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
     background : `url(${bg})`,
     backgroundPosition : 'center',
     
}

const verticalCenter = {
     display : 'flex',
     alignItems :'center',
     height: '500px',
    

}

const Banner = () => {
     return (
          <Container style={bannerBg} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid style={{...verticalCenter, textAlign: 'left'} } item xs={12} md={6}>
               <Box>
               <Typography variant="h3">
               Your New Smile <br/>
               Start Here 
             </Typography>
             <Typography variant="h6" sx={{fontSize:'14px', color: 'gray', my:3, fontWeight:'normal'}}>
             Our teeth have such an important role to play in our lives. They help us chew and digest food, they help us to talk and speak clearly and they also give our face its shape 
             </Typography>
             <Button style={{backgroundColor : '#67C5C7'}}  variant="contained"> GET APPIONTMENT</Button>
               </Box>
            </Grid>
            <Grid style={verticalCenter} item xs={12} md={6}>
              <img style={{ width: "450px"}} src={chair} alt="" />
            </Grid>
          </Grid>
        </Container>
     );
};

export default Banner;