import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";

function Option(){
    return (
        <>
                <Box
                    style={{
                        width: '100%',
                        height: '200',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#D9FCF3',
                    }}
                >
                    Hlaadadaddddddddddddd
                </Box>
        </>
    )
}

export default function SideBar(){
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
                    marginLeft: 0,
                    height: '100%',
                    width: 200,
                    backgroundColor: '#11e3ab',
                }}
            >
                <Grid item xs={12}>
                    <Option></Option>
                </Grid>
                <Grid item xs={12}>
                    <Option></Option>
                </Grid>
                <Grid item xs={12}>
                    <Option></Option>
                </Grid>
            </Grid>
        </>
    )
}