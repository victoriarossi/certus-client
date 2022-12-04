import LogIn from "../modules/LogIn";
import * as React from "react";
import Head from "next/head";
import AppAppBar from "../modules/AppAppBar";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DashboardAppBar from "../modules/DashboardAppBar";
import ImageUpload from "../modules/components/ImageUpload";



export default function mintNft() {
    return (
        <>
            <Head><title>Certus - Mint Nft</title></Head>
            <DashboardAppBar class={AppAppBar}></DashboardAppBar>
            <Grid
                position="fixed"
                container
                spacing={0}
                direction="row"
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
                        marginLeft: 0,
                        marginBottom:'100',
                        height: "100%",
                        backgroundColor: '#D9FCF3',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            marginLeft: 60,
                            marginRight: 60
                        }}
                    >
                        <Grid spacing={2} >
                            <Grid item xs={12} color="black">
                                <h2>NFT Information</h2>
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
                            {/*<Grid item xs={12}>*/}
                            {/*    <Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Mint NFT</Button>*/}
                            {/*</Grid>*/}
                        </Grid>
                    </div>
                </Box>
                <Box
                    sx={{
                        marginTop: '100',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom:'100',
                        width: 500,
                        borderRadius: 10,
                        backgroundColor: 'white',
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
                                <h2>NFT personalisation</h2>
                            </Grid>

                            <Grid item xs={12}>
                                <h4 style={{color:'black'}}>Background Images</h4>
                                <TextField id="name" variant="outlined" />
                            </Grid>

                            <Grid item xs={12}>
                                {/*<Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Upload Image</Button>*/}
                                <ImageUpload></ImageUpload>
                            </Grid>

                            <Grid item xs={12}>
                                <h4 style={{color:'black'}}>Flavour Images</h4>
                                <TextField id="description" variant="outlined" multiline rows={4} />
                            </Grid>

                            <Grid item xs={12}>
                                {/*<Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Upload Image</Button>*/}
                                <ImageUpload></ImageUpload>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>

        </>
    )
}