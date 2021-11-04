import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';


const Footer = () => {
     return (
          <Box sx={{marginTop:"100px ", padding: "40px 10px"}}>
             <Container>
             <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
               <Grid sx={{textAlign:'left'}} item xs={12} md={3}>
                    <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Emergency Dental Care</NavLink>
                    </Typography>
                    <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Check Up</NavLink>
                    </Typography>
                    <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Treatment of Personal Diseases</NavLink>
                    </Typography>
                    <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Tooth Extraction</NavLink>
                    </Typography>
                    <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Week Check Up</NavLink>
                    </Typography>
               </Grid>
               <Grid  sx={{textAlign:'left'}} item xs={12} md={3}>
               <Typography variant="h6"  sx={{ mb: 3 , fontWeight: 500, color:'#5FC7C7' }}>
                    Services
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Dental Emergency Home</NavLink>
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Receding Gums</NavLink>
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Tooth Abscess</NavLink>
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Wisdom Teeth</NavLink>
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Tongue Scraping</NavLink>
               </Typography>
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Gum Disease</NavLink>
               </Typography>
               </Grid>
               <Grid sx={{textAlign:'left'}} item xs={12} md={3}>
               <Typography variant="h6"  sx={{ mb: 3 , fontWeight: 500, color:'#5FC7C7' }}>
                    Oral Health
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Instead of Open Surgery</NavLink>
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Prescription Discounts</NavLink>
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Treating Galactosemia</NavLink>
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">When Puberty Hits Early</NavLink>
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Treating Advanced NSCLC</NavLink>
               </Typography> 
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Increased Stroke Risk</NavLink>
               </Typography> 
               </Grid>
               <Grid sx={{textAlign:'left'}} item xs={12} md={3}>
               <Typography variant="h6"  sx={{ mb: 3 , fontWeight: 500, color:'#5FC7C7' }}>
                   Communication Way
               </Typography>  
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">East London
                         Zip : 5208 [-33.033/27.917]</NavLink>
               </Typography>  
               <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">
                         Mile End Road</NavLink>
               </Typography>  
              <Box sx={{display:'flex' , mt:5}}>
              <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">
                         <i style={{color: '#6ACECE'}} className="fab fa-2x fa-facebook"></i></NavLink>
               </Typography> 
              <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none', padding:'0 16px'}} to="/">
                         <i style={{color: '#6ACECE'}} className="fab fa-2x fa-twitter"></i></NavLink>
               </Typography> 
              <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none' }} to="/">
                         <i style={{color: '#6ACECE'}} className="fab fa-2x fa-linkedin"></i></NavLink>
               </Typography> 
              </Box> 
              <Typography variant="h6">
                         <NavLink  style={{color:'#676767', fontSize:'14px', fontWeight:'medium', textDecoration:'none'}} to="/">Call Now</NavLink>
               </Typography>
              <Typography variant="h6">
                         <NavLink  style={{background:'#18D2B4',
                              color:'#fff', fontSize:'14px', fontWeight:'medium', textDecoration:'none', padding:'10px 16px'}} to="/">+921 005 456 76</NavLink>
               </Typography>
               </Grid>
               </Grid>
               </Box>   
             </Container>
          </Box>
     );
};

export default Footer;