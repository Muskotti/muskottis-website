import React from 'react';
import {AppBar, Tabs, Tab} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MyTabs() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Minä" />
          <Tab label="Portfolio" />
          <Tab label="Iconi rakentaja" />
        </Tabs>
      </AppBar>
    </div>
  );
}
