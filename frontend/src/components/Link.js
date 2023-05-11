import React, { useState } from "react"
import axios from 'axios';

export default function Link(){
    
    const handleLink1=()=>{
        const date=new Date();
        const result={
            link:'Link 1',
            no_clicks: 1,
            date
        }
        axios.post('http://localhost:5001/api/data', result)
        .then(res=>{
            console.log('successful')
        }).catch(error=>{
            console.log("error in frontend", error)
        })
    }
    const handleLink2=()=>{
        const date=new Date();
        const result={
            link:'Link 2',
            no_clicks: 1,
            date
        }
        axios.post('http://localhost:5001/api/data', result)
        .then(res=>{
            console.log('successful')
        }).catch(error=>{
            console.log("error in frontend", error)
        })
    }
    return(
        <div>
            <a href="#" onClick={handleLink1}>Link1 </a> <br/>
            <a href="#" onClick={handleLink2}>Link2 </a>
        </div>
    )
}
