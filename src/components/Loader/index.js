import React from 'react';
import { LinearProgress } from '@material-ui/core';
import Logo from "../../assets/logo.png";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

export default function Loader(){
    return(
        <>
            <Grid container justify="center" alignItems="center">
                <Avatar className='logoLoader'src={Logo}/>
            </Grid>
            <h4>is thinking</h4>
            <LinearProgress variant="query" className='loader'color="secondary" />
        </>
    )
}


