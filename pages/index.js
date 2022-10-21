import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppBar} from "@mui/material";
import AppAppBar from "../modules/AppAppBar";
import Presentation from "../modules/Presentation";
import Presentation2 from "../modules/Presentacion2";



export default function Home() {
  return (
      <>
        <Head><title>Certus</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
            <Presentation></Presentation>
          <Presentation2></Presentation2>
          <Presentation></Presentation>
          <Presentation2></Presentation2>
          <Presentation></Presentation>

      </>
  )
}
