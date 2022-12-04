import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import {Grid, Button} from "@mui/material";

export default function CollectionNft(){

    const handlerNewPage = () => {
        
    }

    return (
        <>
            <Head><title>Certus - Collections</title></Head>
            <DashboardAppBar></DashboardAppBar>
            <Grid
                position="fixed"
                container
                spacing={0}
                direction="column"
                sx={{
                    marginTop: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#D9FCF3',
                }}
            >

                <div className="description-login font colorfont1" style={{color: '#11e3ab', marginTop: 40, marginLeft: 40}}>
                    My Collection
                </div>
                <div className="font" style={{color: '#041D3D', marginTop:50, marginLeft:110, size:12}}> To checkout your collection of nfts, please visit 
                    <Button style={{marginLeft:10, backgroundColor:'#D9FCF3', color: '#11e3ab'}} variant="contained" href="https://certus.vercel.app/" target="_blank">Certus
                    </Button>
                </div>
            </Grid>
            
        </>
    )
}