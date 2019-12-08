import React from 'react';
import {AppBar, Tabs, Tab} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Profile from "./Profile";
import Portfolio from "./Portfolio"
import IconMaker from "./IconMaker"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

class MyTabs extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Tabs value={this.props.tab} onChange={(event, value) => this.props.changeTab(value)} centered>
            <Tab label="Minä"/>
            <Tab label="Portfolio"/>
            <Tab label="Iconi rakentaja"/>
          </Tabs>
        </AppBar>
        <Profile index={0} value={this.props.tab}/>
        <Portfolio index={1} value={this.props.tab}/>
        <IconMaker index={2} value={this.props.tab}/>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MyTabs);
