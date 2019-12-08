import React from 'react';
import {Typography, Box} from "@material-ui/core";


export default class Portfolio extends React.Component {

  render() {
    return (
      <Typography
        component="div"
      >
        {this.props.value === this.props.index && <Box>
          <Typography variant="h1" align={"center"} style={{paddingTop: 100}}>
            Tähän kortteja
          </Typography>
        </Box>}
      </Typography>
    );
  }
}
