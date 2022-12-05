import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import Rest from "../modules/Rest";
import react, { useState,useEffect} from "react";
import  { Component } from 'react';
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Web3 from "web3";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BarLoader,DoubleBubble, SlidingPebbles,DoubleOrbit, Spinner} from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
export default function CollectionNft(){
    //let provider = window.ethereum;
    let selectedAccount;

    const [account, setAccount] = useState("");
    const [toAddress,setToAddress] = useState("")
    const [tokenId,setTokenId] = useState("")
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
  async function loadBlockChain() {
    ethereum
    .request({ method: 'eth_requestAccounts' })
    
    const network = await web3.eth.net.getNetworkType();
    console.log(network); // should give you main if you're connected to the main network via metamask...
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];

    setAccount(accounts[0]);
  }

  useEffect(() => loadBlockChain, []);
 function onChange(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       setTokenId( e.target.value)
    }
 }

                                                            

async function loadContract(){

    let address = "0x20C0398C33dc3EC68fdAE6cFa4F38edA275532b0";
    let chainlinkFutureContractABI = [{
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }];
    

      var myContractInstance = new web3.eth.Contract(chainlinkFutureContractABI, address);
      try{
      setError(false)
      setLoading(true)
      myContractInstance.methods.transferFrom(account,toAddress,parseInt(tokenId,10))
         .send({
                 from: account, 
                 gas: 0x00, 
                 gasPrice: 0x00
        }).then(receipt=> {
            setOpen(o => !o); setLoading(false)} ).catch(error => {setError(o => !o);setLoading(false)});
    }catch(e){
        setLoading(false)
        setError(o => !o)
    }
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
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginTop: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#D9FCF3',
                }}
            >
          
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                 <a className="close" onClick={closeModal}>
                    &times;
                    Your transfer de NFT
                </a>

                </div>
            </Popup>
                <div className="description-login font colorfont1 center-text" style={{color: '#11e3ab', marginBottom: 50}}>
                    Transfer NFT
                </div>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 500,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: '#11e3ab',
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
                    {!loading?
                        <Grid
                            contairner
                        >
                            {error?
                            <p color="red">Error tranfering</p>
                            : null
                        }
                       
                            <Grid item xs={12}>
                                <TextField fullWidth label="Wallet" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} onChange={(e)=> setToAddress(e.target.value)} className="textFieldColor" />
                                <TextField fullWidth value={tokenId} label="Token Id" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} onChange={(e)=>onChange(e)} className="textFieldColor" />

                            </Grid>

                            <Grid item xs={12}>
                                <Button style={{marginTop: 10, marginBottom: 10, backgroundColor:'#D9FCF3', color: '#11e3ab'}} variant="contained" onClick={loadContract}>Transfer</Button>
                            </Grid>
                            
                                                  
                        </Grid>
                         :
                         <Spinner text={"Loading..."} bgColor={"#D9FCF3"} 
                         center={false} width={"120px"} height={"120px"}/>
                         }
                    </div>
                </Box>
                
            </Grid>
        </>
    )
}