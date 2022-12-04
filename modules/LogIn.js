import Head from "next/head";
import AppAppBar from "./AppAppBar";
import * as React from "react";
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";


function GridItem(theme){
    return(
        <>

        </>
    )
}

// async function loginHandler(){
//     const res = await fetch("certusapi.brazilsouth.cloudapp.azure.com:80/login", {
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 "email":"lautihernando6@gmail.com",
//                 "password":"laucha"
//             }
//         )
//     })
//     return await res.json().token
// }

function _LogIn(){
    const router = useRouter();

    let token;
    token = "nada"

    const loginHandler = async () => {
        const res = await fetch("http://certusapi.brazilsouth.cloudapp.azure.com:80/login", {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
            {
                    email:"lautihernando6@gmail.com",
                    password:"laucha"
                }
            )
        // }).then((response) => token = response.json().user.id).catch((err) => console.log(err.message))
        }).then(async (response) => console.log("response dentro del .then" + await response)).catch(async (err) => console.log("error msg:" + await err.message))
        console.log("res: " + await res)
        router.push("/Dashboard")
    }

    return (
        <>
            <Head><title>Certus - Log In</title></Head>
            <AppAppBar class={AppAppBar}></AppAppBar>
            <Grid
                position="fixed"
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginTop: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#11e3ab',
                }}
            >

                <div className="description-login font colorfont1 center-text" style={{color: '#D9FCF3', marginBottom: 50}}>
                    LOG IN
                </div>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 500,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: '#D9FCF3',
                    }}
                >

                    <div
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <Grid
                            contairner
                        >
                            <Grid item xs={12}>
                                <TextField fullWidth label="user" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="password" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                {/*<Button variant="outlined" style={, justifySelf: "center"}}>Log In</Button>*/}
                                <Button
                                    style={{marginTop: 10, marginBottom: 10, backgroundColor:'#11e3ab'}}
                                    variant="contained"
                                    // onClick={() => router.push("/Dashboard")}
                                    onClick={() => loginHandler()}
                                >
                                    Log In
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="text-login font colorfont1 center-text" style={{marginTop: 10,color: '#041D3D'}}>
                                    {token}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="text-login font colorfont1 center-text" style={{marginTop: 10,color: '#041D3D'}}>
                                    Not have an account? Sign Up now
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>
        </>
    )
}

export default _LogIn;