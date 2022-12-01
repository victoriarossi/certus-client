import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppBar, Grid, Typography} from "@mui/material";
import AppAppBar from "../modules/AppAppBar";
import Landing from "../modules/Landing"
import LogIn from "../modules/LogIn";
import Presentation from "../modules/Presentation";
import Presentation2 from "../modules/Presentacion2";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";



export default function Home() {
  return (
      <>
          {/*<Landing></Landing>*/}
          <LogIn></LogIn>
      </>
  )
}
