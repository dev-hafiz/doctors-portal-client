import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appiontmentBg  = {
     background : `url(${bg})`,
     backgroundColor : 'rgba(45, 58, 74, .8)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop : '160px',
     
}

const AppiontmentBanner = () => {
     return (
          <Box style={appiontmentBg} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img style={{width:'90%', marginTop: '-137px'}} src={doctor} alt="" />
            </Grid>
            <Grid sx={{
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'center',
               textAlign: 'left',
               }} item xs={12} md={7}>
             <Box sx={{width : 550, px:3, pb:3}}>
             <Typography sx={{mb:4}} variant="h6" style={{color : '#67C5C7'}}>
              APPIONTMENT
             </Typography>
             <Typography variant="h4" sx={{mb:3}} style={{  fontWeight: 400 , color: '#fff',}}>
             Make an  appiontment Today
             </Typography>
             <Typography variant="h6" sx={{mb:2}}  style={{  fontWeight: 300 , color: '#fff' }}>
             It is an long established fact that a reader will be distracted by the readeable contact of a page when looking at its
            </Typography>
             <Button style={{backgroundColor : '#0FCFEB'}}  variant="contained">Learn More</Button>
             </Box>
            </Grid>
          </Grid>
        </Box>
     );
};

export default AppiontmentBanner;