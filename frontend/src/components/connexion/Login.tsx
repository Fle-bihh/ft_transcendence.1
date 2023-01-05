import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { Component } from 'react'
import LockSharpIcon from '@mui/icons-material/LockSharp';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

// import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Login =({handleChange})=>{
    const Login =()=>{
    const paperStyle={padding:20, height:'73vh', width:300, margin:'0 auto' }
    const avatarStyle={backgroundColor: 'red', margin:'20px auto'}
    const textStyle={textAlign:'center'}
    const btnStyle={margin:'8px 0', }
    const formStyle={lineHeight: '4'}
    const askStyle={lineHeight: '2'}

    return (
        <Grid>
            <Paper   style={paperStyle}>
               <Grid>
                    <Avatar style={avatarStyle}>
                        <LockSharpIcon />
                    </Avatar>
                    <h2>
                        Sign In
                    </h2>
                </Grid>
                <form style={formStyle}>
                <TextField  label="Username" variant="standard" placeholder='Enter username' fullWidth required/>
                <TextField  label="Password" variant="standard" placeholder='Enter password' type='password' fullWidth required/>
             
                <FormControlLabel control={<Checkbox  />} label="Remember me" />
                <Button type='submit' color='primary' variant='contained'  style={btnStyle} fullWidth> Sign in</Button>
                <Typography style={askStyle}>
                    <Link href='#'>
                        Forgot password ? 
                    </Link>
                </Typography>
                <Typography> Do you have an account ?          
                    {/* <Link href='/singup' onClick={()=>handleChange("event",1)}> */}
                    <NavLink to='/singup'>
                        
                        Sign up
                    </NavLink>
                </Typography>
                </form>
            </Paper>
        </Grid>
    )
};
 
export default Login; 
