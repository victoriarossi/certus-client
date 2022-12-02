import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from './components/Toolbar';
import Button from '@mui/material/Button';
import {useRouter} from "next/router";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const AppAppBarStyle = {
    backgroundColor: '#11e3ab',
};

function AppAppBar() {
    const router = useRouter();
    return (
        <div>
            <AppBar position="fixed" sx={AppAppBarStyle} elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 }} />
                    <Link
                        variant="h6"
                           underline="none"
                        color="inherit"
                        href="/"
                        sx={{ fontSize: 65, fontFamily: 'Josefin Sans', fontWeight: '900'  }}
                    >
                        <img src="/assets/4.png" style={{height: 80, marginTop: 30}} alt="Certus Logo"/>
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>

                        <Button variant="text" sx={{color: 'white'}} onClick={() => router.push("/LogIn")} >Log In</Button>

                        <Button variant="text" sx={{color: 'white'}} color="success" onClick={() => router.push("/ContactUs")}>Contact Us</Button>

                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;