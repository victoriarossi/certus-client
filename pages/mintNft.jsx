import LogIn from "../modules/LogIn";
import * as React from "react";
import Head from "next/head";
import AppAppBar from "../modules/AppAppBar";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DashboardAppBar from "../modules/DashboardAppBar";



export default function mintNft() {
    return (
        <>
            <Head><title>Certus - Mint Nft</title></Head>
            <DashboardAppBar class={AppAppBar}></DashboardAppBar>
            <Grid
                position="fixed"
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginTop: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                }}
            >
                <Box
                    sx={{
                        marginTop: '100',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom:'100',
                        width:500,
                        borderRadius: 10,
                        backgroundColor: '#D9FCF3',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Grid spacing={2} >
                            <Grid item xs={12} color="black">
                                <h2>Mint Nft</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <h4 style={{color:'black'}}>Name</h4>
                                <TextField id="name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <h4 style={{color:'black'}}>Description</h4>
                                <TextField id="description" variant="outlined" multiline rows={4} />
                            </Grid>
                            {/*<div>*/}
                            {/*    <h4></h4>*/}
                            {/*    <TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
                            {/*</div>*/}
                            <Grid item xs={12}>
                                <Button style={{backgroundColor:'#11e3ab'}} variant="contained" >Mint NFT</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Box>

            </Grid>

        </>
    )
}