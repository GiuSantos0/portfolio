import React from 'react';
import Sidenav from '../../components/Header';
import './styles.css';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Eu from '../../assets/eu.jpeg'
import Logo from '../../assets/logo.png'

export default function AboutMe(){
    return (
        <>
        <Grid container>
            <Grid item sm={12} md={6} lg={6}>
                    <h1 className='typewriterAbouMe line'>
                        About Me
                    </h1>
                    <Divider/>
 
                    <p className='displayInline'>
                        Hello, my name is Giulia Santos and I'm a Web Developer focused in Front-End. 
                         In last months I'm building a project very important for 
                         <a className='linkYellow displayInline'href="https://gfai.com.br/" target="_blank" > 
                            GFAI 
                         </a>, the DashPlan.
                    </p>
                    <p className='displayInline'>
                        In my free time: I study, stay with my family, I am a cheerleader of 2 teams (1 university and the other All Star) and vice president of Atletica Fênix ​​FMU.
                    </p>
                    <p className='displayInline'>
                        Even with so much to do, I was always able to manage my time well and so I am open to freelance work both in the Design area (Logo Design, Design UX / UI) and Dev Front End.                    
                    </p>

            </Grid>
            <Grid item md={6} lg={6}>
                <img className='logo' src={Logo}/>
            </Grid>
        </Grid>
        </>
    )
}