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

  state = {
    value: 0
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    })
  };

  setProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Tabs value={this.state.value} onChange={this.handleChange} centered>
            <Tab label="Minä" {...this.setProps(0)}/>
            <Tab label="Portfolio" {...this.setProps(1)}/>
            <Tab label="Iconi rakentaja" {...this.setProps(2)}/>
          </Tabs>
        </AppBar>
        <Profile index={0} value={this.state.value}/>
        <Portfolio index={1} value={this.state.value}/>
        <IconMaker index={2} value={this.state.value}/>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MyTabs);
