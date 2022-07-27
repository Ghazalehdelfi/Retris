import { Typography, Button, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import "./NewRetro.css";

const NewRetro = () => {
  const navigate = useNavigate();
  //how to make tickets wrap the text?
  //TODO: create component for tickets
  return (
    <div className="root">
      <div className="header">
        <Button
          sx={{
            alignItems: "center",
            marginRight: "auto",
            paddingLeft: "0",
            color: "white",
          }}
          onClick={() => {
            navigate("/home");
          }}
          startIcon={<ArrowBackIcon />}
        >
          Home
        </Button>
      </div>
      <div className="columns">
      <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper>good</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>bad</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>worse</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={4}>
            <Paper>good1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>bad1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>worse1</Paper>
          </Grid>
        </Grid>
        
        {/* <Grid item xs={4}>
          <Paper>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=4</Paper>
        </Grid> */}
      </Grid>
      </div>
      {/* <div className="columns">
        <div className="retro-column">
          <div className="box-title">
            <Typography variant="h5">What was good</Typography>
          </div>
          <Paper
            className="box"
            elevation={3}
            sx={{
              paddingTop: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
          </Paper>
        </div>
        <div className="retro-column">
          <div className="box-title">
            <Typography variant="h5">What needs improvement</Typography>
          </div>
          <Paper
            className="box"
            elevation={3}
          ></Paper>
        </div>
        <div className="retro-column">
          <div className="box-title">
            <Typography variant="h5">Action items</Typography>
          </div>
          <Paper
            className="box"
            elevation={3}
          ></Paper>
        </div>
      </div> */}
    </div>
  );
};

export default NewRetro;
