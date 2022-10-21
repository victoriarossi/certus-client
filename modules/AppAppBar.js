import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from './components/Toolbar';

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
                        sx={{ fontSize: 24 }}
                    >
                        {'CERTUS'}
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/premium-themes/onepirate/sign-in/"
                            sx={rightLink}
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/premium-themes/onepirate/sign-up/"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Sign Up'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;