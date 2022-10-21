import Box from '@mui/material/Box'
import * as mui from '@mui/material'
import {Grid} from "@mui/material";
import {Item} from "@mui/material";

const BoxStyle = {
    height: 600,
    backgroundColor: '#11e3ab',
    color: '#11e3ab',
};

function Presentation(){
    return(
        <>
            <Box sx={BoxStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={'https://media.tycsports.com/files/2022/09/28/484810/messi-vs-jamaica-foto-elsagetty-images_416x234.webp?v=1'} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={'https://media.tycsports.com/files/2022/09/28/484810/messi-vs-jamaica-foto-elsagetty-images_416x234.webp?v=1'} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Presentation;