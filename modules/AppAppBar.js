import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from './components/Toolbar';
import Button from '@mui/material/Button';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const AppAppBarStyle = {
    backgroundColor: '#11e3ab',
};

function AppAppBar() {
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
                        sx={{ fontSize: 65, fontFamily: 'Josefin Sans'}}
                    >
                        <img src="/assets/4.png" style={{height: 80, marginTop: 30}} alt="Certus Logo"/>
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="https://certus.vercel.app/"
                            sx={rightLink}
                        >
                            <Button variant="contained">Try it out</Button>
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/premium-themes/onepirate/sign-up/"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            <Button variant="outlined" sx={{outlineColor: 'white'}}>Contact Us</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;