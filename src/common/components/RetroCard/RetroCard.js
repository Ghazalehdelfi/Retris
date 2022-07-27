import {Paper} from "@mui/material";


const RetroCard = ({text, color}) => {
    return(
        <Paper sx={{height:'50px', padding:'10px', margin:'10px', backgroundColor:color}}>
            {text}
        </Paper>)
}

export default RetroCard