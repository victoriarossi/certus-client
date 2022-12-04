import LogIn from "../modules/LogIn";
import * as React from "react";
import Head from "next/head";
import AppAppBar from "../modules/AppAppBar";
import Box from "@mui/material/Box";
import {Grid, ImageList, ImageListItem} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DashboardAppBar from "../modules/DashboardAppBar";
import ImageUpload from "../modules/components/ImageUpload";
import {useState} from "react";
import {callApi} from "./api/api.js"

class mintNft extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            desc: String,
            backgroundImages: [],
            flavourImages: []
        }
    }


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
                                    <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
                                        {
                                            this.state.backgroundImages.map((item) =>
                                                (
                                                    <ImageListItem key={item.img}>
                                                        <img
                                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={item.title}
                                                            loading="lazy"
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
                                        onChange ={(e) =>
                                            this.setState({
                                                // backgroundImages: this.state.backgroundImages.push(e.target.value)
                                                backgroundImages: [...this.state.backgroundImages, e.target.value]
                                            })
                                        }
                                        style={{
                                            backgroundColor: '#11e3ab',
                                            color: 'black',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <h4 style={{color:'black'}}>Flavour Images</h4>
                                    <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
                                        {
                                            this.state.flavourImages.map((item) =>
                                                (
                                                    <ImageListItem key={item.img}>
                                                        <img
                                                            // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={item.title}
                                                            loading="lazy"
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
                                        onChange ={(e) =>
                                            this.setState({
                                                // flavourImages: this.state.flavourImages.push(e.target.value)
                                                flavourImages: [...this.state.flavourImages, e.target.value]
                                            })
                                        }
                                        style={{
                                            backgroundColor: '#11e3ab',
                                            color: 'black',
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button style={{backgroundColor:'#11e3ab', color:'black', marginTop:30}} onClick={() => callApi(name, desc)}
                                    >Mint Nft
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>

                </Grid>
            </>
        );
    }

}

export default mintNft;

// export default function mintNft() {
//
//     const [name, setName] = useState('');
//     const [desc, setDesc]= useState('');
//
//     const handleNameChange = event => {
//         setName(event.target.value);
//     }
//
//     const handleDescChange = event => {
//         setDesc(event.target.value);
//     }
//
//
//     return (
//         <>
//             <Head><title>Certus - Mint Nft</title></Head>
//             <DashboardAppBar class={AppAppBar}></DashboardAppBar>
//             <Grid
//                 position="fixed"
//                 container
//                 spacing={0}
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="center"
//                 sx={{
//                     marginTop: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'white',
//                 }}
//             >
//                 <Box
//                     sx={{
//                         marginTop: '100',
//                         marginLeft: 0,
//                         marginBottom:'100',
//                         height: "100%",
//                         backgroundColor: '#D9FCF3',
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             height: '100%',
//                             marginLeft: 60,
//                             marginRight: 60
//                         }}
//                     >
//                         <Grid spacing={2} >
//                             <Grid item xs={12} color="black">
//                                 <h2>NFT Information</h2>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <h4 style={{color:'black'}}>Name</h4>
//                                 <TextField id="name" variant="outlined" onChange={handleNameChange} value={name}/>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <h4 style={{color:'black'}}>Description</h4>
//                                 <TextField id="description" variant="outlined" multiline rows={4} onChange={handleDescChange} value={desc} />
//                             </Grid>
//                         </Grid>
//                     </div>
//                 </Box>
//                 <Box
//                     sx={{
//                         marginTop: '100',
//                         marginLeft: 'auto',
//                         marginRight: 'auto',
//                         marginBottom:'100',
//                         width: 500,
//                         borderRadius: 10,
//                         backgroundColor: 'white',
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             height: '100%',
//                         }}
//                     >
//                         <Grid spacing={2} >
//
//                             <Grid item xs={12} color="black">
//                                 <h2>NFT personalisation</h2>
//                             </Grid>
//
//                             <Grid item xs={12}>
//                                 <h4 style={{color:'black'}}>Background Images</h4>
//                                 <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
//                                     {
//                                         backgroundImages.map((item) =>
//                                             (
//                                             <ImageListItem key={item.img}>
//                                                 <img
//                                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                                     alt={item.title}
//                                                     loading="lazy"
//                                                 />
//                                             </ImageListItem>
//                                             )
//                                         )
//                                     }
//                                 </ImageList>
//                             </Grid>
//
//                             <Grid item xs={12}>
//                                 {/*<Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Upload Image</Button>*/}
//                                 <ImageUpload images={backgroundImages}></ImageUpload>
//                             </Grid>
//
//                             <Grid item xs={12}>
//                                 <h4 style={{color:'black'}}>Flavour Images</h4>
//                                 <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
//                                     {
//                                         flavourImages.map((item) =>
//                                             (
//                                                 <ImageListItem key={item.img}>
//                                                     <img
//                                                         src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                                         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                                         alt={item.title}
//                                                         loading="lazy"
//                                                     />
//                                                 </ImageListItem>
//                                             )
//                                         )
//                                     }
//                                 </ImageList>
//                             </Grid>
//
//                             <Grid item xs={12}>
//                                 {/*<Button style={{backgroundColor:'#11e3ab', marginTop: 20, marginBottom: 20}} variant="contained">Upload Image</Button>*/}
//                                 <ImageUpload images={flavourImages}></ImageUpload>
//                             </Grid>
//
//                             <Grid item xs={12}>
//                                 <Button style={{backgroundColor:'#11e3ab', color:'black', marginTop:30}} onClick={() => callApi(name, desc)}
//                                 >Mint Nft
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </div>
//                 </Box>
//
//             </Grid>
//
//         </>
//     )
// }
// let backgroundImages = [];
//
//
// let flavourImages = [];

