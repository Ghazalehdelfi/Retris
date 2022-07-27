import React from "react";
import {Paper, Grid} from "@mui/material";

const Dashboard = () => {

  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{height:'calc(50vh - 100px)'}}>Personal Stats</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{height:'calc(50vh - 100px)'}}>Team Stats</Paper>
          </Grid>
        </Grid>
    </div>
)
}

export default Dashboard