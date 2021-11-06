import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
     
     const {registerUser , isLoading, authError , user} = useAuth()
     const [loginData, setLoginData] = useState({})
     const history = useHistory()

     const handleOnBlur = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          console.log(newLoginData)
          setLoginData(newLoginData);
     }

     const handleLoginSubmit = e =>{
          if(loginData.password !== loginData.password2){
               alert('Your password did not match');
               return
          }
          registerUser(loginData.email, loginData.password, loginData.name, history)

          e.preventDefault()
          
     }

     return (
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Typography sx={{mt:5}} variant="body1" gutterBottom>
               Register
          </Typography>

          { !isLoading && <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Your Name" 
          name="name"
          type="text"
          required
          onBlur={handleOnBlur}
          variant="standard" />
          <TextField 
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          required
          onBlur={handleOnBlur}
          variant="standard" />

          <TextField 
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Password" 
          name="password"
          required
          onBlur={handleOnBlur}
          type="password"
          variant="standard" />
          <TextField 
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Re Type Password" 
          name="password2"
          onBlur={handleOnBlur}
          required
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:2}} variant="contained" type="submit">Register</Button>
          <NavLink style={{textDecoration: 'none'}} to="/login">
          <Button variant="text">Already Registered? Please Login</Button>
          </NavLink>
          </form>}
         {isLoading && <CircularProgress />}
         {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
         { authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
           <img style={{width:"100%"}} src={login} alt="" />
          </Grid>
        </Grid>
     );
};

export default Register;