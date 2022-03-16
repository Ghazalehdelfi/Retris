import { Typography } from '@mui/material'
import './NewRetro.css'

const NewRetro = () => {
    return(
        <div className='columns'>
            <div className='good column'>
                <div className='box-title'>
                    <Typography variant='h5'>
                        what was good
                    </Typography>
                </div>
                <div className='box'>

                </div>
            </div>
            <div className='shit column'>
                <div className='box-title'>
                    <Typography variant='h5'>
                        what was shit
                    </Typography>
                </div>
                <div className='box'>
                    
                </div>
            </div>
            <div className='action column'>
            <div className='box-title'>
                    <Typography variant='h5'>
                        action items
                    </Typography>
                </div>
                <div className='box'>
                    
                </div>
            </div>
        </div>
        
        )
}

export default NewRetro
