import React, { useState } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Card, IconButton, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './style.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#232323',
        border: '1px solid #c83ff8',
        boxShadow: '5px 10px #c83ff8',
        margin: '1%',
        color: '#ffb503',
        width: 220,
    },
    '.MuiDialog-paper': {
        backgroundColor: '#272626',
        boxShadow: '3px 3px #c83ff8',
        border: '1px solid #c83ff8',
        color: '#ffaf06',
    },
    title: {
        fontFamily: 'Fira Code !important'
    },
    description: {
        fontFamily: 'Fira Code !important',
        color: '#c83ff8'
    },
    buttonMore: {
        fontFamily: 'Fira Code !important',
        boxShadow: '3px 3px #c83ff8',
        backgroundColor: '#ffb503',
        border: '1px solid #c83ff8',
        '&:hover': {
            color: '#c83ff8'
        }
    },
    modal: {
        width: '100%',
        border: '1px solid #c83ff8',
        color: '#c83ff8'
    },
    imgModal: {
        width: '100%'
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        color: '#c83ff8',
      },
});

const MyDialogTitle = ((props) => {
    const classes = useStyles();
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} style={{ color: '#c83ff8'}}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  });

export default function Project({ image, title, children, actionButton, type, link }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        if (type == 'design') {
            setOpen(true)
        } else {
            window.open(link, '_blank');
        }
    }

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="140"
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                            {children}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ float: 'right' }}>
                    {actionButton ?
                        <Button size="small" className={classes.buttonMore} onClick={handleOpen}>
                            {actionButton}
                        </Button>
                        :
                        null
                    }
                </CardActions>
            </Card>
            <Dialog  fullScreen={fullScreen} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.modal}>
                <MyDialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.title}>
                    {title}
                </MyDialogTitle>
                <DialogContent dividers>
                    <img src={image} className={classes.imgModal}/>
                </DialogContent>
            </Dialog>
        </>
    );
}