import AppAppBar from "../modules/AppAppBar";
import Head from "next/head";
import * as React from "react";
import SideBar from "../modules/SideBar";
import {Grid, Stack} from "@mui/material";
import Landing from "../modules/Landing";
import ContactUs from "./ContactUs";
import Rest from "../modules/Rest";


export default function Dashboard(){
    return(
        <>
            <Head><title>Certus - Dashboard</title></Head>
            {/*<AppAppBar></AppAppBar>*/}

            <Grid
                container
                spacing={0}
            >

                <Grid item xs={2}>
                    <SideBar></SideBar>
                </Grid>

                <Grid item xs={10}>
                    <Rest></Rest>
                </Grid>
            </Grid>

            {/*<Stack*/}
            {/*    direction="row"*/}
            {/*    spacing={0}*/}
            {/*    justifyContent="center"*/}
            {/*    alignItems="stretch"*/}
            {/*>*/}
            {/*    <SideBar></SideBar>*/}
            {/*    <Rest></Rest>*/}
            {/*</Stack>*/}

        </>
    )
}