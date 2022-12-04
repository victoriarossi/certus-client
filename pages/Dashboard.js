import AppAppBar from "../modules/AppAppBar";
import Head from "next/head";
import * as React from "react";
import SideBar from "../modules/SideBar";
import {Avatar, Container, Grid, Stack} from "@mui/material";
import Landing from "../modules/Landing";
import ContactUs from "./ContactUs";
import Rest from "../modules/Rest";
import DashboardAppBar from "../modules/DashboardAppBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import _Card from "../modules/Card";


export default function Dashboard(){
    return(
        <>
            <Head><title>Certus - Dashboard</title></Head>

            <DashboardAppBar></DashboardAppBar>

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
                                <div className="description-login font colorfont1 center-text" style={{color: 'black', marginBottom: 50}}>
                                    Adidas
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Avatar
                                    alt="logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsk1HAuuVLuDMefiynhEBiMD71zmAjXuSRiw&usqp=CAU"
                                    sx={{ width: 200, height: 200}}
                                ></Avatar>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box
                    sx={{
                        marginTop: '100',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom:'100',

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
                        <Grid container spacing={4} >

                            <Grid item xs={12}>
                                <Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Upload Image</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>



        </>
    )
}