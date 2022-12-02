import Head from "next/head";
import AppAppBar from "./AppAppBar";
import { styled } from '@mui/material/styles';
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";


function Register(){
    return (
        <>
            <Head><title>Certus - Log In</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
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
                    backgroundColor: '#11e3ab',
                }}
            >

                <div className="description-login font colorfont1 center-text" style={{color: '#D9FCF3', marginBottom: 50}}>
                    LOG IN
                </div>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 500,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: '#D9FCF3',
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
                                <TextField fullWidth label="user" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="password" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                {/*<Button variant="outlined" style={, justifySelf: "center"}}>Log In</Button>*/}
                                <Button style={{marginTop: 10, marginBottom: 10, backgroundColor:'#11e3ab'}} variant="contained" >Log In</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="text-login font colorfont1 center-text" style={{marginTop: 10,color: '#041D3D'}}>
                                    Not have an account? Sign Up now
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>
        </>
    )
}

export default Register;