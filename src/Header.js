import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, AppBar, Menu, MenuItem, Switch, Grid, Button} from '@material-ui/core';
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

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      setAnchorEl: false,
    };
  }

  handleClick = event => {
    this.setState({
      setAnchorEl: true
    })
  };

  handleClose = () => {
    this.setState({
      setAnchorEl: false
    })
  };

  handleChange = name => event => {
    this.props.changeTheme();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Grid item>
                <IconButton edge="start" ref={"menu"} color={"inherit"} onClick={this.handleClick} className={classes.menuButton} >
                  <MenuIcon/>
                </IconButton>
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
              </Grid>
              <Grid item>
                <Typography component="div" style={{padding: 6}}>
                  <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Dark</Grid>
                    <Grid item>
                      <Switch
                        onChange={this.handleChange()}
                      />
                    </Grid>
                    <Grid item>Light</Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Header);
