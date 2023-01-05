import { Avatar, Grid, Paper, Typography, TextField, Button, Box} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Signup = () => {


    const paperStyle={padding:20, height:'70vh', width:300, margin:'0 auto'}
    const avatarStyle={backgroundColor: 'red', margin:'10px auto'}
    // const textStyle={textAlign:'center'}
    const btnStyle={margin:'10px 90px'}//placer le bouton
    const formStyle={lineHeight: '4'}//espace entre les lignes
    return (
      <Grid>
          <Paper   style={paperStyle}>
              <Grid >
                <Avatar style={avatarStyle}>
                    <AddCircleOutlineIcon />
                </Avatar>
                <h2 >Sign Up</h2>
                <Typography align ="center" variant={"body2"}  lineHeight='3'>
                    Please fill this form to create an account
                </Typography>
            </Grid>
            <form style={formStyle}>


            <FormControl variant="standard"  style={btnStyle}>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Pseudo
                    </InputLabel>
                    <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    }
                    />
                </FormControl>


                <Box className='align' >
                <TextField variant="standard"  label='Name' placeholder='Enter Name'  />
                <TextField variant="standard"  label='First Name' placeholder='Enter Firstname'/>
                </Box>
                <TextField variant="standard" fullWidth label='Email' placeholder='Enter Email'/>
                <TextField variant="standard" fullWidth label='Password' type='password' placeholder='Enter Password'/>
                <TextField variant="standard" fullWidth label=' Confirm Password' type='password' placeholder='Enter Password'/>
                <Button type='submit' variant='contained' color='primary' style={btnStyle} >Sign Up</Button>
            </form>

          </Paper>
      </Grid>
    );
};

export default Signup; 
