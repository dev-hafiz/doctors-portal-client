import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import wheatining from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
     {
          name : "Fluoride Treatment",
          key: 101, 
          description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist ",
          img:fluoride
     },
     {
          name : "Cavity Filling",
          key: 102, 
          description: "A cavity filling brings back the functionality and appearance of the tooth. Basicthe functionality and appearance oally, a passage ",
          img:cavity
     },
     {
          name : "Teath Wheatining",
          key: 103, 
          description: "While teeth whitening is considered safe, you may experience some side effects from treatments: Teeth sensitivity.",
          img:wheatining
     }
]

const Services = () => {


     return (
          <Box sx={{ flexGrow: 1 }}>
          <Container>
          <Typography  sx={{ mt: 5 , fontWeight: 500, color: 'primary.main' }} variant="h5" component="div">
               OUR SERVICES
          </Typography>
          <Typography sx={{ m: 3,  fontWeight: 600 }} variant="h4" component="div">
               SERVICES WE PROVIED
          </Typography>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                    services.map( service => <Service 
                         service={service}
                         key={service.name}
                    />)
               }
               </Grid>
          </Container>
        </Box>
     );
};

export default Services;