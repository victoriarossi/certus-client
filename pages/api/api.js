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
                'Authorization' : "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGZhMmRjMDBiNzliMDYyZTNhNzUxNSIsImlhdCI6MTY3MDM1ODY1NiwiZXhwIjoxNjcwNDQ1MDU2fQ.xTHirNkK1NkywvYrN2iAlixoapcco9HXjAFZtnAtHec\n"
                //TODO -> state
            },
            body: JSON.stringify(info)
        }).then(res => res.json())
    }

