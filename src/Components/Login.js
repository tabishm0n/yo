import React from 'react'
import logo from '../Images/yo-512px.png';
import { Button, TextField } from '@mui/material';
function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} alt='Logo' className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='login-text'>Login to your Account</p>
            <TextField id="standard-basic" label="Username" variant="standard" color="secondary"/>
            <TextField id="outlined-password-input" label="Password" type="password" variant="standard" autoComplete='current-password' color="secondary"/>
            <Button variant="contained" color="secondary">Login</Button>
        </div>
    </div>
  )
}

export default Login