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
        <Grid container className='noOverflow'>
            <Grid item sm={11} md={6} lg={6}>
                    <h1 className='typewriterAbouMe lineAboutMe'>
                        About Me
                    </h1>
                    <Divider/>
 
                    <p className='displayInline'>
                        Hello, my name is Giulia Santos and I'm a Developer Full Stack focused in Front-End and freelance Designer. 
                        Currently I work full time at Versatus HPC as a front developer and I love the coffee there so much that I don't plan to leave anytime soon!
                        My current focus is on improving Node.js to get more full stack projects, so I'm doing the Bootcamp GoSack 12 by Rocketseat.
                    </p>
                    <p className='displayInline'>
                        In my free time: I study, stay with my family, I am a cheerleader of 2 teams (1 <a className='linkYellow' href="https://www.instagram.com/solarescheer/?hl=pt-br">university</a> and the other All Star, the <a className='linkYellow' href="https://www.instagram.com/spirit_oftitans">Spirit of Titans</a>). 
                        {/* In my all star team I am part of the social media team and therefore I take care of the instagram design part and the team products! */}
                    </p>
                    <p className='displayInline'>
                        My main skills are Javascript (React, React Native and Node.js), CSS and Photoshop. I have knowledge in libraries like Bootstrap, Materialize, Material UI, DataTables, Cordova, DevExpress and Chart Js.
                    </p>
                    <p className='displayInline'>
                        This portfolio it was my second project on React, I hope you are enjoying the experience of browsing it.                    
                    </p>
                    <p className='displayInline'>
                        Visit my <a target="_blank" className='linkYellow' href='https://www.linkedin.com/in/giulia-santos-7a096a156/'>Linkedin</a> for more details or contact me for <a target="_blank" className='linkYellow' href='https://api.whatsapp.com/send?phone=5511949439313&text=Ola!'>Whatsapp</a>.
                    </p>

            </Grid>
            <Grid item md={6} lg={6}>
                <img className='logo' src={Logo}/>
            </Grid>
        </Grid>
        </>
    )
}