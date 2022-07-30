import {Paper} from "@mui/material";


const RetroColumn = ({children}) => {
    return(
        <Paper sx={{height:'50vh', overflow:'auto'}}>
            {children}
        </Paper>)
}

export default RetroColumn