import Box from '@mui/material/Box'
import * as mui from '@mui/material'
import {Grid} from "@mui/material";
import {Item} from "@mui/material";

const BoxStyle = {
    height: 600,
    backgroundColor: '#11e3ab',
    color: '#11e3ab',
    display: 'flex', overflow: 'hidden',
};

function Presentation(){
    return(
        <>
            <Box sx={BoxStyle}
                 component="section"
            >
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{color: 'white', fontFamily: 'Josefin Sans', fontSize: 65}}>
                        {'NFTs for your products'}
                    </Grid>
                    <Grid item xs={6}>
                        <img src="/assets/undraw_mobile_encryption_re_yw3o.svg" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Presentation;