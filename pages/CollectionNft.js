import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import Rest from "../modules/Rest";
import * as React from "react";
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";


export default function CollectionNft(){
    return (
        <>
            <Head><title>Certus - Collections</title></Head>
            <DashboardAppBar></DashboardAppBar>
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
                    backgroundColor: '#D9FCF3',
                }}
            >

                <div className="description-login font colorfont1 center-text" style={{color: '#11e3ab', marginBottom: 50}}>
                    Transfer NFT
                </div>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 500,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: '#11e3ab',
                    }}
                >

                    <div
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <Grid
                            contairner
                        >
                            <Grid item xs={12}>
                                <TextField fullWidth label="Wallet" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor"/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button style={{marginTop: 10, marginBottom: 10, backgroundColor:'#D9FCF3', color: '#11e3ab'}} variant="contained">Transfer</Button>
                            </Grid>

                        </Grid>
                    </div>
                </Box>
            </Grid>
        </>
    )
}