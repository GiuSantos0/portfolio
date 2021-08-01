import React from 'react';
import Project from '../../components/Project';
// import './styles.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Data from './dataDevelopment';
import DataDesign from './Design/data';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));


export default function AboutMe() {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item sm={11} md={11} lg={11}>
                        <h1 className='typewriterAbouMe line'>
                            Projects developed by me
                        </h1>
                    <Grid container spacing={2}> 
                            {Data.map(prjct => (
                                <Grid item xs={11} sm={5} md={5} lg={4}>
                                    <Project
                                        image={prjct.img}
                                        href={prjct.local}
                                        title={prjct.title}
                                        type={prjct.type}
                                        link={prjct.link}
                                        actionButton={prjct.actionButton}
                                    >
                                        {prjct.description}
                                    </Project>
                                </Grid>
                            ))}
                        </Grid>
                        <h1 className='typewriterAbouMe line'>
                            Projects design by me
                        </h1>
                        <Grid container spacing={2}>
                            {DataDesign.map(prjct => (
                                <Grid item xs={11} sm={5} md={3} lg={3}>
                                    <Project
                                        image={prjct.img}
                                        href={prjct.local}
                                        title={prjct.title}
                                        type={prjct.type}
                                        link={prjct.link}
                                        actionButton={prjct.actionButton}
                                    >
                                        {prjct.description}
                                    </Project>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}