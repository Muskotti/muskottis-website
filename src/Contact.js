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
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PDF from './images/Toni_Vänttinen_CV.pdf'
import { mdiDiscord } from '@mdi/js';
import Icon from "@mdi/react";

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
                  <PhoneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="+358440211204"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="toni.vanttinen@dnainternet.net"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="toni@palkkaatoni.fi"/>
              </ListItem>
              <Divider />
              <ListItem button onClick={ () => window.open('https://discordapp.com/users/Muskotti#2841/')}>
                <ListItemIcon>
                  <Icon path={mdiDiscord}
                        title="Discord link"
                        size={1}
                        color="#80deea"
                  />
                </ListItemIcon>
                <ListItemText primary="Muskotti#2841"/>
              </ListItem>
              <ListItem button onClick={ () => window.open('https://www.linkedin.com/in/toni-vanttinen/')}>
                <ListItemIcon>
                  <LinkedInIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="LinkedIn"/>
              </ListItem>
              <ListItem button onClick={() => window.open('https://github.com/Muskotti')}>
                <ListItemIcon>
                  <GitHubIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Github"/>
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.open(PDF)}>
                <ListItemIcon>
                  <PictureAsPdfIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="CV PDF"/>
              </ListItem>
            </List>
          </CardActions>
        </div>
      </CardContent>
    )
  }
}
