import React from 'react';
import {
  Typography,
  CardContent,
  CardActions,
  ListItem,
  ListItemIcon,
  ListItemText, List,
  Divider
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default class Contact extends React.Component {
  render() {
    return(
      <CardContent style={{padding: 0}}>
        <div>
          <Typography gutterBottom variant="h5" component="h2" style={{padding: 12}}>
            Yhteystiedot:
          </Typography>
          <CardActions style={{padding: 0}}>
            <List style={{width: '100%'}}>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon/>
                </ListItemIcon>
                <ListItemText primary="+358440211204"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon/>
                </ListItemIcon>
                <ListItemText primary="toni.vanttinen@dnainternet.net"/>
              </ListItem>
              <Divider />
              <ListItem button onClick={ () => window.open('https://www.linkedin.com/in/toni-vanttinen/')}>
                <ListItemIcon>
                  <LinkedInIcon/>
                </ListItemIcon>
                <ListItemText primary="LinkedIn"/>
              </ListItem>
              <ListItem button onClick={() => window.open('https://github.com/Muskotti')}>
                <ListItemIcon>
                  <GitHubIcon/>
                </ListItemIcon>
                <ListItemText primary="Github"/>
              </ListItem>
            </List>
          </CardActions>
        </div>
      </CardContent>
    )
  }
}
