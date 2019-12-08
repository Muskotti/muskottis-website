import React from 'react';
import {Typography, CardContent, CardActions, IconButton} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Contact extends React.Component {
  render() {
    return(
      <CardContent style={{padding: 0}}>
        <div style={{padding: 12}}>
          <Typography gutterBottom variant="h5" component="h2">
            Yhteystiedot
          </Typography>
          <CardActions>
            <IconButton onClick={ () => window.open('https://www.linkedin.com/in/toni-vanttinen/')}>
              <LinkedInIcon/>
            </IconButton>
            <IconButton onClick={ () => window.open('https://github.com/Muskotti')}>
              <GitHubIcon/>
            </IconButton>
          </CardActions>
        </div>
      </CardContent>
    )
  }
}
