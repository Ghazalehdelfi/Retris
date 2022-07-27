import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, Navigate, Outlet, BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Dashboard from './Dashboard'
import NewRetro from '../RetroBoard/NewRetro'
import PrevRetro from '../RetroBoard/PrevRetro'
import Token from '../Token'
import './Homepage.css'
import { padding } from '@mui/system';

const Home = () => {
    
    const navigate = useNavigate();

    return(
        <div>
          <div className='header'>
            <Typography variant="h5">
              Team Name Dashboard
            </Typography>
            <IconButton sx={{color:'white', marginLeft: 'auto'}} aria-label="upload picture" component="span">
              <PersonIcon />
            </IconButton>
            <Button variant="text" sx={{color:'white'}}>Log out</Button>
          </div>
          <div className='container'>
            <Dashboard />
            <Fab 
              sx={{position: 'absolute', right:'20px', bottom:'20px', backgroundColor:'#201E22'}} 
              color="primary" 
              aria-label="add"
              onClick= {() => navigate("/home/newretro")}>
              <AddIcon />
            </Fab>
          </div>
        </div>
    )
}

const HomePage = () => {
  return(
    <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route path="/newretro" element={<NewRetro/>}/>
    </Routes>
  )
}

export default HomePage