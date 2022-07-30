import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import RetroColumn from "../../common/components/RetroColumn/RetroColumn";
import RetroCard from "../../common/components/RetroCard/RetroCard";
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
        <Grid container direction="column">
          <Grid container item direction="row" xs={1} spacing={2}>
            <Grid item xs={4}>
              <Typography align="center" variant="h4">
                Good
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center" variant="h4">
                Improve
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center" variant="h4">
                Action
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="row" xs={11} spacing={3}>
            <Grid item xs={4}>
              <RetroColumn>
                <RetroCard text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} color={"#E1EEC7"} />
                <RetroCard text={"ho"} color={"#E1EEC7"} />
                <RetroCard text={"hi"} color={"#E1EEC7"} />
                <RetroCard text={"ho"} color={"#E1EEC7"} />
              </RetroColumn>
            </Grid>
            <Grid item xs={4}>
              <RetroColumn>
                <RetroCard text={"hi"} color={"#FF7377"} />
                <RetroCard text={"ho"} color={"#FF7377"} />
                <RetroCard text={"hi"} color={"#FF7377"} />
                <RetroCard text={"ho"} color={"#FF7377"} />
              </RetroColumn>
            </Grid>
            <Grid item xs={4}>
              <RetroColumn>
                <RetroCard text={"hi"} color={"#e1f1fd"} />
                <RetroCard text={"ho"} color={"#e1f1fd"} />
                <RetroCard text={"hi"} color={"#e1f1fd"} />
                <RetroCard text={"ho"} color={"#e1f1fd"} />   
              </RetroColumn>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="workpad">
        <Paper sx={{height:'20vh'}}>
        personal workpad
        </Paper>
      </div>
    </div>
  );
};

export default NewRetro;
