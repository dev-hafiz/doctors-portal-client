import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import p1 from '../../../images/people-1.png';
import p2 from '../../../images/people-2.png';
import p3 from '../../../images/people-3.png';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import { Container, Typography } from '@mui/material';


const testimonials = [
     {
          id:101,
          name:"Winson Harry",
          place:"california", 
          description: "A dentist, also known as a dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity",
          img:p1
     },
     {
          id:102,
          name:"Lora Sans",
          place:"Texas", 
          description: "A dentist, also known as a dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity",
          img:p2
     },
     {
          id:103,
          name:"Katherine Mansfiled",
          place:"Alabama", 
          description: "A dentist, also known as a dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity",
          img:p3
     }
]
const Testimonial = () => {
     return (
          <Box  sx={{ flexGrow: 1, marginBottom : '80px' }}>
          <Container>
          <Box style={{marginTop : '150px'}} sx={{textAlign: 'left'}}>
               <Typography variant="h5" sx={{color: '#6CCFCF', fontWeight: '600', my:5}}>
                    TESTIMONIAL
               </Typography>
               <Typography variant="h3" sx={{color:'#203047', fontWeight:'700'}}>
                    What's Our Patients <br/>
                    Says
               </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            testimonials.map(testimonial => <SingleTestimonial
               testimonial={testimonial}
               key={testimonial.id}
               />)   
          }
          </Grid>
          </Container>
          </Box>
     );
};

export default Testimonial;