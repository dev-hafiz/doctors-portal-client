import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import treatment from '../../../images/treatment.png';

const DentalCare = () => {
     return (
          <Container sx={{margin:'80px 0'}}>
               <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width:"80%"}} src={treatment} alt="" />
                    </Grid>
                    <Grid sx={{display:'flex',  alignItems: 'center' }} item xs={12} md={6}>
                         <Box sx={{textAlign:'left'}}>
                         <Typography variant="h3" sx={{ fontWeight:500, color: '#203047', mb:3}}>
                              Exceptional Dentail <br/> Care, on Your Terms
                         </Typography>
                         <Typography variant="h6" sx={{color:'text.secondary', fontSize:'18px', fontWeight:'medium', mb:3}}>
                         The maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.Normally the body's natural defenses and good oral health care, such as daily brushing and flossing, keep bacteria under control. However, without proper oral hygiene, bacteria can reach levels that might lead to oral infections, such as tooth decay and gum disease.
                         </Typography>
                         <br />
                         <Button style={{backgroundColor : '#0FCFEB'}} variant="contained">Learn More</Button>
                         </Box>
                    </Grid>
               </Grid>
               </Box>
          </Container>
     );
};

export default DentalCare;