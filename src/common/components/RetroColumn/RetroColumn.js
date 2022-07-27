import {Paper} from "@mui/material";


const RetroColumn = ({children}) => {
    return(
        <Paper sx={{height:'80vh', overflow:'hidden'}}>
            {children}
        </Paper>)
}

export default RetroColumn