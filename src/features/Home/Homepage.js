import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate, Navigate, Outlet, BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Dashboard from './Dashboard'
import NewRetro from '../RetroBoard/NewRetro'
import PrevRetro from '../RetroBoard/PrevRetro'
import Token from '../Token'
import './Homepage.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const HomeTabs = () => {
    
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return(
        <div>
            <div className='Actionbar'>
                <Button sx={{width: '120px', marginLeft:'auto', marginTop:'20px', marginRight:'20px', padding:'10px', float:'right'}} 
                  onClick={()=>{navigate("/home/newretro")}} variant="contained">
                    Join retro
                </Button>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs sx={{borderBottom:'1px grey'}} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Give tokens" {...a11yProps(1)} />
                        <Tab label="Previous retro" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {<Dashboard />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {<Token/>}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {<PrevRetro/>}
                </TabPanel>
            </div>
        </div>
    )
}

const HomePage = () => {
  return(
    <Routes> 
      <Route exact path="/" element={<HomeTabs/>}/>
      <Route path="/newretro" element={<NewRetro/>}/>
    </Routes>
  )
}

export default HomePage