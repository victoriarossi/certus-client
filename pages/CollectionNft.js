import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import Rest from "../modules/Rest";
import * as React from "react";


export default function CollectionNft(){
    return (
        <>
            <Head><title>Certus - Collections</title></Head>
            <DashboardAppBar></DashboardAppBar>
            <Rest></Rest>
        </>
    )
}