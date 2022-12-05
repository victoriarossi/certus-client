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

export function callApi(name, desc){
    const info =
    {
        targetWalletAddress: "0x8435B451bBB8B58b93BAf90b8f30Ae96AB003DD2",
        bkgs: [{image:"aaaaa",name:"back1"}],
        flrs:  [{image:"aaaaaa",name:"flr1"}],
        imageURL:"imageURL",
        name: name,
        description:desc,
        brand: {image:"aaaaa",name:"brand"},
    }

        console.log(JSON.stringify(info))
   
        fetch("http://certusapi.brazilsouth.cloudapp.azure.com:80/metadataAndMint",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODZkNzVmNDBkNzQ3ZTg1N2NkZWY2ZSIsImlhdCI6MTY3MDE3MDI3NywiZXhwIjoxNjcwMjU2Njc3fQ.u1fMh_N3u75nwgJCnOZnz7VccOeAjZugmM1tWLphr24"
            },
            body: JSON.stringify(info)
        }).then(res => res.json())
    }

