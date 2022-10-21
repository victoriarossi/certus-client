import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppBar} from "@mui/material";
import AppAppBar from "../modules/AppAppBar";
import Presentation from "../modules/Presentation";



export default function Home() {
  return (
      <>
        <Head>Client Landing Page<title>Client Landing Page</title></Head>

                <AppAppBar class={AppAppBar}></AppAppBar>
                <Presentation></Presentation>
      </>
  )
}
