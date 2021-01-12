import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Box, ListSubheader } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import Morevert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home'; 
import WhatshotIcon from '@material-ui/icons/Whatshot'; //
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircle from '@material-ui/icons/AddCircle';

import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';



const useStyles = makeStyles((theme) => ({

    root: {
      height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
        flexGrow: 1
    },
    icons: {
         paddingRight: theme.spacing(2)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    logo: {
        height: 25,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        borderRight: 'none'
      },
      listItemText: {
        fontSize: 12  
      },
      listItem: {
          paddingTop: 4,
          paddingBottom: 4,
      }


 
 }));


function Home() {

    const classes = useStyles();
   
    return (
    
    <div className = {classes.root}>

            <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
            
                <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <img src ="/images/preto.png" alt = "logo" className = {classes.logo} />
                <div className = {classes.grow}/>
                <IconButton className={classes.icons} color="inherit">
                <VideoCall />
                </IconButton>
                <IconButton  className={classes.icons} color="inherit" >
                <Apps />
                </IconButton>
                <IconButton className={classes.icons} color="inherit" >
                <Morevert />
                </IconButton>
               
                <Button variant = "outlined" startIcon={<AccountCircle />} color="secondary">Fazer Login</Button>
            </Toolbar>
            </AppBar>
            <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button classes = {{root: classes.listItem}}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes = {{
                    primary: classes.listItemText
                }}
                
                primary={'Inicio'} />
              </ListItem>

              <ListItem button classes = {{root: classes.listItem}}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes = {{
                    primary: classes.listItemText
                }}
                
                primary={'Em Alta'} />
              </ListItem>

              <ListItem button classes = {{root: classes.listItem}}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText classes = {{
                    primary: classes.listItemText
                }}
                
                primary={'Inscrições'} />
              </ListItem>
              <br />
              <Divider />
              <br />
          <ListItem button classes = {{root: classes.listItem}}>
              <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText classes = {{
                    primary: classes.listItemText
                }}
                
                primary={'Biblioteca'} />
              </ListItem>

              <ListItem button classes = {{root: classes.listItem}}>
              <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText classes = {{
                    primary: classes.listItemText
                }}
                
                primary={'Histórico'} />
              </ListItem>
              </List>
          <Divider />
          <Box p={4}>
                 <Typography
                 variant='body2'>

                     Faça login para curtir vídeos, comentar e se inscrever.
                 </Typography>
                 <Box mt={2}>
                     <Button
                         variant='outlined'
                         color='secondary'
                         startIcon={<AccountCircle />}>
                             Fazer login
                     </Button>
                 </Box>
          </Box>
          <Divider />
          <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
        </div>
      </Drawer>
    </div> 
    );
}

export default Home;