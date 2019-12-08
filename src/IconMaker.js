import React from 'react';
import {Typography, Box} from "@material-ui/core";


export default class IconMaker extends React.Component {

  render() {
    return (
      <Typography
        component="div"
      >
        {this.props.value === this.props.index && <Box p={3}>{this.props.index}</Box>}
      </Typography>
    );
  }
}
