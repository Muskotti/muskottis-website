import React from 'react';
import {Card, Grid, Box} from "@material-ui/core";
import Info from "./Info"
import Contact from "./Contact";

const style = {
  maxWidth: 345,
  minWidth: 345,
}

class Profile extends React.Component {

  render() {
    if(this.props.value === this.props.index) {
      return (
        <div style={{maxWidth: '100vw', overflow: "hidden", paddingBottom: 100}}>
          <Box style={{paddingTop: 100, flex: 1}}/>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Card style={style}>
                <Info/>
              </Card>
            </Grid>
            <Grid item>
              <Card style={style}>
                <Contact/>
              </Card>
            </Grid>
          </Grid>
        </div>
      )
    }
    return (
      null
    );
  }
}

export default Profile;
