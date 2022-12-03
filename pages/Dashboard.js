import AppAppBar from "../modules/AppAppBar";
import Head from "next/head";
import * as React from "react";
import SideBar from "../modules/SideBar";
import {Grid, Stack} from "@mui/material";
import Landing from "../modules/Landing";
import ContactUs from "./ContactUs";
import Rest from "../modules/Rest";
import DashboardAppBar from "../modules/DashboardAppBar";


export default function Dashboard(){
    return(
        <>
            <Head><title>Certus - Dashboard</title></Head>
            <DashboardAppBar></DashboardAppBar>
            <Rest></Rest>
        </>
    )
}