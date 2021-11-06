import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
     const location = useLocation()
     const history = useHistory()
     const {loginUser, isLoading, authError, user, googleUserSignIn} = useAuth()

     const [loginData, setLoginData] = useState({})

     const handleChange = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          setLoginData(newLoginData);
     }
     const handleLoginSubmit = e =>{

          loginUser(loginData.email, loginData.password, location, history)
          e.preventDefault();
          
     }

     //Google handler
     const handleGoogleSignIn = () =>{
          googleUserSignIn(location, history)
     }
     return (
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Typography sx={{mt:5}} variant="body1" gutterBottom>
               Login
          </Typography>

          <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width:"75%", mt:3}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          onChange={handleChange}
          variant="standard" />

          <TextField 
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Password" 
          name="password"
          onChange={handleChange}
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:2}} variant="contained" type="submit">Login</Button>
          </form>
          <NavLink style={{textDecoration: 'none'}} to="/register">
          <Button variant="text">New User ? Please Register</Button>
          </NavLink>
          <br/>
          <Button onClick={handleGoogleSignIn} variant="contained">Google SignIn</Button>


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

export default Login;