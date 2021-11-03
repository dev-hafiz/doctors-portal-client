import { Avatar, CardHeader, Grid, IconButton } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

const SingleTestimonial = ({testimonial}) => {
     const {name, description, place, img} = testimonial || {}
     return (
          <Grid item xs={4} sm={4} md={4} >
               <Card sx={{ minWidth: 275 , px:3, pt:5, textAlign: 'justify', mt:5}}>
               <CardContent>
               <Typography variant="body2">
                    {description}
               </Typography>
               </CardContent>
               <CardHeader
               avatar={
                    <Avatar>
                    <img style={{width: "40px"}} src={img} alt="" />
                    </Avatar>
               }
               
               title={name}
               subheader={place}
               />
              </Card> 
          </Grid>
     );
};

export default SingleTestimonial;