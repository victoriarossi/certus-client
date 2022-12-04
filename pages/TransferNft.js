import Head from "next/head";
import DashboardAppBar from "../modules/DashboardAppBar";
import * as React from "react";
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Rest from "../modules/Rest";
import react, { useState,useEffect} from "react";
import  { Component } from 'react';
import Web3 from "web3";


export default function TransferNft(){

    //let provider = window.ethereum;
    let selectedAccount;

    const [account, setAccount,to] = useState("");
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
      myContractInstance.methods.transferFrom(account,"0xD9429F1567355B5532B0F2051b2e565eA4cB302b",185)
         .send({
                 from: account, 
                 gas: 0x00, 
                 gasPrice: 0x00
        }).then(receipt=> {console.log(receipt)});
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

                        <Grid
                            contairner
                        >
                            <Grid item xs={12}>
                                <TextField fullWidth label="Wallet" id="fullWidth" style={{width: '100%', marginTop: 10, marginBottom: 10}} className="textFieldColor" />
                            </Grid>

                            <Grid item xs={12}>
                                <Button style={{marginTop: 10, marginBottom: 10, backgroundColor:'#D9FCF3', color: '#11e3ab'}} variant="contained" onClick={loadContract}>Transfer</Button>
                                <p>Your account: {account}</p>
                            </Grid>

                        </Grid>
                    </div>
                </Box>
            </Grid>
        </>
    )
}