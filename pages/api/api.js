import {useEffect} from "react";

// const express = require("express")
// const bodyParser = require("body-parser")
//
// const app = express()
//
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// app.post("/metadataAndMint", (name, description, bkgs, flrs, brand) =>{
//     res.json({
//
//     })
// })

export async function callApi(name, desc, bkgs, flrs, prodImg, targetWalletAddress){
    const info =
    {
        //targetWalletAddress: "0x3354aE289Ee94B9Ce1811AA5E827A2CE3a9DB335",
        targetWalletAddress: targetWalletAddress,
        bkgs: bkgs,
        flrs:  flrs,
        imageURL:"",
        name: name,
        description:desc,
        brand: {image:prodImg,name:"Adidas"},
    }

        console.log(JSON.stringify(info))
   
        fetch("http://certusapi.brazilsouth.cloudapp.azure.com:80/metadataAndMint",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODZkNzVmNDBkNzQ3ZTg1N2NkZWY2ZSIsImlhdCI6MTY3MDI2NDU5MywiZXhwIjoxNjcwMzUwOTkzfQ.3EokwJ7zYC5UFf1zsWYwn4W-QPcMerKvktGU0_4V-f4\n"
            },
            body: JSON.stringify(info)
        }).then(res => res.json())
    }

