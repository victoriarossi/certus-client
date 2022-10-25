import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppBar, Grid, Typography} from "@mui/material";
import AppAppBar from "../modules/AppAppBar";
import Presentation from "../modules/Presentation";
import Presentation2 from "../modules/Presentacion2";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";



export default function Home() {
  return (
      <>
        <Head><title>Certus</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
<div style={{backgroundColor: '#f3f6f7'}} >
            <Presentation></Presentation>
            <Box
              sx={{
                  marginTop: -30,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '85%',
                  height: 450,
                  borderRadius: 10,
                  backgroundColor: '#D9FCF3',
              }}
            >

                    <Grid container spacing={2}>
                        <Grid item xs={6} sx={{color: 'white', fontFamily: 'Josefin Sans', fontSize: 65}}>
                            <Typography variant="h2"  sx={{color:'#11e3ab', fontFamily: 'Roboto', marginTop: 10, marginLeft: 15, fontSize: 50, alignItems: 'left'}}
                                        align="center" marked="center"
                            >
                                Claim product NFTs with your personal wallet or just your email.
                            </Typography>


                        </Grid>
                        <Grid item xs={6}>
                            <div sx={{    display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',}}>
                                <img alt="graphic" src="/assets/undraw_mobile_encryption_re_yw3o.svg" style={{
                                    width: 400,
                                    marginTop: 30,
                                    marginLeft: 200,
                                }} />
                            </div>
                        </Grid>
                    </Grid>

            </Box>
          <Presentation2></Presentation2>

</div>
      </>
  )
}
