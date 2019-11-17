import React from 'react';
import Sidenav from '../../components/Header';
import './styles.css';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Eu from '../../assets/eu.jpeg';
import Logo from '../../assets/logo.png';
import ChartSkills from '../../components/ChartSkills';

export default function Skills(){
    return (
        <>
        <Grid container>
            <Grid item sm={12} md={6} lg={6}>
                    <h1 className='typewriterSkills line'>
                        Skills
                    </h1> 
                    <p className='displayInline'>
                        My main skills are HTML, CSS, Javascript and Photoshop. I have knowledge in libraries like Bootstrap, Materialize, Material UI, DataTables, DevExpress and Chart Js.
                    </p>
                    <p className='displayInline'>
                        Lately what I've been studying the most is React Js, in the near future I would like to focus on React Native and Node Js.                    
                    </p>
                    <p className='displayInline'>
                        This portfolio is my second project on React, I hope you are enjoying the experience of browsing it.                    
                    </p>
                    <p className='displayInline'>
                        Visit my <a target="_blank" className='linkYellow' href='https://www.linkedin.com/in/giulia-santos-7a096a156/'>Linkedin</a> for more details or contact me for <a target="_blank" className='linkYellow' href='https://api.whatsapp.com/send?phone=5511949439313&text=Ola!'>Whatsapp</a>.
                    </p>

            </Grid>
            <Grid item md={6} lg={6}>
                <div className="marginTop">
                    <ChartSkills />
                </div>
            </Grid>
        </Grid>
        </>
    )
}