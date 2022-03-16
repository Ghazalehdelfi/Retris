import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Authentication} from './LoginSlice';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const Authenticate = () => {
      const a = Authentication(dispatch, {userName, password})
      console.log(a)
      if(a) {
        navigate("/")
      }
      else {
        window.alert("wrong password / username")
      }
    }

    return (
    <Box className='login-container' sx={{border:'10px black', height:'400px', width:'400px'}}>
      <TextField sx={{margin:'5px', width: '300px'}} id="outlined-basic" label="Username" variant="outlined" 
        onChange={(e) => setUserName(e.target.value)}/>
      <TextField sx={{margin:'5px', width: '300px'}} id="outlined-basic" label="Password" type="password" variant="outlined"
        onChange={(e) => setPassword(e.target.value)} />
      Forgot your password? Too bad bitch
      <div className= 'login-buttons'>
        <Button sx={{width: '120px'}} onClick={Authenticate} variant="contained">Login</Button>
        <Button sx={{width: '120px'}} variant="outlined">Sign up</Button>
      </div>
    </Box>
    )
}

export default Login;