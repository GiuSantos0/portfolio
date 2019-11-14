import React from 'react';
import Sidenav from '../../components/Header';
import './styles.css';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Eu from '../../assets/eu.jpeg'
import Curriculo from '../../assets/curriculo.pdf'

export default function Home(){
    return (
        <>
            <h1 className='anim-typewriter line'>
                Hi, I'm Giulia,
                I'm Web Developer
            </h1>
            <h4> Dev Front End | Designer | In love for art and development </h4>
            <Grid container justify="center" alignItems="center">
                <Avatar className='avatar'src={Eu}/>
            </Grid>
            <h4> 
                <a target="_blank" href='https://www.linkedin.com/in/giulia-santos-7a096a156/'>Linkedin </a>|
                <a target="_blank" href='https://github.com/GiuSantos0'> Github </a>|
                <a target="_blank" href={Curriculo}> Curriculo </a>
            </h4>

        </>
    )
}