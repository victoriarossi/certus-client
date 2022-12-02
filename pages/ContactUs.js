import Head from "next/head";
import AppAppBar from "../modules/AppAppBar";
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";


function ContactUs(){
    return (
        <>
            <Head><title>Certus - Contact Us</title></Head>
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
                    CONTACT US
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
                                <TextField fullWidth label="Business Name" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Business Field" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor"/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button style={{marginTop: 10, marginBottom: 10, backgroundColor:'#11e3ab'}} variant="contained" >Contact Us</Button>
                            </Grid>

                        </Grid>
                    </div>
                </Box>
            </Grid>
        </>
    )
}

export default ContactUs;