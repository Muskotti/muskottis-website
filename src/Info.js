import React from 'react';
import {Typography, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Tamk from "./images/TRE_LA22_AMK____fi_B3___RGB.png";
import Luksia from "./images/Luksia-logo-vaaka-musta.jpg"
import SportsIcon from '@material-ui/icons/Sports';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GroupIcon from '@material-ui/icons/Group';

export default class Info extends React.Component {
  render() {
    return(
      <CardContent style={{padding: 0}}>
        <CardMedia
          style={{height: 240}}
          image={"https://media.giphy.com/media/IThjAlJnD9WNO/source.gif"}
          title="Tervehtivä karhu"
        />
        <div style={{padding: 12}}>
          <Typography gutterBottom variant="h5" component="h2">
            Tervetuloa sivulleni!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom: 12}}>
            Löysit tänne todennäköisesti CV kautta tai, jos kerroin sinulle tästä, joten tunnet minusta jo jotakin, mutta jos et tässä viellä pikku faktoja minusta:
          </Typography>
          <Typography variant="body2" component="p">
            Tietoja minusta:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom: 12}}>
            Olen tietojenkäsittelyn opiskelija Tampereen ammattikorkeakoulussa, joka etsii töitä. Olen ollut projektin vetäjänä useassa projektissa. Olen aina innostunut opiskelemaan jotakin uutta ohjelmointiin liittyen. Olen huono kirjoittaja joten anna lisää infoa bulet pointeilla.
          </Typography>
          <Typography variant="body2" component="p">
            Harrastuksia:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <GroupIcon color={"secondary"}/>
              </ListItemIcon>
              <ListItemText primary="Lautapelit"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SportsIcon color={"secondary"}/>
              </ListItemIcon>
              <ListItemText primary="Salilla käynti"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SportsEsportsIcon color={"secondary"}/>
              </ListItemIcon>
              <ListItemText primary="Pelaaminen"/>
            </ListItem>
          </List>
          <Typography variant="body2" component="p">
            Opinnot:
            <br/>
            <a href='https://www.tuni.fi'><img src={Tamk} alt="Tamk logo" style={{width: '100%', background: 'white'}}/></a>
            <br/>
            <a href='https://www.luksia.fi'><img src={Luksia} alt="Luksia logo" style={{width: '100%'}}/></a>
          </Typography>
        </div>
      </CardContent>
    )
  }
}
