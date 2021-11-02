import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = ({service}) => {
     const {name, img, description} = service || {}
     return (
          <Grid item xs={4} sm={4} md={4} >
           <Card sx={{ minWidth: 275 ,border: 0, boxShadow: 0,   m: 2}}>
           <CardMedia
          component="img"
          style={{width: 'auto', height: '80px', margin: '0 auto'}}
          image={img}
          alt="green iguana"
          />
          <CardContent>
          
          <Typography variant="h5" component="div">
               {name}
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', mt:2 }} variant="body2">
               {description}
          </Typography>
          </CardContent>
         
       </Card>
         </Grid>
     );
};

export default Service;