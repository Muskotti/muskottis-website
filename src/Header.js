import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, Button, AppBar, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={handleClick} />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Iconi rakentaja</MenuItem>
                            <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                            <MenuItem onClick={handleClose}>Minä</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        PalkaaToni.fi
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
