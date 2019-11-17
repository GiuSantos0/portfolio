import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Logo from "../../assets/logo.png";

export default function Loader(){
    return(
        <>
            <img className='logoLoader'src={Logo}/> 
            <h4>is thinking</h4>
            <CircularProgress variant="query" className='loader'color="secondary" />
        </>
    )
}


