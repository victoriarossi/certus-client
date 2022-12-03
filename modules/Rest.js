import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";


function Option(){
    return (
        <>
            <Box
                sx={{
                    width: '85',
                    height: '500',
                    borderRadius: 10,
                    backgroundColor: '#D9FCF3',
                }}
            >

            </Box>
        </>
    )
}

export default function Rest(){
    return(
        <>
            <Grid
                position="fixed"
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginTop: 0,
                    marginRight: 0,
                    height: '100%',
                    
                    backgroundColor: '#D9FCF3',
                }}
            >

            </Grid>
        </>
    )
}