import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, AppBar, Menu, MenuItem, Switch} from '@material-ui/core';
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

export default class Header extends React.Component {

  state = {
    setAnchorEl: null
  }

  handleClick = event => {
    this.setState({
      setAnchorEl: event.currentTarget
    })
  };

  handleClose = () => {
    this.setState({
      setAnchorEl: null
    })
  };

  handleChange = name => event => {
    console.log(name);
  };

  render() {

    return (
      <div className={useStyles.root}>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon ref={"menu"} onClick={this.handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={this.refs.menu}
                keepMounted
                open={this.state.setAnchorEl}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Minä</MenuItem>
                <MenuItem onClick={this.handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={this.handleClose}>Iconi rakentaja</MenuItem>
              </Menu>
            </IconButton>
            <Typography variant="h6" className={useStyles.title}>
              PalkkaaToni.fi
            </Typography>
            <Switch onChange={this.handleChange()} value={true}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
