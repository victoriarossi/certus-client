import AppBar from "@mui/material/AppBar";
import Toolbar from "./components/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import * as React from "react";
import {useRouter} from "next/router";
import {IconButton} from "@mui/material";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const AppAppBarStyle = {
    backgroundColor: '#11e3ab',
};

export default function DashboardAppBar(selected){
    const router = useRouter();
    return(
        <div>
            <AppBar position="fixed" sx={AppAppBarStyle} elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 0 }} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/mintNft"
                        sx={{ fontSize: 65, fontFamily: 'Josefin Sans', fontWeight: '900'  }}
                    >
                        <img src="/assets/4.png" style={{height: 80, marginTop: 30}} alt="Certus Logo"/>
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>

                        <Button variant="text" sx={{color: 'white'}} onClick={() => router.push("/mintNft")}>Mint</Button>

                        <Button variant="text" sx={{color: 'white'}} color="success" onClick={() => router.push("/CollectionNft")}>Transfer NFT</Button>

                        <Button variant="text" sx={{color: 'white'}} onClick={() => router.push("/")}>Log Out</Button>

                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}