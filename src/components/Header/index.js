import React from 'react';
import clsx from 'clsx';
import { 
  makeStyles, 
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@material-ui/core';
import {
  PersonOutlined,
  HomeOutlined,
  SettingsOutlined,
  VisibilityOutlined
} from '@material-ui/icons';

import Logo from "../../assets/logo2.png";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'transparent',
    zIndex:'20',
    display: 'none'

  },
  menuButton: {
    margin:"10%",
    width: theme.spacing(4) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6) + 1,
    },
    
  },
  drawer: {
    zIndex:'20',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: '#000',
    color:'#c103ff'
  },
  drawerClose: {
    zIndex:'20',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icons:{
    color:'#ffb503',
    padding:theme.spacing(0) + 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1) + 1,
    },

  },
  formatacao:{
    fontFamily: 'Fira Code, monospace !important'

  }
}));

export default function Sidenav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {/* Mini variant drawer */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <img className={classes.menuButton} src={Logo}/>
        </div>
        <Divider />
        <List>
            <Tooltip title="Home">
              <ListItem button key='Home' component="button" href="/" className='active'>
                <ListItemIcon className={classes.icons}>
                  <HomeOutlined /> 
                  </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Tooltip>
            <Tooltip title="About">
              <ListItem button key='About' component="button" href="/AboutMe">
                <ListItemIcon className={classes.icons}>
                  <PersonOutlined /> 
                  </ListItemIcon>
                <ListItemText primary='About' />
              </ListItem>
            </Tooltip>
            <Tooltip title="Skills">
              <ListItem button key='Skills' component="button" href="/Skills">
                <ListItemIcon className={classes.icons}>
                  <SettingsOutlined /> 
                  </ListItemIcon>
                <ListItemText primary='Skills' />
              </ListItem>
            </Tooltip>
            <Tooltip title="My Job">
              <ListItem button key='My Job' title="My Job" component="button" href="/MyJob">
                <ListItemIcon className={classes.icons}>
                  <VisibilityOutlined /> 
                  </ListItemIcon>
                <ListItemText primary='My Job' />
              </ListItem>
            </Tooltip>
        </List>
      
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {props.conteudo}
      </main>
    </div>
  );
}