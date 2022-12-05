import Head from "next/head";
import AppAppBar from "./AppAppBar";
import Presentation from "./Presentation";
import Box from "@mui/material/Box";
import {Grid, Stack, Typography} from "@mui/material";
import Presentation2 from "./Presentacion2";
import * as React from "react";
import WineBarIcon from '@mui/icons-material/WineBar';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

function Landing() {
    return(
        <>
            <Head><title>Certus</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
            <div style={{backgoundColor: '#f3f6f7'}}>
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
                            <Typography variant="h2" sx={{
                                color: '#11e3ab',
                                fontFamily: 'Roboto',
                                marginTop: 10,
                                marginLeft: 15,
                                fontSize: 50,
                                alignItems: 'left'
                            }}
                                        align="center" marked="center"
                            >
                                Claim product NFTs with just your email.
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <div sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                            }}>
                                <img alt="graphic" src="/assets/undraw_mobile_encryption_re_yw3o.svg" style={{
                                    width: 400,
                                    marginTop: 30,
                                    marginLeft: 200,
                                }}/>
                            </div>
                        </Grid>

                    </Grid>

                </Box>
                <Presentation2></Presentation2>

                <Stack sx={{backgroundColor:'#11e3ab'}}>
                    <Typography variant="h3"  sx={{color:'#11e3ab', borderRadius: 20, padding: 1,fontWeight: "bold",fontFamily: 'Josefin Sans', marginTop:10, marginLeft: 'auto', marginRight: 'auto', fontSize: 50, backgroundColor: '#f3f6f7' }}
                        align="center" marked="center"
                    >  <WineBarIcon fontSize={"large"}/>
                        Wine Industry </Typography>
                    <Stack direction={"row"} sx={{ margin: 5, marginLeft: 20, marginRight: 20, verticalAlign: "center"}}>
                    <Typography sx={{fontSize: 20, fontFamily: "Roboto"}}> The world of wine is characteristic for its exclusive variety of fine goods. Sommeliers and other afficionates
                        enjoy the experience that comes along with the tasting: finding the right wine and determining its origins and
                        quality. Certus makes sure our customers can instantly know what they are purchasing, with the highest degree
                        of authenticity certainty. Fake wines with fake label duplicates? Not a problem anymore. Take an NFT with your
                        bottle and find out everything about it.
                    </Typography>
                        <img src="/assets/winery.jpg"  alt={""} width={460} style={{borderRadius: 50}}/>
                    </Stack>
                </Stack>

                <Stack sx={{backgroundColor:'#11e3ab'}}>
                    <Typography variant="h3"  sx={{color:'#11e3ab', borderRadius: 20, padding: 1,fontWeight: "bold",fontFamily: 'Josefin Sans', marginTop:10, marginLeft: 'auto', marginRight: 'auto', fontSize: 50, backgroundColor: '#f3f6f7' }}
                                align="center" marked="center"
                    >  <SportsBasketballIcon fontSize={"large"}/>
                        Sneakers </Typography>
                    <Stack direction={"row"} sx={{ margin: 5, marginLeft: 20, marginRight: 20, verticalAlign: "center"}}>
                        <Typography sx={{fontSize: 20, fontFamily: "Roboto"}}> New generations bring new trends. The sneaker market is booming,
                            but its very easy to find cheap knockoff, barely distinguishable from originals by the average consumer. Harming both
                            brands and consumer's pockets, solving this problem is of the upmost importance. We are that solution. Expect an NFT from the
                            original brand with your exclusive items, or take the risk of being a knockoff victim.

                        </Typography>
                        <img src="/assets/winery.jpg"  alt={""} width={460} style={{borderRadius: 50}}/>
                    </Stack>
                </Stack>
            </div>
        </>

    )
}

export default Landing;