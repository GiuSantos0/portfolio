import React from 'react';
import Project from '../../../components/Project';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Data from './data';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    imagens:{
        borderRadius: '50px'
    }
  }));
  

export default function AboutMe(){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container>
                <Grid item sm={11} md={11} lg={11}>
                        <h1 className='typewriterAbouMe line'>
                            Projects
                        </h1>
    
                        <div className='displayInline'>                 
                        <GridList className={classes.gridList} cols={4}>
                            {Data.map(tile => (
                            <Project 
                                image={tile.img} 
                                href={tile.local} 
                                title={tile.title} 
                                type={tile.type}
                                behance={tile.behance}
                                actionButton={tile.actionButton}
                            >
                                olaola
                                {/* <img src={tile.img} className='gridListImg'alt={tile.title} href={tile.local}/> */}
                            </Project>
                            ))}
                        </GridList>
                    </div>
                </Grid>
            </Grid>

            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    {Data.map(tile => (
                        <>
                        <h2 id="transition-modal-title">{tile.title}</h2>
                        <img className='imgModal'src={tile.img} alt={tile.title} />
                        </>
                    ))}
                </div>
            </Fade>
        </Modal>
        </>
    )
}