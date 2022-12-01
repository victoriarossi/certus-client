import Head from "next/head";
import AppAppBar from "./AppAppBar";
import { styled } from '@mui/material/styles';
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import {Grid, TextField} from "@mui/material";

function GridItem(theme){
    return(
        <>

        </>
    )
}

function LogIn(){
    return (
        <>
            <Head><title>Certus - Log In</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
            <Box
                position="fixed"
                sx={{
                    marginTop: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#11e3ab',
                }}
            >

                <Box
                    sx={{
                        marginTop: '100',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 500,
                        height: 600,
                        borderRadius: 10,
                        backgroundColor: '#D9FCF3',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                        <Grid
                            contairner
                        >
                            <Grid item xs={12}>
                                Log In
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="standard-basic" label="user" variant="standard"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="standard-basic" label="user" variant="standard"/>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default LogIn;