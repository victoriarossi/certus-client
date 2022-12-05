import LogIn from "../modules/LogIn";
import * as React from "react";
import Head from "next/head";
import AppAppBar from "../modules/AppAppBar";
import Box from "@mui/material/Box";
import {Alert, Grid, ImageList, ImageListItem, ImageListItemBar, Snackbar} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DashboardAppBar from "../modules/DashboardAppBar";
import {useState} from "react";
import {callApi} from "./api/api.js"
import {btoa} from "next/dist/compiled/@edge-runtime/primitives/encoding";
import {useRouter} from "next/router";
import {router} from "next/client";




class mintNft extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            walletDestination: "",
            productImage: null,
            backgroundImages: [],
            flavourImages: [],
            base64Data: null,
            title: null,
            errorOpen: false,
            successOpen: false
        }
    };


    checkFields = () => {
        if (this.state.name === "" || this.state.walletDestination === "" || this.state.desc === "" || this.state.backgroundImages === [] || this.state.flavourImages === [] || this.state.productImage === null || this.state.backgroundImages.length !== this.state.flavourImages.length){
            return false
        }
        return true
    }

    errorHandler = () => {
        this.setState({
            errorOpen: !this.state.errorOpen
        })
    };

    successHandler = () => {
        this.setState({
            successOpen: !this.state.successOpen
        })
    }


    _handleReaderLoaded = (e) => {
        console.log('file uploaded 2: ', e);
        let binaryString = e.target.result;
        this.setState({
            base64Data: btoa(binaryString),
        });
    };

    onChangeBase64 = (e) => {

        let file = e.target.files[0];

        this.setState({
            title: e.target.files[0].name
        })

        if (file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };

    backgroundDelay = () => {
        console.log(this.state.base64Data)
        this.setState({
            backgroundImages: [...this.state.backgroundImages, {image: this.state.base64Data, name: this.state.title}]

        })
    };

    flavourDelay = () => {
        console.log(this.state.base64Data)
        this.setState({
            flavourImages: [...this.state.flavourImages,  {image: this.state.base64Data, name: this.state.title}]
        })
    };

    productDelay = () => {
        console.log(this.state.base64Data)
        this.setState({
            productImage: this.state.base64Data
        })
    };

    render() {
        return (
            <>
                <Head><title>Certus - Mint Nft</title></Head>
                <DashboardAppBar class={AppAppBar}></DashboardAppBar>
                <Grid
                    position="fixed"
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        marginTop: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                    }}
                >
                    <Box
                        sx={{
                            marginTop: '100',
                            marginLeft: 0,
                            marginBottom:'100',
                            height: "100%",
                            backgroundColor: '#D9FCF3',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                marginLeft: 60,
                                marginRight: 60
                            }}
                        >
                            <Grid spacing={2} >
                                <Grid item xs={12} color="black">
                                    <h2>NFT Information</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            height: "200px",
                                            width: "200px",
                                            backgroundColor: '#11e3ab',
                                            borderRadius: "10px"
                                        }}
                                    >
                                        <img src={`data:image;base64,${this.state.productImage}`} style={{width:"200px", height:"200px"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="file"
                                        id="file"
                                        accept=".jpg, .jpeg, .png"
                                        // onChange={(e) => handler(e.target.value)}
                                        onChange ={(e) => {

                                            this.onChangeBase64(e);

                                            setTimeout(this.productDelay, 1000)
                                        }}
                                        style={{
                                            backgroundColor: '#11e3ab',
                                            color: 'black',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Name</h4>
                                    <TextField id="name" variant="outlined" onChange={
                                        (e) => this.setState({
                                            name: e.target.value
                                        })
                                    } />
                                </Grid>
                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Description</h4>
                                    <TextField id="description" variant="outlined" multiline rows={4} onChange={
                                        (e) => this.setState({
                                            desc: e.target.value
                                        })
                                    }  />
                                </Grid>
                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Wallet (Wallet)</h4>
                                    <TextField id="walletDestination" variant="outlined" multiline onChange={
                                        (e) => this.setState({
                                            walletDestination: e.target.value
                                        })
                                    }  />
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '100',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom:'100',
                            width: 500,
                            borderRadius: 10,
                            backgroundColor: 'white',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Grid spacing={2} >

                                <Grid item xs={12} color="black">
                                    <h2>NFT personalisation</h2>
                                </Grid>

                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Background Images</h4>
                                    <ImageList sx={{ width: 500, height: 200, backgroundColor: '#D9FCF3', borderRadius: '20px'}} cols={3} rowHeight={164}>
                                        {
                                            this.state.backgroundImages.map((item) =>
                                                (
                                                    <ImageListItem key={item}>
                                                        {/*<img*/}
                                                        {/*    src={`${item.base64}?w=164&h=164&fit=crop&auto=format`}*/}
                                                        {/*    srcSet={`${item.base64}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}*/}
                                                        {/*    alt={item.title}*/}
                                                        {/*    loading="lazy"*/}
                                                        {/*/>*/}
                                                        <img src={`data:image;base64,${item.image}`} />
                                                        <ImageListItemBar
                                                            title={item.name}
                                                        />
                                                    </ImageListItem>
                                                )
                                            )
                                        }
                                    </ImageList>
                                </Grid>

                                <Grid item xs={12}>
                                    {/*<ImageUpload images={backgroundImages}></ImageUpload>*/}
                                    <input
                                        type="file"
                                        id="file"
                                        accept=".jpg, .jpeg, .png"
                                        // onChange={(e) => handler(e.target.value)}
                                        onChange ={(e) => {

                                            this.onChangeBase64(e);

                                            setTimeout(this.backgroundDelay, 1000)
                                        }}
                                        style={{
                                            backgroundColor: '#11e3ab',
                                            color: 'black',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Flavour Images</h4>
                                        <ImageList sx={{ width: 500, height: 200, backgroundColor: '#D9FCF3', borderRadius: '20px'}} cols={3} rowHeight={164}>
                                            {
                                                this.state.flavourImages.map((item) =>
                                                    (
                                                        <ImageListItem key={item}>
                                                            <img src={`data:image;base64,${item.image}`} />
                                                            <ImageListItemBar
                                                                title={item.name}
                                                            />
                                                        </ImageListItem>
                                                    )
                                                )
                                            }
                                        </ImageList>
                                </Grid>

                                <Grid item xs={12}>
                                    {/*<ImageUpload images={flavourImages}></ImageUpload>*/}
                                    <input
                                        type="file"
                                        id="file"
                                        accept=".jpg, .jpeg, .png"
                                        // onChange={(e) => handler(e.target.value)}
                                        ref={this.inputRef}
                                        onChange ={(e) => {

                                            this.onChangeBase64(e);

                                            setTimeout(this.flavourDelay, 1000)
                                        }}
                                        style={{
                                            backgroundColor: '#11e3ab',
                                            color: 'black',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button style={{backgroundColor:'#11e3ab', color:'black', marginTop:30}} onClick={() => {if (this.checkFields === true) {callApi(this.state.name, this.state.desc, this.state.backgroundImages, this.state.flavourImages, this.state.productImage, this.state.walletDestination).then(this.successHandler)} else {this.errorHandler()}}}
                                    >Mint Nft
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>

                </Grid>
                <Snackbar open={this.state.errorOpen} autoHideDuration={6000} onClose={this.errorHandler}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        Couldn't mint nft
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.successOpen} autoHideDuration={6000} onClose={this.successHandler}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Success! Nft minted
                    </Alert>
                </Snackbar>
            </>
        );
    }

}

export default mintNft;

