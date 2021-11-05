import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Register = () => {
     const [loginData, setLoginData] = useState({})

     const handleChange = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          console.log( newLoginData)
          setLoginData(newLoginData);
     }

     const handleLoginSubmit = e =>{
          if(loginData.password !== loginData.password2){
               alert('Your password did not match');
               return
          }
          e.preventDefault()
          alert("Hellow")
     }

     return (
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Typography sx={{mt:5}} variant="body1" gutterBottom>
               Register
          </Typography>

          <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width:"75%"}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          required
          onChange={handleChange}
          variant="standard" />

          <TextField 
          sx={{width:"75%"}}
          id="standard-basic" 
          label="Password" 
          name="password"
          required
          onChange={handleChange}
          type="password"
          variant="standard" />
          <TextField 
          sx={{width:"75%"}}
          id="standard-basic" 
          label="Re Type Password" 
          name="password2"
          onChange={handleChange}
          required
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:2}} variant="contained" type="submit">Register</Button>
          </form>
          <NavLink style={{textDecoration: 'none'}} to="/login">
          <Button variant="text">Already Registered? Please Login</Button>
          </NavLink>
          </Grid>
          <Grid item xs={12} md={6}>
           <img style={{width:"100%"}} src={login} alt="" />
          </Grid>
        </Grid>
     );
};

export default Register;