import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import Rest from "../modules/Rest";
import * as React from "react";


export default function Profile(){
    return (
        <>
            <Head><title>Certus - Profile</title></Head>
            <DashboardAppBar></DashboardAppBar>
            <Rest></Rest>
        </>
    )
}