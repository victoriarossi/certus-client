import Box from '@mui/material/Box'
import * as mui from '@mui/material'
import {Grid, Typography} from "@mui/material";
import {Item} from "@mui/material";

const BoxStyle2 = {
    height: 300,
    backgroundColor: '#11e3ab',
    color: '#11e3ab',
    display: 'flex', overflow: 'hidden',
    marginBottom: 10,
};

const BoxStyle = {
    height: 250,
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

                    <Typography variant="h3"  sx={{color:'#f3f6f7', fontFamily: 'Josefin Sans', marginTop:10, marginLeft: 'auto', marginRight: 'auto', fontSize: 100}}
                        align="center" marked="center"
                    >
                        NFTs For Your Products
                    </Typography>
            </Box>

            <Box sx={BoxStyle2}
                 component="section"
            >
                <Typography variant="h2"  sx={{color:'#f3f6f7', fontFamily: 'Josefin Sans', marginTop: 0, marginLeft: 'auto', marginRight: 'auto', fontSize: 50}}
                            align="center" marked="center"
                >
                    Blockchain backed authentication for goods and services.
                </Typography>
            </Box>

        </>
    );
}

export default Presentation;