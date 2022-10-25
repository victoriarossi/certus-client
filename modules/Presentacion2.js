import Box from '@mui/material/Box'
import * as mui from '@mui/material'
import {Grid} from "@mui/material";
import {Item} from "@mui/material";
import Button from "@mui/material/Button";

const BoxStyle = {
    height: 600,
    backgroundColor: '#f3f6f7',
    color: '#11e3ab',
    display: 'flex', overflow: 'hidden',
};

function Presentation2(){
    return(
        <>
            <Box sx={BoxStyle}
                 component="section"
            >
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{color: '#041d3d', fontFamily: 'Josefin Sans', fontSize: 65, marginLeft: 15, marginTop: 30}}>
                        {'Demo our product now'}
                    </Grid>
                    <Grid item xs={3} sx={{marginLeft: 25, marginTop: 30}}>
                        <Button size="large" variant={"contained"} color={"success"} href="https://certus.vercel.app/">Try It Out</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Presentation2;