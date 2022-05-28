
import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format';


const widthdrw = 240;
const useStyle = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding:theme.spacing(3)
        },
        drawer: {
            width: widthdrw
        },
        drawpaper: {
            width: widthdrw
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width: `calc( 100% - ${widthdrw}px)`
        },
        toolbar: theme.mixins.toolbar
    }

})

export default function Layout({ children }) {
    const classes = useStyle();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='primary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='primary' />,
            path: '/create'
        }
    ]


    return (
        <div className={classes.root} >
            <AppBar className={classes.appbar} elevation={0} color='inherit'>
                <Toolbar>
                    <Typography>
                        {format(new Date, 'do MMMM y')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawpaper }}
            >
                <Typography variant='h5' className={classes.title}>
                    Note Ninja
                </Typography>

                <List>
                    {menuItem.map(iteam => (
                        <ListItem
                            key={iteam.text}
                            button
                            onClick={() => navigate(iteam.path)}
                            className={location.pathname === iteam.path ? classes.active : null}
                        >
                            <ListItemIcon>{iteam.icon}</ListItemIcon>
                            <ListItemText>{iteam.text}</ListItemText>
                        </ListItem>

                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
                
                
            </div>

        </div>
    )
}
