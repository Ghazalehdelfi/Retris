import Button from '@mui/material/Button';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
            <Typography>{children}</Typography>
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

const HomePage = () => {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return(
        <div>
            <div className='Actionbar'>
                <Button sx={{width: '120px', marginLeft:'auto', marginTop:'20px', marginRight:'20px', padding:'10px', float:'right'}} onClick={()=>{}} variant="contained">Join retro</Button>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs sx={{borderBottom:'1px grey'}} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Give tokens" {...a11yProps(1)} />
                        <Tab label="Previous retro" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                Dashboard
                </TabPanel>
                <TabPanel value={value} index={1}>
                Give tokens
                </TabPanel>
                <TabPanel value={value} index={2}>
                Previous Retro
                </TabPanel>
            </div>
            <div className='Body'>
            </div>
        </div>
    )
}

export default HomePage